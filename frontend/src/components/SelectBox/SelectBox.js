import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SelectBox from '../SelectBox/SelectBox.css';

export default function SelectSmall(props) {


  let [boxName, setBoxName] = React.useState('');

  let handleChange = (event) => {
    setBoxName(event.target.value);
  };

  let label = props.label;
  let array = props.array;


  return (
    <FormControl sx={{m:1, width: 150}} size="small" >
      <InputLabel >{label}</InputLabel>
      <div className="selectWrapper" >
      <Select
        className="selectBox"
        labelId="demo-select-small"
        value={boxName}
        label="User Type"
        onChange={handleChange}
      >
        <MenuItem value="" width ={10} height={20}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>{array[0]}</MenuItem>
        <MenuItem value={20}>{array[1]}</MenuItem>
        <MenuItem value={30}>{array[2]}</MenuItem>
        <MenuItem value={10}>{array[3]}</MenuItem>
        <MenuItem value={20}>{array[4]}</MenuItem>
        <MenuItem value={30}>{array[5]}</MenuItem>
      </Select>
      </div>
    </FormControl>
  );
}