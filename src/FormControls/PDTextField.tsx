import React, { type JSX } from 'react';
import {
    Box,
    TextField,
    Typography
} from '@mui/material';

interface IPDTextField {
    /**
     * The field label.
    */
    label: string,
    /**
     * The field caption.
    */
    caption: string,
    /**
     * The field value.
    */
    value: string,
    /**
     * The form data.
    */
    formData: any,
    /**
     * State function to set formData.
    */
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const PDTextField = ({ label, caption, value, formData, setFormData }:IPDTextField): JSX.Element => {
    const handleChange = (field: keyof typeof formData) => (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setFormData({ ...formData, [field]: event.target.value });
      };

    return (
        <Box
            component="form"
            onSubmit={() => {}}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 600 }}
        >
            <Typography variant="h6">{caption}</Typography>
            <TextField
                label={label}
                variant="outlined"
                value={value}
                onChange={handleChange(label)}
                fullWidth
            />
        </Box>
    );
};

export default PDTextField;