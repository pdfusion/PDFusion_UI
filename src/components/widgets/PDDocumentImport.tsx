import { useState, type ChangeEvent, type JSX } from 'react';
import { LOCAL_STORAGE_CASES_KEY, LOCAL_STORAGE_USERS_KEY } from '../../data/constants';
import { isValidImportData, type IPDImportFile } from '../../utils/validateImportData';
import PDButton from './PDButton';

interface IPDDocumentImport {
  /**
   * The field caption.
  */
  caption: string
}

const PDDocumentImport = ({ caption }: IPDDocumentImport): JSX.Element => {
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

        if (isValidImportData(data)) {
          localStorage.setItem(LOCAL_STORAGE_CASES_KEY, JSON.stringify(data[LOCAL_STORAGE_CASES_KEY]));
          localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(data[LOCAL_STORAGE_USERS_KEY]));
          setSuccess(`Data restored successfully!`);
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
      handleClick={handleFileUpload}
    />
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>{success}</p>}
  </>
  );
};

export default PDDocumentImport;