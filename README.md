# Frontend - API REST avec JavaScript

Projet de formation pour apprendre à consommer une API REST en JavaScript.

## Installation

```bash
git clone https://github.com/AlainTardif/frontend.git
cd frontend
npm install
```

## Lancer le projet

### 1. Démarrer l'API (json-server)

```bash
npm run api:start
```

L'API sera disponible sur `http://localhost:3000`

### 2. Exécuter le script principal

```bash
node ./src/main.js
```

## Structure du projet

```
frontend/
├── datas/
│   └── db.json              # Base de données JSON
├── src/
│   ├── core/
│   │   ├── http/
│   │   │   └── http-client.js   # Classe HttpClient (GET, POST, PUT, DELETE)
│   │   └── services/
│   │       └── product-service.js   # Service CRUD pour les produits
│   └── main.js              # Point d'entrée
├── tests/
│   └── greetings.test.js    # Tests Jest
├── jest.config.js           # Configuration Jest
├── package.json
└── README.md
```

## Fonctionnalités

### HttpClient

| Méthode | Description |
|---------|-------------|
| `get(endpoint)` | Requête GET |
| `post(endpoint, payload)` | Requête POST |
| `put(endpoint, payload)` | Requête PUT |
| `delete(endpoint)` | Requête DELETE |

### ProductService

| Méthode | Description |
|---------|-------------|
| `getAll()` | Récupérer tous les produits |
| `getOne(id)` | Récupérer un produit par ID |
| `add(product)` | Ajouter un produit |
| `update(id, product)` | Modifier un produit |
| `delete(id)` | Supprimer un produit |

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run api:start` | Démarre json-server sur le port 3000 |
| `npm run test` | Lance les tests Jest |
| `npm run test:watch` | Lance les tests en mode watch |

## Technologies utilisées

- Node.js v22+
- JavaScript ES Modules
- json-server (fake API REST)
- Jest (tests unitaires)

## Auteur

Alain Tardif - Formation ABAP/JavaScript