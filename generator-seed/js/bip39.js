// ✅ On suppose que wordlistEn et wordlistFr sont définies globalement (dans un autre fichier .js chargé avant celui-ci)

const getWordlist = (lang = "en") => {
  return lang === "fr" ? window.wordlistFr : window.wordlistEn;
};

const generateEntropy = () => {
  const array = new Uint8Array(16); // 128 bits
  window.crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(2).padStart(8, "0"))
    .join("");
};

const sha256 = async (binaryString) => {
  const byteArray = Uint8Array.from(
    binaryString.match(/.{1,8}/g).map((b) => parseInt(b, 2))
  );
  const hashBuffer = await crypto.subtle.digest("SHA-256", byteArray);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(2).padStart(8, "0")).join("");
};

const generateSeed = async (lang = "en") => {
  const wordlist = getWordlist(lang);
  const entropy = generateEntropy();
  const checksumBits = (await sha256(entropy)).slice(0, entropy.length / 32);
  const bits = entropy + checksumBits;

  const words = [];
  for (let i = 0; i < bits.length; i += 11) {
    const index = parseInt(bits.slice(i, i + 11), 2);
    words.push(wordlist[index]);
  }

  return words;
};

const generateSeedWithPrefix = async (chosenWords, lang = "en") => {
  const wordlist = getWordlist(lang);

  while (true) {
    const randomWords = await generateSeed(lang);
    const candidate = [
      ...chosenWords,
      ...randomWords.slice(chosenWords.length),
    ];

    const bitString = candidate
      .map((word) => {
        const index = wordlist.indexOf(word);
        return index.toString(2).padStart(11, "0");
      })
      .join("");

    const entropyBits = bitString.slice(0, 128);
    const checksum = (await sha256(entropyBits)).slice(0, 4);
    const expectedBits = entropyBits + checksum;

    const reconstructed = [];
    for (let i = 0; i < expectedBits.length; i += 11) {
      const index = parseInt(expectedBits.slice(i, i + 11), 2);
      reconstructed.push(wordlist[index]);
    }

    if (reconstructed.join(" ") === candidate.join(" ")) {
      return candidate;
    }
  }
};

// ✅ rendre les fonctions accessibles globalement :
window.generateSeedWithPrefix = generateSeedWithPrefix;
window.generateSeed = generateSeed;

