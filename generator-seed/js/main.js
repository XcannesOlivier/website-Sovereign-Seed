const selectedWords = [];

document.addEventListener("DOMContentLoaded", () => {
  const completeBtn = document.getElementById("completeSeed");
  const openSelectorBtn = document.getElementById("openWordSelector");
  const resetBtn = document.getElementById("resetSelection");
  const selectedBox = document.getElementById("selectedWords");
  const wordContainer = document.getElementById("wordListContainer");

  // 🔁 Réinitialisation au chargement de la page
  selectedWords.length = 0;
  completeBtn.disabled = true;
  openSelectorBtn.disabled = false;
  selectedBox.textContent = "No words selected";
  wordContainer.innerHTML = "";

  // 📝 Clique sur "Choisissez vos mots perso"
  openSelectorBtn.addEventListener("click", () => {
    const lang = document.getElementById("language").value;
    const wordlist = lang === "french" ? window.wordlistFr : window.wordlistEn;

    displayWordList(
      wordlist,
      selectedWords,
      selectedBox,
      completeBtn,
      openSelectorBtn,
      wordContainer
    );
  });

  // ♻️ Clique sur "Réinitialiser"
  resetBtn.addEventListener("click", () => {
    selectedWords.length = 0;
    selectedBox.textContent = "No words selected";
    completeBtn.disabled = true;
    openSelectorBtn.disabled = false;
    wordContainer.innerHTML = "";
  });

  // 👉 Bouton pour générer l'adresse BTC
  const btcBtn = document.getElementById("btcGenBtn");
  if (btcBtn) {
    btcBtn.addEventListener("click", async () => {
      const seed = document.getElementById("completedSeed").textContent.trim();
      const result = await window.generateBTCAddress(seed);

      if (result) {
        document.getElementById("btcAddress").textContent = result.address;
        document.getElementById("btcPrivateKey").textContent =
          result.privateKeyWIF;
      } else {
        alert("❌ Seed invalide ou erreur dans la génération.");
      }
    });
  }
});

document.getElementById("completeSeed").addEventListener("click", async () => {
  const lang = document.getElementById("language").value;
  const wordlistLang = lang === "french" ? "fr" : "en";

  const seed12 = await window.generateSeedWithPrefix(
    selectedWords,
    wordlistLang
  );

  document.getElementById("completedSeed").textContent = seed12.join(" ");

  const generated = seed12.slice(selectedWords.length);
  console.log("💡 Mots ajoutés automatiquement :", generated);
});

function displayWordList(
  wordlist,
  selectedWords,
  selectedBox,
  completeBtn,
  openSelectorBtn,
  wordContainer
) {
  wordContainer.innerHTML = "";

  const panel = document.createElement("div");
  panel.classList.add("word-panel");

  wordlist.forEach((word) => {
    const li = document.createElement("button");
    li.textContent = word;
    li.classList.add("word-btn");

    li.addEventListener("click", () => {
      if (selectedWords.length >= 5) return;

      selectedWords.push(word);
      selectedBox.textContent = selectedWords.join(" ");

      if (selectedWords.length === 5) {
        completeBtn.disabled = false;
        openSelectorBtn.disabled = true;
        wordContainer.innerHTML = "";
      }
    });

    panel.appendChild(li);
  });

  wordContainer.appendChild(panel);
}
