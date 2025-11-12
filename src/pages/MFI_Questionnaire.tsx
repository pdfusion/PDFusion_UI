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

      <h2>The next questions are about how you have been feeling lately. Please place one “X” for each
statement.</h2>

      <h2>The more you agree with the statement, the more you should place an “X” in the direction of
“yes, that is true .” The more you disagree with the statement, the more you should place an X
in the direction of “no, that is not true.”</h2>

      <h2>Take for example the statement: “I FEEL RELAXED.”</h2>

      <h2>If you think that this statement is entirely true , that you have been feeling relaxed lately, you
would place an “X” in the box labeled “1.”</h2>

      <PDRadioScale
        name={"MFI1"}
        caption={"I feel fit."}
        value={formData.MFI1}
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
        name={"MFI2"}
        caption={"Physically I feel only able to do a little."}
        value={formData.MFI2}
        options={
          [
            { label: "Not at all", value: "1"},
            { label: "Somewhat", value: "2"},
            { label: "Moderately so", value: "3"},
            { label: "Very much so", value: "4"}
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
