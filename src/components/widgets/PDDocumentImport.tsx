import { useState, type ChangeEvent, type JSX } from 'react';
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from '../../data/constants';
import { isValidImportData, type IPDImportFile } from '../../utils/validateImportData';
import PDButton from './PDButton';
import type { CaseDataType } from '../../contexts/CasesDataContext';

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
              const existingData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CASES_KEY) as string) || [];
              const newCases = data[LOCAL_STORAGE_CASES_KEY];

              // Create a map for quick lookup of existing cases by ID
              const existingCasesMap = new Map(existingData.map((caseItem: CaseDataType) => [caseItem.id, caseItem]));

              // Add new cases or update if it exists
              (newCases || []).forEach(newCase => {
                existingCasesMap.set(newCase.id, newCase);
              });

              // Convert map back to array
              const updatedData = Array.from(existingCasesMap.values());

              // Save back to local storage
              localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(updatedData));
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