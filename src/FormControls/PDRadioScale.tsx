import React, { type JSX } from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';

export interface IPDRadioScale {
    /**
     * The field name.
    */
    name: string,
    /**
     * The field caption.
    */
    caption: string,
    /**
     * The label on the right end of the radio scale.
    */
    rightEndLabel?: string,
    /**
     * The label on the left end of the radio scale.
    */
    lefttEndLabel?: string,
    /**
     * The field value.
    */
    value: string,
    /**
     * The form data.
    */
    formData?: any,
    /**
     * State function to set formData.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>
}

const PDRadioScale = ({ 
    name, 
    caption,
    rightEndLabel="no, that is not true",
    lefttEndLabel="yes, that is true",
    value,
    formData,
    setFormData=() => {}
}:IPDRadioScale): JSX.Element => {
    const handleChange = (field: keyof typeof formData) => (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setFormData({ ...formData, [field]: event.target.value });
      };

    return (
        <>
        <Typography variant="h6">{caption}</Typography>
        <FormControl component="fieldset">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ minWidth: 120 }}>{lefttEndLabel}</Typography>
            <RadioGroup
                row
                value={value}
                onChange={handleChange(name)}
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
            {rightEndLabel}
            </Typography>
        </Box>
        </FormControl>
      </>
    );
};

export default PDRadioScale;