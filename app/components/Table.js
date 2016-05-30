import React, { PropTypes, Component }  from 'react';
import Row from './Row';
/*
@param: {
    className,
    tableHeaderRow:{
        key1:value1,
        key2:value2...
    },
    tableRows:{row1:{
        key1:value1,
        key2:value2,....
        },row2:{
        key1:value1,
        key2:value2,....
    }...}}
*/
const Table = ({className,tableRows,tableHeaderRow,cellValueChangeHandler, rowPosition})=>
    <div className={`table table--${className}`}>
        {tableHeaderRow && <div className={`table__header table__header--${className}`}>
          <Row className={`row--header row--header__${className}`} 
                key='row--header' 
                value={tableHeaderRow} 
                cellValueChangeHandler={cellValueChangeHandler}/>
        </div>}
        {Object.keys(tableRows).map((key,i)=><Row className={`${key}`} 
        cellValueChangeHandler={cellValueChangeHandler}
        rowPosition={typeof rowPosition === 'undefined' ? i:  rowPosition}
        key={i}
        value={tableRows[key]}/>
        )}
    </div>

export default Table
