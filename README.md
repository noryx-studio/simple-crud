# Simple REST Stack

Simple CRUD RESTful API built with **Node.js, Express, MongoDB, Swagger, and TypeScript**.

## Getting Started

### 1. Install dependencies

```bash
npm install

```

### 2. Run the server

Development mode

```bash
npm run dev
```

Server will start on http://localhost:8800 by default.

Production mode

```bash

npm run build
npm start
```

```
Folder Structure
simple-crud/
├─ src/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ middleware/
│  └─ index.ts
├─ tsconfig.json
├─ package.json
└─ .env
```

* models/ → Mongoose schemas for Persons
* controllers/ → Functions for handling requests.
* routes/ → REST endpoints.
