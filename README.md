This is a [Express.js] and [Prisma] based codebase.

## Prerequisties

Ensure you have the following installed:

- Node.js(v18+): [Download here](https://nodejs.org/)
- MySQL: [Install MySQL](https://dev.mysql.com/downloads/installer/)
- Prisma CLI
- Database Client (e.g. MySQL Workbench or DBeaver)

## Git-Clone and Installation

```bash
git clone https://github.com/jinbest/nooro-todoapp-server.git
cd nooro-todoapp-server
npm install
```

## Setup MySQL Database

1. Install MySQL on your machine.
2. Create a database:
```sql
CREATE DATABASE todoapp;
```
3. Create a MySQL user with permissions:
```sql
CREATE USER 'todo_user'@'localhost' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON todoapp.* TO 'todo_user'@'localhost';
FLUSH PRIVILEGES;
```

## Configure Environment Variables
Create a `.env` file at the root of your project and copy from `.env.example`


## Getting Started

First, run the development server:

```bash
npm start
```
