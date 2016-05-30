import CellValue from './cellValue';
 
 let shortcutConstants = {
     Dashboard:{
         'Create New Column': 'command+A',
         'Dashboard|Archive' :'command+B'
     },
     Audieince:{
         'Create New Column': 'command+A'
     }
 };
let parser = (shortcuts)=>{
  let tableData = {
      className:'kb-sc',
      tableHeaderRow:{
         'module':new CellValue({value:'Module'}),
         'action':new CellValue({value:'Action'}),
         'command':new CellValue({value:''})
      },
         
     tableRows: Object.keys(shortcutConstants).reduce((result,module, i) =>{
         let commandAction = shortcutConstants[ module ];
         
         commandAction && (
             result[`${i}`] = Object.keys(commandAction).reduce(
                 (result,key,i)=>{
                        result.action[`${i}`] = new CellValue({value:key});
                        result.command[`${i}`] = new CellValue({value:commandAction[ key ], editable:true});
                        return result;
                },
                {
                action:{},
                command:{},
                module: new CellValue({value:module})
                }
            )
        );
         
       return  result; 
     },{})
  };
     
  return  tableData; 
};
let tableData = parser(shortcutConstants);

export default tableData;