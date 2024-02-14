export const dummyData = [
  {
    id: "accordion",
    title: "Accordion1",
    description: "accordion description",
    children: [{
      id: "react",
      title: "react",
      description: "react description",
    }]
  },
  {
    id: "qrcode",
    title: "qrcode",
    description: "qrcode description",
    children: [{
      id: "react",
      title: "react",
      description: "react description",
    }, {
      id: "react-qrcode",
      title: "react-qrcode",
      description: "react-qrcode description",
    },]
  },
  {
    id: "Settings",
    title: "/settings",
    children: [
      {
        id: "Account",
        title: "account",
      },
      {
        id: "Security",
        title: "security",
        children: [
          {
            id: "Login",
            title: "login",
          },
          {
            id: "Register",
            title: "register",
            children: [
              {
                id: 'Random data',
                title: ''
              }
            ]
          },
        ],
      },
    ],
  },
];
export default dummyData;