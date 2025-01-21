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

# Construire l'application React
RUN npm run build

# Utiliser une image nginx pour servir le build React
FROM nginx:stable-alpine

# Copier les fichiers build dans le conteneur nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exposer le port sur lequel Nginx écoute
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
