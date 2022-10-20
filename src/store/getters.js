const getters = {
  getCouter(state) {
    return state.couter;
  },
  getLanguge(state) {
    return state.language;
  },
  getUsers(state) {
    return state.users;
  },
  getUserRegister(state) {
    return state.usersRegister;
  },
  getUserRegisterEror(state) {
    if (state.usersRegisterError) {
      return state.usersRegisterError.message;
    }
  },
  getUserLogin(state) {
    return state.usersLogin;
  },
};

export default getters;
