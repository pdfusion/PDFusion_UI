import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@mui/material';

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    favoriteColor: '',
    feelsFit: '',
  });

  const handleChange = (field: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 600 }}
    >
      <Typography variant="h6">1. Enter name</Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange('name')}
        fullWidth
      />

      <Typography variant="h6">2. Enter age</Typography>
      <TextField
        label="Age"
        variant="outlined"
        value={formData.age}
        onChange={handleChange('age')}
        fullWidth
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

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default Questionnaire;