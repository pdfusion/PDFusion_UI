import { type JSX } from 'react';
import PDRadioScale from '../widgets/PDRadioScale.tsx';

export interface ISTAI1Form {
    /**
     * The form data.
    */
    formData?: any,
}

const STAI1Form = ({
    formData
}: ISTAI1Form): JSX.Element => {

return (<>

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

</>)
};

export default STAI1Form;
