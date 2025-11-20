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

      <PDRadioScale
        name={"PANAS4Upset"}
        caption={"Upset"}
        value={formData.PANAS4Upset}
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
        name={"PANAS5Strong"}
        caption={"Strong"}
        value={formData.PANAS5Strong}
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
        name={"PANAS6Guilty"}
        caption={"Guilty"}
        value={formData.PANAS6Guilty}
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
        name={"PANAS7Scared"}
        caption={"Scared"}
        value={formData.PANAS7Scared}
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
        name={"PANAS8Hostile"}
        caption={"Hostile"}
        value={formData.PANAS8Hostile}
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
        name={"PANAS9Enthusiastic"}
        caption={"Enthusiastic"}
        value={formData.PANAS9Enthusiastic}
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
        name={"PANAS10Proud"}
        caption={"Proud"}
        value={formData.PANAS10Proud}
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
        name={"PANAS11Irritable"}
        caption={"Irritable"}
        value={formData.PANAS11Irritable}
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
        name={"PANAS12Alert"}
        caption={"Alert"}
        value={formData.PANAS12Alert}
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
        name={"PANAS13Ashamed"}
        caption={"Ashamed"}
        value={formData.PANAS13Ashamed}
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
        name={"PANAS14Inspired"}
        caption={"Inspired"}
        value={formData.PANAS14Inspired}
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
        name={"PANAS15Nervous"}
        caption={"Nervous"}
        value={formData.PANAS15Nervous}
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
        name={"PANAS16Determined"}
        caption={"Determined"}
        value={formData.PANAS16Determined}
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
        name={"PANAS17Attentive"}
        caption={"Attentive"}
        value={formData.PANAS17Attentive}
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
        name={"PANAS18Jittery"}
        caption={"Jittery"}
        value={formData.PANAS18Jittery}
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
        name={"PANAS19Active"}
        caption={"Active"}
        value={formData.PANAS19Active}
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
        name={"PANAS20Afraid"}
        caption={"Afraid"}
        value={formData.PANAS20Afraid}
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
