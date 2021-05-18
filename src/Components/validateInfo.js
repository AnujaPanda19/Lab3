export default function validateInfo(values) {
    let errors = {};
  
    if (!values.productid) {
      errors.productid = 'Enter Product Id';
    }
   
  
    if (!values.productname) {
      errors.productname = 'Enter Product Name';
    } 
    
    if (!values.productcost) {
      errors.productcost = 'Enter Product cost ';
    } else if (values.productcost < 5) {
      errors.productcost = 'product cost must be more than 5 rupees';
    }
  
    return errors;
}