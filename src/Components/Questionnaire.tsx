import React, { useState, useRef } from 'react';
import {
  Button,
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

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feelsFit: '',
    selectedOptions: [] as string[]
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleDownload = () => {
    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'questionnaire-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRestoreClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const parsedData = JSON.parse(result);
        setFormData({
          name: parsedData.name || '',
          age: parsedData.age || '',
          feelsFit: parsedData.feelsFit || '',
          selectedOptions: parsedData.selectedOptions || []
        });
      } catch (error) {
        console.error('Invalid JSON file:', error);
      }
    };
    reader.readAsText(file);
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

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button type="submit" variant="contained" color="primary" onClick={handleDownload}>
          Save
        </Button>
        <Button variant="outlined" color="info" onClick={handleRestoreClick}>
          Restore
        </Button>
        <input
          type="file"
          accept="application/json"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </Box>
    </PDForm>
  );
};

export default Questionnaire;