import React, { useEffect, useState, type JSX } from 'react';
import PDForm from '../widgets/PDForm.tsx';
import PDTextField from '../widgets/PDTextField.tsx';
import PDButton from '../widgets/PDButton.tsx';
import PDRadioScale from '../widgets/PDRadioScale.tsx';
import { useParams } from 'react-router-dom';
import { useCasesDataAPI } from '../../hooks/useCasesDataAPI.ts';
import PDSelector, { type IPDSelectorColumn, type IPDSelectorOptions } from '../widgets/PDSelector.tsx';
import { defaultUserData, type UserDataType } from "../../contexts/UsersDataContext.tsx";
import { useUsersDataAPI } from '../../hooks/useUsersDataAPI.ts';

const CESDForm = (): JSX.Element => {

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

      <PDTextField
        name={"age"}
        caption={"Age"}
        value={formData.age}
      />

<h2>During the Past Week...</h2>

      <PDRadioScale
        name={"CESD1Bothered"}
        caption={"I was bothered by things that usually don't bother me."}
        value={formData.CESD1Bothered}
        options={
          [
            { label: "Rarely or none of the time (less than 1 day)", value: "1"},
            { label: "Some or little of the time (1-2 days)", value: "2"},
            { label: "Occasionally or a moderate amount of time (3-4 days)", value: "3"},
            { label: "Most or all of the time (5-7 days)", value: "4"}
          ]
        }
      />

      <PDRadioScale
        name={"CESD2Eating"}
        caption={"I did not feel like eating; my appetite was poor."}
        value={formData.CESD2Eating}
        options={
          [
            { label: "Rarely or none of the time (less than 1 day)", value: "1"},
            { label: "Some or little of the time (1-2 days)", value: "2"},
            { label: "Occasionally or a moderate amount of time (3-4 days)", value: "3"},
            { label: "Most or all of the time (5-7 days)", value: "4"}
          ]
        }
      />

    </PDForm>
</>
};

export default CESDForm;
