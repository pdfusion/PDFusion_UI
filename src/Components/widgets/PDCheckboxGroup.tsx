import React, { type JSX } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material';
import type { IQuestionnaireFormData } from '../../pages/IQuestionnaire';

export interface ICheckboxOptions {
    /**
     * The field name.
    */
    name: string,
    /**
     * The field label.
    */
    label: string
}

export interface IPDCheckboxGroup {
    /**
     * The field name.
    */
    name?: string,
    /**
     * The field caption.
    */
    caption: string,
    /**
     * The selectable checkbox options.
    */
    options: ICheckboxOptions[],
    /**
     * The form data.
    */
    formData?: IQuestionnaireFormData,
    /**
     * State function to set formData.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>,
    /**
     * Optional function to handle change.
    */
    handleChange?: (option: string) => void
}

const PDCheckboxGroup = ({
    name,
    caption,
    options,
    formData,
    setFormData
}: IPDCheckboxGroup): JSX.Element => {
    const selectedOptions = (formData as Record<string, string[]>)[name as string] || [];

    const onCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item: string) => item !== option)
        : [...selectedOptions, option];

        if (setFormData) setFormData({ ...formData, [name as string]: updatedOptions });
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
