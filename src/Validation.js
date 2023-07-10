
const Validation = (values) => {

  let errors={}
if(values.name!=='main@123' || values.pass!=='pass123'){
  if(!values.name){
    errors.name = "Name Required"
  }
  else if (values.name!=='main@123')
  {
    errors.name="Enter correct Name"
  }
  if(!values.pass){
    errors.pass = "Password Required"
  }
  else if (values.pass!=='pass123')
  {
    errors.pass="Enter correct Password"
  }
}
  else{
    errors.pass="Confirm"
  }
  return errors
  
}
export default Validation;