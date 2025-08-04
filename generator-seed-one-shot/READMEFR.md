Sovereign Seed Generator

Bienvenue sur le Sovereign Seed Generator, un projet test et open source permettant de générer une seed phrase de 12 mots conforme au standard BIP‑39.

Ce projet a été créé dans le cadre de ma candidature à Holberton School, pour démontrer mes compétences en développement web et en sécurité crypto.

🚀 Fonctionnement

    Le générateur est contenu dans un seul fichier index.html, incluant le HTML, le CSS et le JavaScript.

    Il peut être ouvert directement dans n’importe quel navigateur :

        Sur ordinateur (Windows, Linux, Mac) : double-cliquez sur le fichier pour l’ouvrir immédiatement.

        Sur smartphone (iPhone ou Android) :

            Téléchargez gratuitement un éditeur de texte HTML depuis l’App Store ou le Play Store (par ex. HTML Viewer).

            Ouvrez le fichier index.html dans cet éditeur.

            Déconnectez Internet pour l’utiliser en mode offline et garantir la sécurité.

    ⚡ Important : vos seed phrases ne quittent jamais votre appareil.

📖 Mode d’emploi

    Rendez-vous sur le dépôt GitHub et téléchargez le fichier index.html.

    Ouvrez le fichier :

        sur ordinateur : directement dans votre navigateur ;

        sur smartphone : via un éditeur de texte HTML téléchargé gratuitement sur l’App Store ou le Play Store.

    Cliquez sur “Générer vos cinq mots” :

        Une liste de 2048 mots s’ouvrira.

        Vous pouvez choisir la langue (français ou anglais).

    Sélectionnez 5 mots de votre choix :

        Pour amplifier le côté aléatoire, vous pouvez par exemple faire défiler la liste avec la molette de la souris, fermer les yeux et cliquer au hasard.

    Une fois vos 5 mots choisis, le bouton “Générer votre Seed” devient actif.

    Cliquez dessus pour obtenir automatiquement une seed phrase complète de 12 mots.

    En dessous, vous trouverez 3 liens vers des sites de vérification (Ian Coleman, Coinplate Recovery Tool et 1k BIP39 Tool) que vous pouvez utiliser, une fois reconnecté à Internet, pour valider votre seed phrase.

    🔑 Standard BIP‑39 – Déjà utilisable

    Le générateur crée des phrases mnémoniques de 12 mots conformes au standard BIP‑39.

    Ces seed phrases sont immédiatement utilisables et vérifiées :

        Il suffit de les entrer dans le portefeuille crypto de votre choix (Bitcoin, Ethereum, Solana, XRP, etc.).

        Le portefeuille générera automatiquement votre adresse selon son propre schéma interne de dérivation.

    La dérivation path, qui sera intégrée dans une version future du projet, permettra de générer directement les adresses de chaque blockchain sans passer par un portefeuille externe.

    🔍 Vérification de compatibilité

Vous pouvez vérifier la validité et la compatibilité de vos seed phrases via ces outils de référence :

    Ian Coleman’s BIP39 Tool

    Coinplate Recovery

    OneKey BIP39 Tool

🎯 Objectif du projet

Ce projet est aujourd’hui une démonstration fonctionnelle dans le cadre de mon entrée à Holberton School.
Il a pour objectifs :

    permettre dès maintenant la génération de seed phrases valides et utilisables immédiatement,

    évoluer vers un outil complet capable de générer directement les adresses de wallets (BTC, ETH, XRP, SOL, etc.) grâce aux dérivation paths.

❤️ Soutien au projet

Le générateur est gratuit et open source.
Si vous souhaitez soutenir mon parcours et m’aider à financer ma formation en ingénierie informatique, vous pouvez participer via ma cagnotte :

👉 Lien vers la cagnotte

Merci beaucoup pour votre aide et votre soutien 🙏

⚠️ Sécurité !

🇫🇷 Note importante :
Pour des raisons de sécurité, ce générateur ne fonctionne pas en HTTP sur un réseau non sécurisé.
Il nécessite soit :

    une utilisation offline (hors connexion Internet),

    soit une connexion en HTTPS.

📜 Licence

Projet open source – librement utilisable à des fins personnelles et éducatives.
