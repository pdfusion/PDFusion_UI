import React, { type JSX } from 'react';
import { Box } from '@mui/material';

interface IPDForm {
    /**
     * The children of the form
    */
    children: React.ReactNode,
    /**
     * The form data.
    */
    formData?: any,
    /**
     * State function to set formData.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>,
    /**
     * Function to handle form submit.
    */
    onSubmit?: (event: React.FormEvent) => void
}

/**
 * Recursively inject props into all valid React elements
 */
const injectProps = (element: React.ReactNode, extraProps: any): React.ReactNode => {
    if (!React.isValidElement(element)) return element;

    const children = element.props.children
        ? React.Children.map(element.props.children, child => injectProps(child, extraProps))
        : null;

    return React.cloneElement(element, { ...extraProps }, children);
};

const PDForm = ({ formData, setFormData, onSubmit, children }: IPDForm): JSX.Element => {
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 600 }}
        >
            {React.Children.map(children, child => injectProps(child, { formData, setFormData }))}
        </Box>
    );
};

export default PDForm;