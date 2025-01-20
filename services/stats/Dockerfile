# Utiliser une image Node.js officielle
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code dans le conteneur
COPY . .

# Exposer le port sur lequel le service écoute
EXPOSE 4001

# Lancer le service de statistiques
CMD ["node", "index.js"]
