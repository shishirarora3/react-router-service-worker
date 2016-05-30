import React, { PropTypes, Component }  from 'react';
import Table from './Table';
import CellValue from '../stores/cellValue';
class Cell extends Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
            inputValue:props.value.value
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleChange(event){
        let newValue = event.target.value;
        this.setState({
                         inputValue: newValue
                        });
                        
    }
    handleBlur(event){
        let newValue = event.target.value;
        this.setState({
                         inputValue: event.target.value,
                         editMode:false
        });
        let {rowPosition,cellValueChangeHandler,key, className} = this.props;
        cellValueChangeHandler({
            rowPosition,
            cellPosition: className,
            newValue
        });
    }
    handleKeyDown(event){
        if(event.which === 13){
            this.handleBlur(event);
        }
    }
    render(){
        let {value,className,key, cellValueChangeHandler,rowPosition} = this.props;
        
    if(value instanceof CellValue){
        
       if( value.editable){
         if (this.state.editMode){
             
            return <div className={`cell  cell--${className}`}>
                     <input type="text" 
                     value={this.state.inputValue} 
                     key={key} 
                     onChange={this.handleChange}
                     onBlur={this.handleBlur}
                     onKeyDown= {this.handleKeyDown}/>
                  </div>
          }else{
            return <div className={`cell  cell--${className}`}>
            <span>{this.state.inputValue}</span>
            <i className="icon-edit" onClick={()=>{
                this.setState({
                     editMode: true
                     });}}>ic</i>
            </div>
         }
       }else{
           return <div className={`cell  cell--${className}`}>{value.value}</div>
       }
    }else{
       return <div className={`cell cell--table-wrapper cell--${className}`}>
                <Table  cellValueChangeHandler={cellValueChangeHandler}
                rowPosition={rowPosition}
                className={className}
                tableRows={value}></Table>
              </div>
    }
        
  }
}
    

export default Cell
