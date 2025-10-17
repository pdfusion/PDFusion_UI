import React, { useState } from 'react';
import PDTextField from './widgets/PDTextField';
import PDForm from './widgets/PDForm';
import PDButton from './widgets/PDButton';
import PDRadioScale from './widgets/PDRadioScale';
import PDCheckboxGroup from './widgets/PDCheckboxGroup';

const Questionnaire: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feelsFit: '',
    selectedOptions: [] as string[]
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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