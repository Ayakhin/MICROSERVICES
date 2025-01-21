Installation et configuration de Weave

Prérequis

Docker installé sur votre machine

Accès à un terminal avec les droits administrateur

Étapes

1. Installation de Weave

Exécutez les commandes suivantes :

curl -L git.io/weave -o /usr/local/bin/weave
chmod a+x /usr/local/bin/weave

2. Lancement de Weave

Pour lancer Weave sur votre machine :

weave launch

3. Installation de Weave Scope

Exécutez les commandes suivantes :

curl -L git.io/scope -o /usr/local/bin/scope
chmod a+x /usr/local/bin/scope
scope launch

4. Accéder à l'interface Web

Ouvrez votre navigateur et rendez-vous sur http://localhost:4040.

Ces étapes permettent de visualiser et de gérer vos conteneurs Docker à l'aide de l'interface graphique de Weave Scope.

