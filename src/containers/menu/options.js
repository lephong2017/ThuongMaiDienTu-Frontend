
const options = [
    {
      key: "",
      label: "Trang chủ",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "about",
      label: "Giới thiệu",
      leftIcon: "ion-pie-graph"
    },
    {
      key: "vietnam",
      label: "Việt Nam",
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