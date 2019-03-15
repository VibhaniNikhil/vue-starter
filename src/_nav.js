export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-user',
      children: [
        {
          name: 'Expert',
          url: '/users/expert',
          // icon: 'icon-puzzle',
        },
        {
          name: 'Listener',
          url: '/users/listener',
          // icon: 'icon-puzzle',
        },
      ],
    },
  ],
};
