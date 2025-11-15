import { type JSX } from 'react';
import PDRadioScale from '../widgets/PDRadioScale.tsx';

export interface ICESDForm {
    /**
     * The form data.
    */
    formData?: any,
}

const CESDForm = ({
    formData
}: ICESDForm): JSX.Element => {

return (<>

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

</>)
};

export default CESDForm;
