# My Hello World App

Ce projet contient une application Node.js simple avec un backend Express, une base de données MySQL, et une interface front-end. Il est conteneurisé à l'aide de Docker et Docker Compose.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (si vous souhaitez tester le backend localement sans Docker)

## Structure du projet

Voici la structure du projet :

my-hello-world-app/ ├── backend/ │ ├── Dockerfile │ ├── server.js │ └── package.json ├── frontend/ │ ├── Dockerfile │ └── [fichiers front-end] ├── docker-compose.yml └── README.md

## Build et Run avec Docker

### 1. **Cloner le projet**

Clonez le projet depuis GitHub (ou un autre dépôt) sur votre machine locale :

```bash
git clone https://github.com/ton-utilisateur/my-hello-world-app.git
cd my-hello-world-app
```


# 2. Construire et démarrer les services avec Docker Compose
Le projet utilise Docker Compose pour orchestrer les différents services (backend, frontend, MySQL, etc.). Vous pouvez construire et démarrer les services en exécutant la commande suivante dans la racine du projet :

docker-compose up --build


Cette commande va :

Construire les images Docker pour le backend et le frontend.
Démarrer les services, y compris MySQL, le backend sur le port 5000 et le frontend sur le port 3000.
Utiliser docker-compose.yml pour configurer les ports et les dépendances entre les conteneurs.
# 3. Accéder à l'application
Une fois les services démarrés, vous pouvez accéder à l'application de la manière suivante :

Backend API : http://localhost:5000
Point d'entrée : GET / renvoie "Hello World from Backend!"
Point de vérification de santé : GET /api/health renvoie { status: "OK" }
Frontend : http://localhost:3000
Une interface utilisateur simple qui communique avec le backend via l'API.
# 4. Vérification de l'état de santé de l'application
Vous pouvez tester la route /api/health du backend pour vérifier que l'application fonctionne correctement. Utilisez la commande suivante :

```bash
curl http://localhost:5000/api/health
```

Cela devrait renvoyer une réponse de type :

```json
{
  "status": "OK"
}
```

# 5. Arrêter les services
Pour arrêter les services et nettoyer les conteneurs, utilisez la commande suivante :

```bash
docker-compose down

```
Cela arrêtera et supprimera les conteneurs, mais les images Docker resteront sur votre machine.

# Développement local sans Docker
Si vous préférez tester l'application sans Docker, vous pouvez suivre ces étapes :

Backend
Installez les dépendances du backend :
```bash
cd backend
npm install

```


# Démarrez le backend sur le port 5000 :

```bash
npm start
```
L'application backend sera accessible à http://localhost:5000.

# Frontend
Installez les dépendances du frontend :

```bash
cd frontend
npm install
```

Démarrez le frontend sur le port 3000 :
```bash
npm start
```
L'application frontend sera accessible à http://localhost:3000.



# GitHub Actions CI/CD Workflow

# Description

Ce projet utilise un workflow GitHub Actions pour automatiser les tâches CI/CD, assurant ainsi la qualité et le bon fonctionnement du code.

Workflow : CI/CD Workflow

Déclencheurs

# Le workflow est automatiquement déclenché dans les cas suivants :

Push : Lorsque des modifications sont poussées dans la branche main.

Pull Request : Lorsqu'une pull request est ouverte ou mise à jour vers la branche main.

Environnement

Le workflow s'exécute sur une machine virtuelle utilisant Ubuntu (ubuntu-latest).

# Étapes du Workflow

1. Vérification du code source

- name: Checkout code
  uses: actions/checkout@v3

Télécharge le code source du dépôt dans l'environnement de la machine virtuelle GitHub Actions.

2. Configuration de Docker Buildx

- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v2

Configure Docker Buildx pour permettre la création d'images multiplateformes.

3. Lint du fichier Dockerfile

- name: Lint Dockerfile
  run: docker run --rm -i hadolint/hadolint:latest < Dockerfile.cadvisor

Utilise Hadolint, un outil de linting pour Dockerfile, afin de détecter les mauvaises pratiques et erreurs potentielles.

Exemple de test effectué :

DL3007 : Avertit si le tag latest est utilisé dans l'image Docker, car cela peut entraîner des comportements imprévisibles.

4. Build et test avec Docker Compose

- name: Build and Test with Docker Compose
  run: |
    docker-compose -f docker-compose.yml up --build -d
    docker-compose -f docker-compose.yml ps

Construit et démarre les services définis dans le fichier docker-compose.yml.

Vérifie que les conteneurs démarrent correctement et que les images se construisent sans erreur.

5. Nettoyage des conteneurs

- name: Clean up
  if: always()
  run: docker-compose -f docker-compose.yml down

Arrête et supprime tous les conteneurs après les tests, quelle que soit l'issue des étapes précédentes.

# Comment Utiliser ce Workflow ?

Assurez-vous que votre fichier docker-compose.yml et vos Dockerfiles sont correctement configurés.

Modifiez ou ajoutez du code dans la branche main ou soumettez une pull request.

Consultez l'onglet Actions sur GitHub pour voir les résultats des tests et des étapes CI/CD.

# Exemple de Résultat

Si tout fonctionne correctement :

Les tests passent avec succès.

Les conteneurs se construisent et s'exécutent sans erreur.

# En cas d'erreur :

Le workflow s'arrête et affiche un message d'erreur détaillé, permettant de corriger rapidement.

Améliorations Futures

Ajouter des tests automatisés pour les fonctionnalités de l'application.

Implémenter un déploiement automatique vers un environnement de production.

Intégrer un monitoring pour les conteneurs en production.

Ressources





GitHub Actions Documentation

Hadolint Documentation

Docker Compose Documentation
