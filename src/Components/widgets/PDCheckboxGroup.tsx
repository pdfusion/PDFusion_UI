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
    formData?: { gameDevices: string[] },
    setFormData?: React.Dispatch<React.SetStateAction<any>>,
    handleChange?: (option: string) => void
}

const PDCheckboxGroup = ({
    caption,
    options,
    formData,
    setFormData
}: IPDCheckboxGroup): JSX.Element => {
    const gameDevices = formData?.gameDevices || [];

    const onCheckboxChange = (option: string) => {
    const updatedOptions = gameDevices.includes(option)
        ? gameDevices.filter((item) => item !== option)
        : [...gameDevices, option];

        if (setFormData) setFormData({ ...formData, gameDevices: updatedOptions });
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
                        checked={gameDevices.includes(option.name)}
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
