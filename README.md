# Documentation pour exécuter le projet localement

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les logiciels suivants sur votre machine locale :

- **Node.js** : La version recommandée est la dernière version LTS. Vous pouvez la télécharger depuis [nodejs.org](https://nodejs.org/).
- **Yarn** : Un gestionnaire de paquets que vous pouvez installer en suivant les instructions sur [le site de Yarn](https://classic.yarnpkg.com/en/docs/install/).

## Cloner le Référentiel

Commencez par cloner le référentiel du projet sur votre machine locale. Ouvrez votre terminal et exécutez :

```sh
git clone https://github.com/angelix009/my-vue-app.git
```
## Installer les Dépendances

Naviguez jusqu'au répertoire du projet :

```sh
cd my-vue-app

```
```sh
yarn install

```

Cela téléchargera toutes les dépendances requises définies dans votre fichier package.json.

## Lancer le Serveur de Développement
Pour démarrer le serveur de développement et voir le projet localement, exécutez :
```sh
yarn serve

```

Cela démarrera un serveur de développement local et ouvrira le projet dans votre navigateur web par défaut. L'URL par défaut est généralement http://localhost:8080.

## Exécuter les Tests

Pour exécuter les tests unitaires du projet, utilisez :

```sh
yarn test

```

Cette commande exécute tous les tests définis dans le répertoire tests. Assurez-vous que vos tests fonctionnent comme prévu avant de déployer des modifications.



