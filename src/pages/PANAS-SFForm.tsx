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

const PANASSFForm = (): JSX.Element => {

<>
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

      <h2>Indicate the extent you have felt this way over the past week</h2>

      <PDRadioScale
        name={"PANAS1"}
        caption={"Interested"}
        value={formData.PANAS1}
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
        name={"PANAS2"}
        caption={"Distressed"}
        value={formData.PANAS2}
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
        name={"PANAS3"}
        caption={"Excited"}
        value={formData.PANAS3}
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

    </PDForm>
</>
};

export default PANASSFForm;
