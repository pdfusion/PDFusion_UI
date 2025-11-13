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

const STAI1Form = (): JSX.Element => {

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

      <h2>"A number of statements which people have used to describe themselves are given below. Read each statement and then circle the appropriate number to the right of the statement to indicate how you feel right now, that is, at this moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best."</h2>

      <PDRadioScale
        name={"STAI1FeelCalm"}
        caption={"I feel calm"}
        value={formData.STAI1FeelCalm}
        options={
          [
            { label: "Not at all", value: "1"},
            { label: "Somewhat", value: "2"},
            { label: "Moderately so", value: "3"},
            { label: "Very much so", value: "4"}
          ]
        }
      />

      <PDRadioScale
        name={"STAI2FeelSecure"}
        caption={"I feel secure"}
        value={formData.STAI2FeelSecure}
        options={
          [
            { label: "Not at all", value: "1"},
            { label: "Somewhat", value: "2"},
            { label: "Moderately so", value: "3"},
            { label: "Very much so", value: "4"}
          ]
        }
      />

    </PDForm>
</>
};

export default STAI1Form;
