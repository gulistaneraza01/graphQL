import UserService from "../../services/user.js";

const queries = {
  sayhello: () => "hello from graphql",
  loginUSer: (_, payload) => {
    const data = UserService.logUser(payload);
    return data;
  },
  me: async (_, __, context) => {
    const id = context.id;
    const data = await UserService.me(id);
    return data;
  },
};

const mutations = {
  createUser: async (_, payload) => {
    const data = UserService.createUser(payload);
    return data;
  },
};

const resolvers = { queries, mutations };

export default resolvers;
