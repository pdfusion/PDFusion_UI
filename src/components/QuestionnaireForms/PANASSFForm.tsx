import { type JSX } from 'react';
import PDRadioScale from '../widgets/PDRadioScale.tsx';

export interface IPANASSFForm {
    /**
     * The form data.
    */
    formData?: any,
}

const PANASSFForm = ({
    formData
}: IPANASSFForm): JSX.Element => {

return (<>

      <h2>Indicate the extent you have felt this way over the past week</h2>

      <PDRadioScale
        name={"PANAS1Interested"}
        caption={"Interested"}
        value={formData.PANAS1Interested}
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
        name={"PANAS2Distressed"}
        caption={"Distressed"}
        value={formData.PANAS2Distressed}
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
        name={"PANAS3Excited"}
        caption={"Excited"}
        value={formData.PANAS3Excited}
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

</>)
};

export default PANASSFForm;
