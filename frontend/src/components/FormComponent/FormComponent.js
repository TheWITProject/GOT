import "./FormComponent.css";
import { FormControl, InputLabel, FormHelperText,Input } from '@mui/material';

const styleInput ={
    bgcolor: "#E0E2E5",
    borderRadius: "30px",
    height:"50px",
    width:"100%",
    justifyContent:"center",
    paddingLeft:"20px",
    
  };
const styleInputLabel={
    marginBottom:"0px",
}
function FormComponent(props) {
  return (
    <div id="outer">
      <h3>{props.title}</h3>
      <FormControl>
        <InputLabel sx= {styleInputLabel} htmlFor="my-input"><p>{props.placeholder}</p></InputLabel>
        <Input disableUnderline= "true" sx= {styleInput} />
      </FormControl>
    </div>
  );
}

export default FormComponent;
