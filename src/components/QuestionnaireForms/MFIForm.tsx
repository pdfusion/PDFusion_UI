import { type JSX } from 'react';
import PDRadioScale from '../widgets/PDRadioScale.tsx';

export interface IMFIForm {
    /**
     * The form data.
    */
    formData?: any,
}

const MFIForm = ({
    formData
}: IMFIForm): JSX.Element => {

return (<>

      <h2>The next questions are about how you have been feeling lately. Please place one “X” for each
statement.</h2>

      <h2>The more you agree with the statement, the more you should place an “X” in the direction of
“yes, that is true .” The more you disagree with the statement, the more you should place an X
in the direction of “no, that is not true.”</h2>

      <h2>Take for example the statement: “I FEEL RELAXED.”</h2>

      <h2>If you think that this statement is entirely true , that you have been feeling relaxed lately, you
would place an “X” in the box labeled “1.”</h2>

      <PDRadioScale
        name={"MFI1FeelFit"}
        caption={"I feel fit."}
        value={formData.MFI1FeelFit}
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
        name={"MFI2DoLittle"}
        caption={"Physically I feel only able to do a little."}
        value={formData.MFI2DoLittle}
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

export default MFIForm;
