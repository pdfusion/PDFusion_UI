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

</>);
};

export default GamingHabitsForm;