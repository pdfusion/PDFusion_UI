import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../components/widgets/PDForm.tsx';
import PDButton from '../components/widgets/PDButton.tsx';
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

<>
      <MFIForm formData={formData} />
      <STAI1Form formData={formData} />
      <PANASSFForm formData={formData} />
      <FatigueSeverityForm formData={formData} />
      <CESDForm formData={formData} />
      <GamingHabitsForm formData={formData} />
</>

      <PDButton
        buttonType={"save"}
      />
    </PDForm>
  );
};

export default Questionnaire;