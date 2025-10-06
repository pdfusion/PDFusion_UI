import React, { useRef, type JSX } from 'react';
import {
    Box,
    Button
} from '@mui/material';

export interface IPDButton {
    /**
     * The type of button.
    */
    buttonType: "save" | "restore",
    /**
     * The form data.
    */
    formData?: any,
    /**
     * State function to set formData.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>
}

const PDButton = ({ buttonType, formData, setFormData=() => {} }:IPDButton): JSX.Element => {
    const fileInputRef = useRef<HTMLInputElement>(null);

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
                ...parsedData
            });
        } catch (error) {
            console.error('Invalid JSON file:', error);
        }
        };
        reader.readAsText(file);
    };

    function getButton(buttonType: string) {
        if(buttonType === "save")
            return (
                <Button type="submit" variant="contained" color="primary" onClick={handleDownload}>
                    Save
                </Button>
            );
        else if(buttonType === "restore")
            return (
            <>
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
            </>
            );
        return <></>;
    }

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {getButton(buttonType)}
        </Box>
    );
};

export default PDButton;