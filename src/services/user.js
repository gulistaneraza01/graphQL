import prisma from "../config/connectDB.js";
import jwt from "jsonwebtoken";

class UserService {
  static async createUser(payload) {
    const userData = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (userData) {
      return "already have an Account";
    }

    const data = await prisma.user.create({ data: payload });

    const token = jwt.sign(data, "123");
    return token;
  }

  static async logUser(payload) {
    const { email, password } = payload;

    const data = await prisma.user.findUnique({ where: { email } });

    if (!data) {
      return "user not found";
    }

    if (data.password !== password) {
      return "wrong password";
    }

    const token = jwt.sign(data, "123");
    console.log(token);

    return token;
  }
}

export default UserService;
