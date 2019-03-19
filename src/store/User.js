export default {
  state: {
    userList: [{ id: 1, name: 'Nikhil' }],
  },
  getters: {
    userList(state) {
      // console.log("state",state);
      return state.userList;
    },
  },
  mutations: {
    onAddUser(state, payload) {
      // console.log("state, payload", state, payload)
    },
  },
  actions: {
    addUser(context, data) {      
      // console.log("context, data", context, data);
      context.commit('onAddUser', data);
    },
  },
};
