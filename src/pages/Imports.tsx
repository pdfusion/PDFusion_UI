import React from 'react';
import PDForm from '../components/widgets/PDForm';
import PDDocumentImport from '../components/widgets/PDDocumentImport';
import PDButton from '../components/widgets/PDButton';

const Report: React.FC = () => {

  return (
    <PDForm
    >
      <PDDocumentImport
        caption={"Restore data from JSON file"}
        uploadType={"set"}
      />

      <PDDocumentImport
        caption={"Merge data from JSON file"}
        uploadType={"merge"}
      />

      <PDButton
        caption={"Bakup app data (downloads JSON file)"}
        buttonType={"backup"}
      />
    </PDForm>
  );
};

export default Report;