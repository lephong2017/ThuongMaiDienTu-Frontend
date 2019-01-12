import React from 'react';
import { Table, Button, Row, Col, Icon, Input} from 'antd';
import './table.style.scss';
import defaultValue from './default-value';
import { Resizable } from 'react-resizable';
import {CSVLink, } from "react-csv";
const Search = Input.Search;
const ResizeableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
  
    if (!width) {
      return <th {...restProps} />; 
    }
  
    return (
      <Resizable width={width} height={0} onResize={onResize}>
        <th {...restProps} />
      </Resizable>
    );
  };
const components = {
    header: {
      cell: ResizeableTitle,
    },
};
  
class TableContent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            columns:[]
        }
    }

    componentWillMount(){
        this.setState({columns: this.props.columns});
    }

    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
          const nextColumns = [...columns];
          nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
          };
          return { columns: nextColumns };
        });
    };

    getListFilterAttr = (info) =>{
        let {  filtered} = info;
        filtered = filtered || {};
        let listFilterAttr = [];
        let filteredKey = Object.keys(filtered);
        filteredKey.map((val, ind) => {
            if(filtered[val]!==null) {
                listFilterAttr.push({val})
            } 
        })
        return listFilterAttr;
    }

    getListSorterAttr = (info) =>{
        let {sorted} = info;
        sorted = sorted || {};
        let listSortedAttr = [];
        let sortedKey = Object.keys(sorted);
        sortedKey.map((val, ind) => {
            if(sorted[val]!==null) {
                listSortedAttr.push({val})
            } 
        })
        return listSortedAttr;
    }

    renderFilterInfo = () => {
        const  {info, event} = this.props;
        let { filtered } = info;
        let listFilterAttr = this.getListFilterAttr(info);
        return listFilterAttr.map((vals, ind)=>{
           return <Row key={vals.val} className="btn-filter">
                {
                    (filtered[vals.val].length > 0)?
                        <strong>{vals.val}: </strong>:
                        <strong></strong>
                }
                {
                    filtered[vals.val].map((val, ind)=>{
                        return <Button onClick={()=>event.table.clearFiltered(vals, val)} key={ind} >{val} <Icon type="close" /></Button>
                    })
                } 
            </Row>
        })
    }

    renderSorterInfo = () => {
        const  {info, event} = this.props;
        let { sorted } = info;
        const nameButtonSort = `${sorted.field}: ${(sorted.order==='ascend')?"Tăng dần":"Giảm dần"}` ;
        return <Button key={sorted.field} onClick={event.table.clearSorted}>{nameButtonSort} <Icon type="close" /></Button>
    }


    render() {
        const {config, event, data, rowSelection, info,  } =this.props;
        let listFilterAttr = this.getListFilterAttr(info);
        const columns = this.props.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
        }));
        const configPagination=
        {
            showPageSizeOptions : 
                (config.pagination.showPageSizeOptions) ? config.pagination.showPageSizeOptions : defaultValue.pagination.showPageSizeOptions,
            className:
                (config.pagination.className) ? config.pagination.className : defaultValue.pagination.className,
            total: 
                (config.pagination.total) ? config.pagination.total : defaultValue.pagination.total,
            size: 
                (config.pagination.size) ? config.pagination.size : defaultValue.pagination.size,
            defaultPageSize:
                (config.pagination.defaultPageSize) ? config.pagination.defaultPageSize : defaultValue.pagination.defaultPageSize,
            pageSizeOptions:
                (config.pagination.pageSizeOptions) ? config.pagination.pageSizeOptions : defaultValue.pagination.pageSizeOptions,
            showQuickJumper:
                (config.pagination.showQuickJumper) ? config.pagination.showQuickJumper : defaultValue.pagination.showQuickJumper,
            showSizeChanger:
                (config.pagination.showSizeChanger) ? config.pagination.showSizeChanger : defaultValue.pagination.showSizeChanger,
            showTotal:
                (config.pagination.showTotal) ? config.pagination.showTotal : defaultValue.pagination.showTotal,
            onChange:event.pagination.onChange,
            onShowSizeChange:event.pagination.onShowSizeChange
            
        };
        return (
        <div>
            <Row className="filter-info-bar">
                <Col md={12}>
                    {
                        (listFilterAttr.length > 0)?
                        <strong>Filter:</strong>:
                        <strong></strong>
                    }
                    <div className="table-operations">
                        {
                            (listFilterAttr)?
                            this.renderFilterInfo():
                            <div key="none"></div>
                        }
                    </div>
                </Col>
                <Col md={12}>
                    {
                        (info.sorted.field) ? <strong>Sorter:</strong> : <strong></strong>
                    }
                    <div className="table-operations">
                        {
                            (info.sorted.field)?
                            this.renderSorterInfo():
                            <div key="none"></div>
                        }
                    </div>
                </Col>
            </Row>
            <Row style={{display:'flex',}}>
                <Col md={12} style={{marginTop:'10px'}}>
                    <Button  style={{float:'left'}}>
                        <CSVLink data={data} target="_blank">Link CSV </CSVLink>
                    </Button>
                    {/* <Button>
                        <CSVDownload data={data} target="_blank">Download CSV</CSVDownload>
                    </Button> */}
                </Col>
                <Col md={12} style={{float:'right'}} className="search-field">
                    <Search
                        placeholder="input search text"
                        onSearch={value => event.table.onSearch(value)}
                        style={{ width: 200 }}
                    />
                </Col>
            </Row>
            <Table 
                className="component-table"
                columns={columns} 
                dataSource={data} 
                onChange={event.table.onChange} 
                // onChange={this.onChange} 

                size={(config.table.size) ? config.table.size : defaultValue.table.size}
                bordered={(config.table.bordered) ? config.table.bordered : defaultValue.table.bordered}
                rowKey={(config.table.rowKey) ? config.table.rowKey : defaultValue.table.rowKey}

                pagination = { configPagination }
                rowSelection={rowSelection}
                scroll={(config.table.scroll) ? config.table.scroll : defaultValue.table.scroll}
                // onSelectChange= {event.table.onSelectChange}
                onRow= {(record) => {
                        return {
                            onClick: ()=>event.table.onRow(record),       // click row
                        }
                    }
                }

                components={components}
                
            />
           
        </div>
        );
    }
    
}


export default TableContent;

