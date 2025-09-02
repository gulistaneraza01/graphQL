import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

connectDB();

export default prisma;
