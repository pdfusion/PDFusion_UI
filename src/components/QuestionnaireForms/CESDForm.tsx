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

<h1>CESD Form</h1>
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

      <PDRadioScale
        name={"CESD3ShakeBlues"}
        caption={"I felt that I could not shake off the blues even with help from my family or friends."}
        value={formData.CESD3ShakeBlues}
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
        name={"CESD4GoodAsOthers"}
        caption={"I felt I was just as good as other people."}
        value={formData.CESD4GoodAsOthers}
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
        name={"CESD5MindOnDoing"}
        caption={"I had trouble keeping my mind on what I was doing."}
        value={formData.CESD5MindOnDoing}
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
        name={"CESD6Depressed"}
        caption={"I felt depressed."}
        value={formData.CESD6Depressed}
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
        name={"CESD7Effort"}
        caption={"I felt that everything I did was an effort."}
        value={formData.CESD7Effort}
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
        name={"CESD8Hopeful"}
        caption={"I felt hopeful about the future."}
        value={formData.CESD8Hopeful}
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
        name={"CESD9Failure"}
        caption={"I thought my life had been a failure."}
        value={formData.CESD9Failure}
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
        name={"CESD10Fearful"}
        caption={"I felt fearful."}
        value={formData.CESD10Fearful}
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
        name={"CESD11RestlessSleep"}
        caption={"My sleep was restless."}
        value={formData.CESD11RestlessSleep}
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
        name={"CESD12Happy"}
        caption={"I was happy."}
        value={formData.CESD12Happy}
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
        name={"CESD13TalkedLess"}
        caption={"I talked less than usual."}
        value={formData.CESD13TalkedLess}
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
        name={"CESD14Lonely"}
        caption={"I felt lonely."}
        value={formData.CESD14Lonely}
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
        name={"CESD15Unfriendly"}
        caption={"People were unfriendly."}
        value={formData.CESD15Unfriendly}
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
        name={"CESD16EnjoyedLife"}
        caption={"I enjoyed life."}
        value={formData.CESD16EnjoyedLife}
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
        name={"CESD17CryingSpells"}
        caption={"I had crying spells."}
        value={formData.CESD17CryingSpells}
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
        name={"CESD18Sad"}
        caption={"I felt sad."}
        value={formData.CESD18Sad}
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
        name={"CESD19DislikedMe"}
        caption={"I felt that people disliked me."}
        value={formData.CESD19DislikedMe}
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
        name={"CESD20GetGoing"}
        caption={"I could not get going."}
        value={formData.CESD20GetGoing}
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
