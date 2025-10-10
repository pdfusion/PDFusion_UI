import React, { type JSX } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material';

export interface ICheckboxOptions {
    name: string,
    label: string
}

export interface IPDCheckboxGroup {
    name?: string,
    caption: string,
    options: ICheckboxOptions[],
    value?: string,
    formData?: { selectedOptions: string[] },
    setFormData?: React.Dispatch<React.SetStateAction<any>>,
    handleChange?: (option: string) => void
}

const PDCheckboxGroup = ({
    caption,
    options,
    formData,
    setFormData
}: IPDCheckboxGroup): JSX.Element => {
    const selectedOptions = formData?.selectedOptions || [];

    const onCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];

        if (setFormData) setFormData({ ...formData, selectedOptions: updatedOptions });
    };

    return (
      <>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {caption}
        </Typography>
        <FormControl component="fieldset">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {options.map((option) => (
                <FormControlLabel
                    key={option.name}
                    control={
                    <Checkbox
                        checked={selectedOptions.includes(option.name)}
                        onChange={() => onCheckboxChange(option.name)}
                    />
                    }
                    label={option.label}
                />
            ))}
        </Box>
        </FormControl>
      </>
    );
};

export default PDCheckboxGroup;
