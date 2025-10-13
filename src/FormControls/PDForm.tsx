import React, { type JSX } from 'react';
import {
    Box,
} from '@mui/material';
import type { IPDTextField } from './PDTextField';

interface IPDForm {
    /**
     * The children of the form
    */
    children: React.ReactElement<IPDTextField> | React.ReactElement<IPDTextField>[],
    /**
     * The form data.
    */
    formData: any,
    /**
     * State function to set formData.
    */
    setFormData: React.Dispatch<React.SetStateAction<any>>,
    /**
     * Function to handle form submit.
    */
    onSubmit: (event: React.FormEvent) => void
}

const PDForm = ({ formData, setFormData, onSubmit,  children }:IPDForm): JSX.Element => {
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 600 }}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { formData, setFormData });
                }
                return child;
            })}
        </Box>
    );
};

export default PDForm;