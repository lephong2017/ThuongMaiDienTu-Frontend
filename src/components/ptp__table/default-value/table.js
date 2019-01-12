import {updateIndex} from 'utils/key-component/settings_key_antd';
const table=
{
    size: "small",
    bordered: false,
    rowKey: `uid${updateIndex()}`,
    indentSize: 10,
    scroll: {
        // x:'50%',
        // y: 260
    }
}
export default table;