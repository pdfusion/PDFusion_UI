import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDTextField from '../components/widgets/PDTextField.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
import PDRadioScale from '../components/widgets/PDRadioScale.tsx';
import PDCheckboxGroup from '../components/widgets/PDCheckboxGroup.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI';
import PDSelector, { type IPDSelectorColumn, type IPDSelectorOptions } from '../components/widgets/PDSelector.tsx';
import { defaultUserData, type UserDataType } from "../contexts/UsersDataContext.tsx";
import { useUsersDataAPI } from '../hooks/useUsersDataAPI.ts';
import CESDForm from '../components/QuestionnaireForms/CESDForm.tsx';
import FatigueSeverityForm from '../components/QuestionnaireForms/FatigueSeverityForm.tsx';
import GamingHabitsForm from '../components/QuestionnaireForms/GamingHabitsForm.tsx';
import MFIForm from '../components/QuestionnaireForms/MFIForm.tsx';
import PANASSFForm from '../components/QuestionnaireForms/PANASSFForm.tsx';
import STAI1Form from '../components/QuestionnaireForms/STAI1Form.tsx';

const Questionnaire = (): JSX.Element => {
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
  const [usersData, setUsersData] = useState<UserDataType[] | null>([defaultUserData]);
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

      <PDRadioScale
        name={"feelFit"}
        caption={"I feel fit"}
        value={formData.feelFit}
        rightEndLabel={"no, that is not true"}
        lefttEndLabel={"yes, that is true"}
        options={
          [
            { label: "1", value: "1"},
            { label: "2", value: "2"},
            { label: "3", value: "3"},
            { label: "4", value: "4"},
            { label: "5", value: "5"}
          ]
        }
      />

      <PDRadioScale
        name={"feelCalm"}
        caption={"I feel calm"}
        value={formData.feelCalm}
        options={
          [
            { label: "Not at all", value: "1"},
            { label: "Somewhat", value: "2"},
            { label: "Moderately so", value: "3"},
            { label: "Very much so", value: "4"}
          ]
        }
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

<>
      <MFIForm formData={formData} setFormData={setFormData} />
      <STAI1Form formData={formData} setFormData={setFormData} />
      <PANASSFForm formData={formData} setFormData={setFormData} />
      <FatigueSeverityForm formData={formData} setFormData={setFormData} />
      <CESDForm formData={formData} setFormData={setFormData} />
      <GamingHabitsForm formData={formData} setFormData={setFormData} />
</>

      <PDButton
        buttonType={"save"}
      />
    </PDForm>
  );
};

export default Questionnaire;