
const options = [
    {
      key: "/",
      label: "Home",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "/",
      label: "About",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "/",
      label: "Viet Nam",
      leftIcon: "ion-ios-people",
      children: [
        {
          key: "english",
          label: "English" 
        },
        {
          key: "vietnam",
          label: "Viet Name" 
        },
      ]
    },
  ];
  export default options;