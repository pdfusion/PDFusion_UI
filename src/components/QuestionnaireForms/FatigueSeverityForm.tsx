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

export interface IFatigueSeverityForm {
    /**
     * The form data.
    */
    formData?: any,
}

const FatigueSeverityForm = ({
    formData
}: IFatigueSeverityForm): JSX.Element => {

return (<>

<h2>During the Past Week...</h2>

      <PDRadioScale
        name={"FSV1Motivation"}
        caption={"My motivation is lower when I am fatigued."}
        value={formData.FSV1Motivation}
        options={
          [
            { label: "Strongly Disagree", value: "1"},
            { label: "Disagree", value: "2"},
            { label: "Some-what Disagree", value: "3"},
            { label: "Neither Agree or Disagree", value: "4"},
            { label: "Some-what Agree", value: "5"},
            { label: "Agree", value: "6"},
            { label: "Strongly Agree", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"FSV2Exercise"}
        caption={"Exercise brings on my fatigue."}
        value={formData.FSV2Exercise}
        options={
          [
            { label: "Strongly Disagree", value: "1"},
            { label: "Disagree", value: "2"},
            { label: "Some-what Disagree", value: "3"},
            { label: "Neither Agree or Disagree", value: "4"},
            { label: "Some-what Agree", value: "5"},
            { label: "Agree", value: "6"},
            { label: "Strongly Agree", value: "7"}
          ]
        }
      />

</>)
};

export default FatigueSeverityForm;
