import React, { useRef, type ChangeEvent, type JSX } from 'react';
import {
    Box,
    Button,
    Typography
} from '@mui/material';
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from '../../data/constants';

export interface IPDButton {
    /**
     * The type of button.
    */
    buttonType: "save" | "restore" | "backup" | "select" | "clear" | "create",
    /**
     * The form data.
    */
    formData?: any,
    /**
     * The field caption.
     */
    caption?: string,
    /**
     * State function to set formData.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>
    /**
     * Function to handle button click
     */
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
    /**
     * Function to handle button click
     */
    handleClick?: () => void
}

const PDButton = ({ buttonType, handleChange, handleClick, caption }:IPDButton): JSX.Element => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleBackup = () => {
        const casesData = localStorage.getItem(LOCAL_STORAGE_CASES_KEY);
        const usersData = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);

        const combinedData = {
            casesData: casesData ? JSON.parse(casesData) : [],
            usersData: usersData ? JSON.parse(usersData) : [],
        };

        const blob = new Blob([JSON.stringify(combinedData, null, 2)], {
            type: 'application/json',
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'pdfusionData.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleRestoreClick = () => {
        fileInputRef.current?.click();
    };

    function getButton(buttonType: string) {
        if(buttonType === "backup"){
            return (
                <Button type="submit" variant="contained" color="primary" onClick={handleBackup}>
                    Backup
                </Button>
            );
        }
        else if(buttonType === "restore") {
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
                    onChange={handleChange}
                />
            </>
            );
        }
        else if(buttonType === "save") {
            return (
                <Button type="submit" variant="contained" color="primary" onClick={()=>{}}>
                    Save
                </Button>
            );
        }
        else if(buttonType === "select") {
            return (
                <Button variant="contained" color="secondary" onClick={handleClick}>
                    {caption || "Select"}
                </Button>
            );
        }
        else if(buttonType === "clear") {
            return (
                <Button variant="contained" color="secondary" onClick={handleClick}>
                    {caption || "Clear"}
                </Button>
            );
        }
        else if(buttonType === "create") {
            return (
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <button
                    onClick={handleClick}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                    >
                        {caption}
                    </button>
                </div>
            )
        }
        return <></>;
    }

    return (
    <>
        {caption && buttonType !== "create" && <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{caption}</Typography>}
        <Box sx={{ display: 'flex', gap: 2 }}>
            {getButton(buttonType)}
        </Box>
    </>
    );
};

export default PDButton;