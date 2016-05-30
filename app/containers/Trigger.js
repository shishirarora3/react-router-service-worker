/**
 * Created by shishirarora on 16/03/16.
 */
 import React, { Component }  from 'react';
 import Table from '../components/Table';
 import tableData from '../stores/tableData';
 import { cellValueChangeHandler } from '../stores/tableActions';




class Trigger extends Component {
    
    render() {
        
        return <div className="container">
                <Table {...tableData} cellValueChangeHandler={cellValueChangeHandler}/>
            </div>
    }
    
}

export default Trigger
