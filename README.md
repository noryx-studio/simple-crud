# Simple REST Stack

Simple CRUD RESTful API built with **Node.js, Express, MongoDB, Swagger, and TypeScript**.

## Getting Started

### 1. Install dependencies

```bash
npm install

```

### 2. Set up environment variables
Copy the .env.example file, rename it to .env, and edit the .env file with your environment-specific values.

### 3. Run the server

Development mode:

```bash
npm run dev
```

Server will start on http://localhost:8800 by default.

Production mode:

```bash

npm run build
npm start
```

## Folder Structure

```
simple-crud/
├─ src/
│  ├─ controllers/
│  ├─ docs/
│  ├─ models/
│  ├─ routes/
│  ├─ middleware/
│  └─ index.ts
├─ tsconfig.json
├─ package.json
└─ .env
```

* models/ → Mongoose schemas for Persons.
* controllers/ → Functions for handling requests.
* routes/ → REST endpoints.
* docs/ → Swagger API documentation.

## Endpoints

### **Person Routes**

---

| Method | Route          | Description                  |
|--------|----------------|------------------------------|
| POST   | `/persons`     | Create a new person          |
| GET    | `/persons`     | List your persons            |
| GET    | `/persons/:id` | Get person by ID             |
| PATCH  | `/persons/:id` | Update person by ID          |
| DELETE | `/persons/:id` | Delete person by ID          |

---

## Screenshots

<img width="1440" height="816" alt="image" src="https://github.com/user-attachments/assets/804362ec-612d-4ac9-967b-29c82d1b4c42" />

<img width="1440" height="818" alt="image" src="https://github.com/user-attachments/assets/1496110e-9d5a-46de-b42a-2c701bf32b1d" />
