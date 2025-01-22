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
