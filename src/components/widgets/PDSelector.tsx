import { useState, type JSX } from 'react';
import styles from '../../styles/PDSelector.module.css';
import PDButton from '../widgets/PDButton';
import PDTextField from '../widgets/PDTextField';

interface Option {
  id: string;
  name: string;
  description: string;
}

export interface IPDSelector {
    /**
     * The field name.
    */
    name: string,
    /**
     * The field caption.
    */
    caption: string
}

const mockData: Option[] = [
  { id: 'A001', name: 'Option 1', description: 'First option' },
  { id: 'A002', name: 'Option 2', description: 'Second option' },
  { id: 'A003', name: 'Option 3', description: 'Third option' },
];

const PDSelector = ({ name, caption }: IPDSelector): JSX.Element => {
  const [selectedName, setSelectedName] = useState<string>('');
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const handleSelect = (selName: string): void => {
    setSelectedName(selName);
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
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} onClick={() => handleSelect(item.name)}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
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