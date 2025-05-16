# Circles

A web3 savings and community platform.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up PostgreSQL:
   - Install PostgreSQL on your machine
   - Create a database named 'circles'
   - Create a `.env.local` file with the following content:
     ```
     DATABASE_URL="postgresql://postgres:password@localhost:5432/circles?schema=public"
     ```
     (Update username/password as needed)

3. Initialize the database:
   ```bash
   npx prisma migrate dev
   pnpm run db:seed
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Management

- View your database with Prisma Studio:
  ```bash
  pnpm run prisma:studio
  ```

- Create new migrations after schema changes:
  ```bash
  pnpm run prisma:migrate
  ```

- Update client after schema changes:
  ```bash
  pnpm run prisma:generate
  ```
