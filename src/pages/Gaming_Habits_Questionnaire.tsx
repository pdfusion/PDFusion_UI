import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDTextField from '../components/widgets/PDTextField.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
// Removed unused PDRadioScale import
import PDCheckboxGroup from '../components/widgets/PDCheckboxGroup.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI.ts';
import PDSelector, { type IPDSelectorColumn, type IPDSelectorOptions } from '../components/widgets/PDSelector.tsx';
import { defaultUserData, type UserDataType } from "../contexts/UsersDataContext.tsx";
import { useUsersDataAPI } from '../hooks/useUsersDataAPI.ts';

const Gaming = (): JSX.Element => {
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
  const [patientOptions, setPatientOptions] = useState<IPDSelectorOptions[]>([]);
  const [caseManagerOptions, setCaseManagerOptions] = useState<IPDSelectorOptions[]>([]);
  const { id } = useParams<{ id: string }>();
  const personColumns: IPDSelectorColumn[] = [
    { key: "id", label: "ID"},
    { key: "name", label: "Name"}
  ]
  
  useEffect(() => {
    (async () => {
      const usersDataRes = await getUsers();
      const filteredPatients = (usersDataRes || []).filter((user: UserDataType) => user.role === "patient").map((user: UserDataType) => {
        return {
          id: user.id,
          name: user.name
        }
      });
      const filteredCMs = (usersDataRes || []).filter((user: UserDataType) => user.role === "caseManager").map((user: UserDataType) => {
        return {
          id: user.id,
          name: user.name
        }
      });

      setUsersData(usersDataRes);
      setPatientOptions(filteredPatients);
      setCaseManagerOptions(filteredCMs);
      
      if(id) {
        const caseDataRes = await getCaseById(id);
        setFormData(caseDataRes.formData);
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
        options={patientOptions}
        columns={personColumns}
        value={usersData?.find((user: UserDataType) => user.id === formData.patientId)?.name || ''}
      />

      <PDSelector
        name={"caseManagerId"}
        caption={"Case manager"}
        options={caseManagerOptions}
        columns={personColumns}
        value={usersData?.find((user: UserDataType) => user.id === formData.caseManagerId)?.name || ''}
      />

      <PDTextField
        name={"age"}
        caption={"Age"}
        value={formData.age}
      />

      <h2>This section asks about the types of electronic devices you use to play games and your preferences. If you play games, select all the devices you've used in the past week (e.g., smartphone, computer, console), then choose the one you prefer most. You'll also be asked to identify the types of games you typically enjoy. If your favorite type isn't listed, feel free to write it in under "Other."</h2>

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
        name={"preferredGamingDevice"}
        caption={"Which of the following best describes your preferred gaming device?"}
        options={[
          { name: "gameDeviceSmartPhoneTablet", label: "Smartphone or tablet"},
          { name: "gameDeviceComputer", label: "Computer (desktop or laptop)"},
          { name: "gameDeviceConsole", label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)"},
          { name: "gameDeviceNoPref", label: "I do not have a preferred device"},
          { name: "gameDeviceDoNotPlay", label: "I do not play games"},
          { name: "gameDeviceDoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDButton
        buttonType={"save"}
      />
    </PDForm>
  );
};

export default Gaming;