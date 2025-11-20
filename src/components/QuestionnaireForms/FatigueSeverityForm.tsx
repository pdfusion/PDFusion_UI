import { type JSX } from 'react';
import PDRadioScale from '../widgets/PDRadioScale.tsx';

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

<h1>Fatigue Severity Form</h1>
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

      <PDRadioScale
        name={"FSV3EasilyFatigued"}
        caption={"I am easily fatigued."}
        value={formData.FSV3EasilyFatigued}
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
        name={"FSV4PhysicalFunctioning"}
        caption={"Fatigue interferes with my physical functioning."}
        value={formData.FSV4PhysicalFunctioning}
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
        name={"FSV5FrequentProblems"}
        caption={"Fatigue causes frequent problems for me."}
        value={formData.FSV5FrequentProblems}
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
        name={"FSV6SustainedPhysicalFunctioning"}
        caption={"My fatigue prevents sustained physical functioning."}
        value={formData.FSV6SustainedPhysicalFunctioning}
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
        name={"FSV7DutiesResponsibilities"}
        caption={"Fatigue interferes with carrying out certain duties and responsibilities."}
        value={formData.FSV7DutiesResponsibilities}
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
        name={"FSV8MostDisabling"}
        caption={"Fatigue is among my most disabling symptoms."}
        value={formData.FSV8MostDisabling}
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
        name={"FSV9Interferes"}
        caption={"Fatigue interferes with my work, family, or social life."}
        value={formData.FSV9Interferes}
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
