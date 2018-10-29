
const options = [
    {
      key: "",
      label: "Home",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "company",
      label: "About",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "demoapi",
      label: "Login",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "i18n",
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