import { type JSX } from 'react';
import PDCheckboxGroup from '../widgets/PDCheckboxGroup.tsx';

export interface IGamingHabitsForm {
    /**
     * The form data.
    */
    formData?: any,
}

const GamingHabitsForm = ({
}: IGamingHabitsForm): JSX.Element => {

return (<>

      <h2>This section asks about the types of electronic devices you use to play games and your preferences. If you play games, select all the devices you've used in the past week (e.g., smartphone, computer, console), then choose the one you prefer most. You'll also be asked to identify the types of games you typically enjoy. If your favorite type isn't listed, feel free to write it in under "Other."</h2>

      <PDCheckboxGroup
        name={"GH1PlayDevices"}
        caption={"Do you play games on any of the following devices? (Select all that apply)"}
        options={[
          { name: "GH1SmartPhoneTablet", label: "Smartphone or tablet"},
          { name: "GH1Computer", label: "Computer (desktop or laptop)"},
          { name: "GH1Console", label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)"},
          { name: "GH1DoNotPlay", label: "I do not play games on any electronic device"},
          { name: "GH1DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH2PreferredDevice"}
        caption={"Which of the following best describes your preferred gaming device?"}
        options={[
          { name: "GH2SmartPhoneTablet", label: "Smartphone or tablet"},
          { name: "GH2Computer", label: "Computer (desktop or laptop)"},
          { name: "GH2Console", label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)"},
          { name: "GH2NoPref", label: "I do not have a preferred device"},
          { name: "GH2DoNotPlay", label: "I do not play games"},
          { name: "GH2DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH3UsuallyPlay"}
        caption={"Which of the following best describes your preferred gaming device?"}
        options={[
          { name: "GH3PuzzleCasual", label: "Puzzle or casual games (e.g., Candy Crush, Sudoku)"},
          { name: "GH3ActionAdventure", label: "Action or adventure games"},
          { name: "GH3SportsRacing", label: "Sports or racing games"},
          { name: "GH3StrategySimulation", label: "Strategy or simulation games"},
          { name: "GH3RolePlaying", label: "Role-playing games (RPGs)"},
          { name: "GH3MultiplayerOnline", label: "Multiplayer online games"},
          { name: "GH3Other", label: "Other"},
          { name: "GH3DoNotPlay", label: "I don’t play games"},
          { name: "GH3DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <h2>Gaming Habits Assessment, Section 2: Time Spent Gaming (Past 7 Days)</h2>
      <h3>In this section, you’ll report how much time you spent gaming each day over the past week. For each day (Monday through Sunday), mark the box corresponding to the time range that best represents your total gaming activity on any electronic device. If you didn’t play games on a particular day, simply mark “None” or “0”. Try to estimate your time as accurately as possible. To help you decide, consider the total time you spent across all devices that day.</h3>

      <PDCheckboxGroup
        name={"GH4Monday"}
        caption={"Monday"}
        options={[
          { name: "GH4None", label: "None (0 minutes)"},
          { name: "GH4OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH4SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH4OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH4OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH4TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH4MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH5Tuesday"}
        caption={"Tuesday"}
        options={[
          { name: "GH5None", label: "None (0 minutes)"},
          { name: "GH5OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH5SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH5OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH5OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH5TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH5MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH6Wednesday"}
        caption={"Wednesday"}
        options={[
          { name: "GH6None", label: "None (0 minutes)"},
          { name: "GH6OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH6SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH6OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH6OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH6TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH6MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH7Thursday"}
        caption={"Thursday"}
        options={[
          { name: "GH7None", label: "None (0 minutes)"},
          { name: "GH7OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH7SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH7OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH7OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH7TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH7MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH8Friday"}
        caption={"Friday"}
        options={[
          { name: "GH8None", label: "None (0 minutes)"},
          { name: "GH8OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH8SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH8OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH8OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH8TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH8MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH9Saturday"}
        caption={"Saturday"}
        options={[
          { name: "GH9None", label: "None (0 minutes)"},
          { name: "GH9OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH9SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH9OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH9OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH9TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH9MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH10Sunday"}
        caption={"Sunday"}
        options={[
          { name: "GH10None", label: "None (0 minutes)"},
          { name: "GH10OneToSixtyMinutes", label: "1 – 60 minutes (up to 1 hour)"},
          { name: "GH10SixtyOneToOneTwentyMinutes", label: "61 – 120 minutes (1 to 2 hours)"},
          { name: "GH10OneTwentyOneToOneEightyMinutes", label: "121 – 180 minutes (2 to 3 hours)"},
          { name: "GH10OneEightyOneToTwoFortyMinutes", label: "181 - 240 minutes (3 to 4 hours)"},
          { name: "GH10TwoFortyOneToThreeHundredMinutes", label: "241 – 300 minutes (4 to 5 hours)"},
          { name: "GH10MoreThanThreeHundredMinutes", label: "More than 300 minutes (5+ hours)"}
        ]}
      />

      <h2>Gaming Habits Assessment, Section 3: Physical and Sensory Preferences</h2>
      <h3>This section explores how your physical characteristics and sensory preferences may influence your gaming experience. You’ll be asked about your dominant hand, any accessibility tools or settings you use, and whether you have any sensory sensitivities that affect how you play. You’ll also be asked about your preferred screen size and how far you typically sit from the screen while gaming. Your responses will help us better understand how physical and sensory factors shape gaming habits and comfort.</h3>

      <PDCheckboxGroup
        name={"GH11DominantHand"}
        caption={"What is your dominant hand?"}
        options={[
          { name: "GH11RightHanded", label: "Right-handed"},
          { name: "GH11LeftHanded", label: "Left-handed"},
          { name: "GH11Ambidextrous", label: "Ambidextrous"},
          { name: "GH11DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH12AccessibilityTools"}
        caption={"Do you use any accessibility tools or settings when gaming? (Select all that apply)"}
        options={[
          { name: "GH12CustomController", label: "Custom controller or adaptive device"},
          { name: "GH12Subtitles", label: "Subtitles or closed captions"},
          { name: "GH12ColorblindMode", label: "Colorblind mode"},
          { name: "GH12ScreenReader", label: "Screen reader or audio cues"},
          { name: "GH12NoNoiseOrVolumeOff", label: "No noise or volume off"},
          { name: "GH12Other", label: "Other"},
          { name: "GH12None", label: "None"},
          { name: "GH12DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH12SensoryPreferences"}
        caption={"Do you have any sensory preferences or sensitivities that affect your gaming experience?"}
        options={[
          { name: "GH13Yes", label: "Yes"},
          { name: "GH13No", label: "No"},
          { name: "GH13DoNotSay", label: "Prefer not to say"}
        ]}
      />

</>);
};

export default GamingHabitsForm;