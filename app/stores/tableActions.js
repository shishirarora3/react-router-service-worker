import tableData from './tableData';
let cellValueChangeHandler = ({
            rowPosition,
            cellPosition,
            newValue
    })=>{
        let rowData = tableData.tableRows[rowPosition],
            changeObject;
        changeObject = ({[`${rowData.module.value} | ${rowData.action[cellPosition].value ? 
            rowData.action[cellPosition].value : rowData.action[cellPosition]}`]:
            newValue});
        return changeObject;
};

let tableActions = { cellValueChangeHandler };
export default tableActions;