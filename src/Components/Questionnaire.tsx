import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  Checkbox
} from '@mui/material';
import PDTextField from '../FormControls/PDTextField';
import PDForm from '../FormControls/PDForm';
import PDButton from '../FormControls/PDButton';
import PDRadioScale from '../FormControls/PDRadioScale';

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feelsFit: '',
    selectedOptions: [] as string[]
  });

  const handleCheckboxChange = (option: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSelectedOptions = event.target.checked
      ? [...formData.selectedOptions, option]
      : formData.selectedOptions.filter((item) => item !== option);

    setFormData({ ...formData, selectedOptions: newSelectedOptions });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('sr log handleSubmit() >> formData:', formData);
  };

  return (
    <PDForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    >
      <PDTextField
        label={"name"}
        caption={"Name"}
        value={formData.name}
      />

      <PDTextField
        label={"age"}
        caption={"Age"}
        value={formData.age}
      />

      <PDRadioScale
        name={"feelsFit"}
        caption={"I feel fit"}
        value={formData.feelsFit}
      />

      <Typography variant="h6">Select from the following options</Typography>
      <FormControl component="fieldset">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {['A', 'B', 'C', 'D', 'E', 'F'].map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={formData.selectedOptions.includes(option)}
                  onChange={handleCheckboxChange(option)}
                />
              }
              label={option}
            />
          ))}
        </Box>
      </FormControl>
      
      <PDButton
        buttonType={"save"}
      />
      <PDButton
        buttonType={"restore"}
      />
    </PDForm>
  );
};

export default Questionnaire;