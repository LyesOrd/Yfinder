
![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/68px-Angular_full_color_logo.svg.png)

# YFinder

Application web qui a pour but de recenser plusieurs annonces de différents site de recherche d'emploi (gouv, pôle emploi, indeed, ..) pour permettre au étudiant d'avoir un endroit concentrer pour eux avec des offres uniquement basé sur l'alternance


## Mise en place du projet

Voici les étapes à suivre pour mettre en place le projet et pouvoir le tester localement

- Cloner le repo git sur votre machine
```bash
  git clone git@github.com:LyesOrd/Yfinder.git
```
Il est conseillé de le cloner en ssh mais vous pouvez aussi le cloner en https

- Vous devriez avoir deux repo à l'intérieur du repo cloner
```bash
  ./front et ./server
```

- Aller dans le repo front et recupérer les modules du package-lock
```bash
  cd ./front
  npm i
```

- Faite pareil pour le repo du server
```bash
  cd ./server
  npm i
```

- Enfin rendez-vous dans les repo front et server et lancés les
```bash
  cd ./front
  npm run start

  cd ./server
  npm run dev
```
Vous devriez à présent avoir 2 terminaux d'ouvert : 
- le serveur front qui tourne sur localhost:4200 
- le serveur du backend sur localhost:8080

Si vous arrivez pas à lancer les serveurs vérifiés qu'il n'y a pas eu d'erreur avec les npm i.

Il se peut aussi que vous ayez à installer nodemon côté serveur pour cela : 
```bash
  cd ./server
  npm i nodemon --save
```






## Auteur

[Lyes Ourred](https://github.com/LyesOrd)

Clément Bilger
Romain
Rony Klock
Emilien They
Thien-tin Tran


# YFinder

Plateforme de mise a disposition d'offre d'alternance de plusieurs site de recherche d'alternance.


## Collaborateurs

- Lyes Ourred
- Clément Bilger
- Romain GRENIER
- Emilien Thery
- Rony Klock
- Thien-tin Tran 
