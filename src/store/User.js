export default {
  state: {
    userList: [{ id: 1, name: 'Nikhil' }],
  },
  getters: {
    userList(state) {
      return state.userList;
    },
  },
  mutations: {
    onAddUser(state, payload) {
      console.log('payload', payload);
    },
  },
  actions: {
    addUser(context, data) {
      console.log('data', data);
      context.commit('onAddUser', data);
    },
  },
};
