export const validation={
    username:[
        {
            required:true,
            message:'Trường dữ liệu này mặc định là bắt buộc!!!'
        },
        {
            // required: true,
            pattern: new RegExp("^[0-9]*$"),
            message:'Bắt buộc chỉ là số'
        }
    ],
    password:[
        {
            // validator:checkPrice,
            // message:'Password cần phải có chữ hoa, chữ thường, số, ký tự đặc biệt và nhỏ hơn 12 ký tự'
        }
    ],
}