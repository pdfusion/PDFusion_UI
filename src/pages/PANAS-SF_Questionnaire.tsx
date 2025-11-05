import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDTextField from '../components/widgets/PDTextField.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
import PDRadioScale from '../components/widgets/PDRadioScale.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../hooks/useCasesDataAPI.ts';
import PDSelector, { type IPDSelectorColumn, type IPDSelectorOptions } from '../components/widgets/PDSelector.tsx';
import { defaultUserData, type UserDataType } from "../contexts/UsersDataContext.tsx";
import { useUsersDataAPI } from '../hooks/useUsersDataAPI.ts';

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

      <h2>"Indicate the extent you have felt this way over the past week"</h2>

      <PDRadioScale
        name={"interested"}
        caption={"Interested"}
        value={formData.interested}
        options={
          [
            { label: "Very slightly or not at all", value: "1"},
            { label: "A little", value: "2"},
            { label: "Moderately", value: "3"},
            { label: "Quite a bit", value: "4"},
            { label: "Extremely", value: "5"}
          ]
        }
      />

      <PDRadioScale
        name={"distressed"}
        caption={"Distressed"}
        value={formData.distressed}
        options={
          [
            { label: "Very slightly or not at all", value: "1"},
            { label: "A little", value: "2"},
            { label: "Moderately", value: "3"},
            { label: "Quite a bit", value: "4"},
            { label: "Extremely", value: "5"}
          ]
        }
      />

      <PDRadioScale
        name={"excited"}
        caption={"Excited"}
        value={formData.excited}
        options={
          [
            { label: "Very slightly or not at all", value: "1"},
            { label: "A little", value: "2"},
            { label: "Moderately", value: "3"},
            { label: "Quite a bit", value: "4"},
            { label: "Extremely", value: "5"}
          ]
        }
      />

      <PDButton
        buttonType={"save"}
      />
    </PDForm>
  );
};

export default Questionnaire;
