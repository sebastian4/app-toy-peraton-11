import React from 'react';
import './Item.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { Table } from 'antd';
import 'antd/dist/antd.dark.css';

class Item extends React.Component {

    constructor(props) {
        super(props);
        // console.log("item constructor");
    }

    render() {

        const dataSource = [
            {
              key: '1',
              name: 'Mike',
              age: 32,
              address: '10 Downing Street',
            },
            {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
            {
                key: '3',
                name: 'Mary',
                age: 40,
                address: '121 Massachusetts Street',
            }
        ];
          
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ];
        
        return (
            <div className="itemblock">
                
                <div> Table </div>
                <h6>dark mode</h6>
                <Table dataSource={dataSource} columns={columns} />

                <DatePicker />
            </div>
        );
    }
}

export default Item;
