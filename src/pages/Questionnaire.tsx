import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDTextField from '../components/widgets/PDTextField.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
import PDRadioScale from '../components/widgets/PDRadioScale.tsx';
import PDCheckboxGroup from '../components/widgets/PDCheckboxGroup.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';

interface IQuestionnaire {
  
}

const Questionnaire = ({  }:IQuestionnaire): JSX.Element => {
  const {
      initFormData,
      getCaseById,
      createCase,
      updateFormDataByCaseId,
    } = useCasesDataAPI();

  const [formData, setFormData] = useState(initFormData);
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    (async () => {
      console.log('sr log id from params:', id);
      if(id) {
        const caseDataRes = await getCaseById(id);
        console.log('sr log casesDataRes:', caseDataRes);
        setFormData(caseDataRes.formData);
      }
    })();
  }, [id]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(id)
      await updateFormDataByCaseId(id, formData);
    else
      await createCase(formData);
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