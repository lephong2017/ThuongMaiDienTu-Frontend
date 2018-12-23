const pagination=
{ 
    showPageSizeOptions : SVGComponentTransferFunctionElement,
    className:"pagination pagination-table",
    size: 'small',
    defaultPageSize:5,
    pageSizeOptions:['5', '10', '20', '30', '50', '100'],
    showQuickJumper:true,
    showSizeChanger:true,
    simple:false,
    showTotal:(total, range) => `${range[0]}-${range[1]} / ${total} tổng số`,
}
export default pagination;