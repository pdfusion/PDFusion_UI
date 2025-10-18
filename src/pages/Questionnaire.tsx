import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm';
import PDTextField from '../components/widgets/PDTextField';
import PDButton from '../components/widgets/PDButton';
import PDRadioScale from '../components/widgets/PDRadioScale';
import PDCheckboxGroup from '../components/widgets/PDCheckboxGroup';
import { createCase, getCaseById, initFormData, updateFormDataByCaseId } from '../api/cases';
import { useCasesData } from '../contexts/CasesDataContext';

interface IQuestionnaire {
  
}

const Questionnaire = ({  }:IQuestionnaire): JSX.Element => {
  const [formData, setFormData] = useState(initFormData);
  const { casesData, setCasesData } = useCasesData();
  //TODO: Set this dynamically.
  const caseId = 'pdfn:cases:1';
  
  useEffect(() => {
    (async () => {
      const caseDataRes = await getCaseById(caseId, casesData);
      setFormData(caseDataRes.formData);
    })();
  }, [caseId, casesData]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(caseId)
      await updateFormDataByCaseId(caseId, formData, casesData, setCasesData);
    else
      await createCase(formData, casesData, setCasesData);
  };


  return (
    <PDForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    >
      <PDTextField
        name={"name"}
        caption={"Name"}
        value={formData.name}
      />

      <PDTextField
        name={"age"}
        caption={"Age"}
        value={formData.age}
      />

      <PDRadioScale
        name={"feelsFit"}
        caption={"I feel fit"}
        value={formData.feelsFit}
      />

      <PDCheckboxGroup
        name={"gameDevices"}
        caption={"Do you play games on any of the following devices? (Select all that apply)"}
        options={[
          { name: "gameDeviceSmartPhoneTablet", label: "Smartphone or tablet"},
          { name: "gameDeviceComputer", label: "Computer (desktop or laptop)"},
          { name: "gameDeviceConsole", label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)"},
          { name: "gameDeviceDoNotPlay", label: "I do not play games on any electronic device"},
          { name: "gameDeviceDoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"testCheckbox"}
        caption={"Test checkbox field for fun."}
        options={[
          { name: "option1", label: "Option 1"},
          { name: "option2", label: "Option 2"},
          { name: "option3", label: "Option 3"},
          { name: "option4", label: "Option 4"},
          { name: "option5", label: "Option 5"},
        ]}
      />

      <PDButton
        buttonType={"save"}
      />
      <PDButton
        buttonType={"restore"}
      />
    </PDForm>
  );
};

export default Questionnaire;