import { useState, type ChangeEvent, type JSX } from 'react';
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from '../../data/constants';
import { isValidImportData, type IPDImportFile } from '../../utils/validateImportData';
import PDButton from './PDButton';
import type { CaseDataType } from '../../contexts/CasesDataContext';
import type { UserDataType } from '../../contexts/UsersDataContext';

interface IPDDocumentImport {
  /**
   * The field caption.
  */
  caption: string,
  /**
   * The type of data update it is.
  */
  uploadType: 'merge' | 'set'
}

const PDDocumentImport = ({ caption, uploadType }: IPDDocumentImport): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  function mergeData(localStorageKey: string, data: IPDImportFile) {
    const existingData = JSON.parse(localStorage.getItem(localStorageKey) as string) || [];
    const newData = data[localStorageKey];

    // Create a map for quick lookup of existing data by ID
    let existingDataMap: any;
    if(localStorageKey === LOCAL_STORAGE_CASES_KEY)
      existingDataMap = new Map(existingData.map((caseItem: CaseDataType) => [caseItem.id, caseItem]));
    
    else if(localStorageKey === LOCAL_STORAGE_USERS_KEY)
      existingDataMap = new Map(existingData.map((userItem: UserDataType) => [userItem.id, userItem]));
    
    // Add new data items or update if it exists
    (newData || []).forEach((newData: any) => {
      existingDataMap.set(newData.id, newData);
    });

    // Convert map back to array
    const updatedData = Array.from((existingDataMap || []).values());

    // Save back to local storage
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setSuccess('');

    const file = event.target.files?.[0];
    if (!file || file.type !== 'application/json') {
      setError('Please upload a valid .json file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const data: IPDImportFile = JSON.parse(result);

        if (isValidImportData(data, uploadType)) {
        switch(uploadType) {
          case "set":
                localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(data[LOCAL_STORAGE_CASES_KEY]));
                localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(data[LOCAL_STORAGE_USERS_KEY]));
                setSuccess(`Data restored successfully!`);
              break;
          case "merge":
              if (data[LOCAL_STORAGE_CASES_KEY]) mergeData(LOCAL_STORAGE_CASES_KEY, data);
              if (data[LOCAL_STORAGE_USERS_KEY]) mergeData(LOCAL_STORAGE_USERS_KEY, data);
              setSuccess(`Data merged successfully!`);
              break;
          default:
              setError(`Invalid data structure in JSON file.`);
              break;
          }
        } else {
          setError(`Invalid data structure in JSON file.`);
        }
      } catch (err) {
        setError('Error parsing JSON file.');
      }
    };

    reader.readAsText(file);
  };

  return (
  <>
    <PDButton
      caption={caption}
      buttonType={"restore"}
      handleChange={handleFileUpload}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>{success}</p>}
  </>
  );
};

export default PDDocumentImport;