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

      <PDRadioScale
        name={"STAI3AmTense"}
        caption={"I am tense"}
        value={formData.STAI3AmTense}
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
        name={"STAI4FeelStrained"}
        caption={"I feel strained"}
        value={formData.STAI4FeelStrained}
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
        name={"STAI5FeelAtEase"}
        caption={"I feel at ease"}
        value={formData.STAI5FeelAtEase}
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
        name={"STAI6FeelUpset"}
        caption={"I feel upset"}
        value={formData.STAI6FeelUpset}
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
        name={"STAI7WorryMisfortunes"}
        caption={"I am presently worrying over possible misfortunes"}
        value={formData.STAI7WorryMisfortunes}
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
        name={"STAI8FeelSatisfied"}
        caption={"I feel satisfied"}
        value={formData.STAI8FeelSatisfied}
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
        name={"STAI9FeelFrightened"}
        caption={"I feel frightened"}
        value={formData.STAI9FeelFrightened}
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
        name={"STAI10FeelComfortable"}
        caption={"I feel comfortable"}
        value={formData.STAI10FeelComfortable}
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
        name={"STAI11FeelSelfConfident"}
        caption={"I feel self-confident"}
        value={formData.STAI11FeelSelfConfident}
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
        name={"STAI12FeelNervous"}
        caption={"I feel nervous"}
        value={formData.STAI12FeelNervous}
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
        name={"STAI13AmJittery"}
        caption={"I am jittery"}
        value={formData.STAI13AmJittery}
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
        name={"STAI14FeelIndecisive"}
        caption={"I feel indecisive"}
        value={formData.STAI14FeelIndecisive}
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
        name={"STAI15AmRelaxed"}
        caption={"I am relaxed"}
        value={formData.STAI15AmRelaxed}
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
        name={"STAI16FeelContent"}
        caption={"I feel content"}
        value={formData.STAI16FeelContent}
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
        name={"STAI17AmWorried"}
        caption={"I am worried"}
        value={formData.STAI17AmWorried}
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
        name={"STAI18FeelConfused"}
        caption={"I feel confused"}
        value={formData.STAI18FeelConfused}
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
        name={"STAI19FeelSteady"}
        caption={"I feel steady"}
        value={formData.STAI19FeelSteady}
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
        name={"STAI20FeelPleasant"}
        caption={"I feel pleasant"}
        value={formData.STAI20FeelPleasant}
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
