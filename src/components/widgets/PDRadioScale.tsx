import React, { type JSX } from 'react';
import {
    Box,
    FormControl,
    Radio,
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
    setFormData?: React.Dispatch<React.SetStateAction<any>>,
    /**
     * An array of string labels for each radio option.
    */
    optionLabels?: string[],
}

const PDRadioScale = ({
    name,
    caption,
    rightEndLabel,
    lefttEndLabel,
    value,
    formData,
    setFormData = () => {},
    optionLabels
}: IPDRadioScale): JSX.Element => {
    const handleChange = (field: keyof typeof formData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{caption}</Typography>
            <FormControl component="fieldset" fullWidth>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                    <Typography variant="body2" sx={{ minWidth: 120 }}>{lefttEndLabel}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexGrow: 1 }}>
                        {(optionLabels || []).map((val) => (
                            <Box key={val} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                                <Typography variant="caption" sx={{ mb: 0.5 }}>
                                    {val}
                                </Typography>
                                <Radio
                                    value={val.toString()}
                                    checked={value === val.toString()}
                                    onChange={handleChange(name)}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Typography variant="body2" sx={{ minWidth: 140, textAlign: 'right' }}>
                        {rightEndLabel}
                    </Typography>
                </Box>
            </FormControl>
        </>
    );
};

export default PDRadioScale;