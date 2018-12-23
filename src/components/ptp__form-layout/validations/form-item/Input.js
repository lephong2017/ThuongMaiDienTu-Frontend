export const validation = {
  require: [
    {
      required: true,
      message: 'Trường dữ liệu này là bắt buộc!!!'
    }
  ],
  url: [
    {
      type: 'url',
      message: 'Bạn nhập chưa đúng định dạng url!!!'
    },
    {
      required: true,
      message: 'Trường dữ liệu này là bắt buộc!!!'
    }
  ]
};
