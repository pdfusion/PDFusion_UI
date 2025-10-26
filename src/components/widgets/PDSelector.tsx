import React, { useState } from 'react';
import styles from '../../styles/PDSelector.module.css';
import PDButton from '../widgets/PDButton'; // Adjust path as needed

interface Option {
  id: string;
  name: string;
  description: string;
}

const mockData: Option[] = [
  { id: 'A001', name: 'Option 1', description: 'First option' },
  { id: 'A002', name: 'Option 2', description: 'Second option' },
  { id: 'A003', name: 'Option 3', description: 'Third option' },
];

const PDSelector: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string>('');
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const handleSelect = (name: string): void => {
    setSelectedName(name);
    setIsPanelOpen(false);
  };

  return (
    <div className={styles.selectorContainer}>
      <input
        type="text"
        value={selectedName}
        readOnly
        placeholder="Select an option"
        className={styles.selectorInput}
      />
      <PDButton
        buttonType="select"
        handleSelect={() => setIsPanelOpen(true)}
      />

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