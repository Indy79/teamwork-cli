# Teamwork-cli by serli
This cli allow us to batch time entries for a week and more...

# Installation

## NodeJS

Ce paquet à été tester pour node 10

```bash
npm install
```

## Teamwork

Recuperer le token dans votre interface ainsi que votre people ID

# Utilisation

```bash
node index.js --company <company> --token <token> --project <project> --id <id> --action filltime_for_week --todo-item <todoitem> --date <date>
```