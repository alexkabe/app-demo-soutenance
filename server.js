const express = require("express");
const path = require("path");

const app = express();

// Dossier des fichiers statiques (HTML, CSS, images…)
app.use(express.static(path.join(__dirname, "public")));

// Route d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});
