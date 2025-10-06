import React, { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox
} from '@mui/material';
import PDTextField from '../FormControls/PDTextField';
import PDForm from '../FormControls/PDForm';
import PDButton from '../FormControls/PDButton';

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feelsFit: '',
    selectedOptions: [] as string[]
  });

  const handleChange = (field: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

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

      <Typography variant="h6">3. I feel fit</Typography>
      <FormControl component="fieldset">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ minWidth: 120 }}>Yes, this is true</Typography>
          <RadioGroup
            row
            value={formData.feelsFit}
            onChange={handleChange('feelsFit')}
            sx={{ flexGrow: 1, justifyContent: 'center' }}
          >
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
          <Typography variant="body2" sx={{ minWidth: 140, textAlign: 'right' }}>
            No, this is not true
          </Typography>
        </Box>
      </FormControl>

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