import React, { PropTypes, Component }  from 'react';
import Cell from './Cell';
import CellValue from '../stores/cellValue';
/*
@param: row{
    key1:value1,
    key2:value2,....
}
key* is className
value* is the value of cell
*/

const Row = ({className,value, rowPosition, cellValueChangeHandler})=>{
    let result;
    
    if((value instanceof CellValue)){
        result = <Cell rowPosition={ rowPosition } 
        cellValueChangeHandler={ cellValueChangeHandler }
        className={className} 
        value={value}/>
    }else{
         result = Object.keys(value).map((key,i)=><Cell 
             key={key} 
             cellValueChangeHandler = { cellValueChangeHandler }
             rowPosition={ rowPosition }
             className={ key } 
             value={ value[key] } />);
    }
    return <div className={`row row--${className}`}>
    {result}
    </div>
}
export default Row
