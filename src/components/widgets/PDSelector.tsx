import { useState, type JSX } from 'react';
import styles from '../../styles/PDSelector.module.css';
import PDButton from '../widgets/PDButton';
import PDTextField from '../widgets/PDTextField';
import { getIdFromPdfn } from '../../utils/helpers';

export interface IPDSelectorOptions {
    [key: string]: string,
    id: string,
    name: string
}

export interface IPDSelectorColumn {
  key: string,
  label: string,
}


export interface IPDSelector {
    /**
     * The field name.
    */
    name: string,
    /**
     * The field caption.
    */
    caption: string,
    /**
     * Options for selection.
    */
    options: IPDSelectorOptions[],
    /**
     * Columns for selection data display.
    */
    columns: IPDSelectorColumn[],
    /**
     * The form data. Defaults to formData from parent PDForm.
    */
    formData?: any,
    /**
     * State function to set formData. Defaults to setFormData from parent PDForm.
    */
    setFormData?: React.Dispatch<React.SetStateAction<any>>
}

const PDSelector = ({ name, caption, formData, setFormData, options, columns }: IPDSelector): JSX.Element => {
  const [selectedName, setSelectedName] = useState<string>('');
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const handleSelect = (selName: string, selId: string): void => {
    setSelectedName(selName);
    if(setFormData) setFormData({ ...formData, [name]: selId });
    setIsPanelOpen(false);
  };

  const handleClear = (): void => {
    setSelectedName('');
  };

  return (
    <div className={styles.selectorContainer}>
      <PDTextField
        name={name}
        caption={caption}
        value={selectedName}
      />

    <div style={{ display: 'flex', gap: '8px' }}>
      <PDButton
        buttonType="select"
        handleClick={() => setIsPanelOpen(true)}
      />
      <PDButton
        buttonType="clear"
        handleClick={handleClear}
      />
    </div>

      {isPanelOpen && (
        <div className={styles.slideInPanel}>
          <div className={styles.panelHeader}>
            <h3>Select an Option</h3>
            <button onClick={() => setIsPanelOpen(false)}>Close</button>
          </div>
          <table className={styles.panelTable}>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key}>{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {options.map((item: IPDSelectorOptions) => (
                <tr key={item.id} onClick={() => handleSelect(item.name, item.id)}>
                  {columns.map((col: IPDSelectorColumn) => (
                    <td key={col.key}>
                      {col.key === 'id' ? getIdFromPdfn(item[col.key]) : item[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PDSelector;