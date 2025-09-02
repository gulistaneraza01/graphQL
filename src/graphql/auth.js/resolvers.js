import prisma from "../../config/connectDB.js";

const queries = {};

const mutations = {
  createUser: async (_, { name, email, password }) => {
    const data = await prisma.user.create({ data: { name, email, password } });
    return JSON.stringify(data);
  },
};

const resolvers = { queries, mutations };

export default resolvers;
