import UserService from "../../services/user.js";

const queries = {
  sayhello: () => "hello from graphql",
  loginUSer: (_, payload) => {
    const data = UserService.logUser(payload);
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
