# Image Node officielle
FROM node:18

# Dossier de travail
WORKDIR /app

# Copier les fichiers package.json / package-lock.json
COPY package*.json ./

# Installer les dépendances (inclut nodemon en dev)
RUN npm install

# Copier tout le code du projet
COPY . .

# Exposer le port du serveur
EXPOSE 3000

# Lancer nodemon pour le hot reload
CMD ["npx", "nodemon", "server.js"]
