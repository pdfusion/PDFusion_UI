import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDTextField from '../components/widgets/PDTextField.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
import PDRadioScale from '../components/widgets/PDRadioScale.tsx';
import PDCheckboxGroup from '../components/widgets/PDCheckboxGroup.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';
import type { IQuestionnaire } from './IQuestionnaire.tsx';
import PDSelector, { type IPDSelectorColumn, type IPDSelectorOptions } from '../components/widgets/PDSelector.tsx';
import { defaultUserData, type UserDataType } from "../contexts/UsersDataContext.tsx";
import { useUsersDataAPI } from '../hooks/useUsersDataAPI.ts';

const Questionnaire = ({  }:IQuestionnaire): JSX.Element => {
  const {
      initFormData,
      getCaseById,
      createCase,
      updateCase,
    } = useCasesDataAPI();
  const {
      getUsers,
    } = useUsersDataAPI();

  const [formData, setFormData] = useState(initFormData);
  const [usersData, setUsersData] = useState<UserDataType[]>([defaultUserData]);
  const [personsOptions, setPersonsOptions] = useState<IPDSelectorOptions[]>([]);
  const { id } = useParams<{ id: string }>();
  const columns: IPDSelectorColumn[] = [
    { key: "id", label: "ID"},
    { key: "name", label: "Name"}
  ]
  
  useEffect(() => {
    (async () => {
      if(id) {
        const caseDataRes = await getCaseById(id);
        const usersDataRes = await getUsers();
        const usersOptions = (usersDataRes || []).map((user: UserDataType) => {
          return {
            id: user.id,
            name: user.name
          }
        });

        setFormData(caseDataRes.formData);
        setPersonsOptions(usersOptions);
        setUsersData(usersDataRes);
      }
    })();
  }, [id]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(id)
      await updateCase(id, formData);
    else
      await createCase(formData);
  };


  return (
    <PDForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    >
      <PDSelector
        name={"patientId"}
        caption={"Patient"}
        options={personsOptions}
        columns={columns}
        value={usersData?.find((user: UserDataType) => user.id === formData.patientId)?.name || ''}
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
    </PDForm>
  );
};

export default Questionnaire;