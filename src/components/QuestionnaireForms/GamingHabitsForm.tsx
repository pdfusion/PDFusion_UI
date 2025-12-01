import { type JSX } from 'react';
import PDTextField from '../widgets/PDTextField.tsx';
import PDCheckboxGroup from '../widgets/PDCheckboxGroup.tsx';
import PDRadioScale from '../widgets/PDRadioScale.tsx';


export interface IGamingHabitsForm {
    /**
     * The form data.
    */
    formData?: any,
}

const GamingHabitsForm = ({
      formData
}: IGamingHabitsForm): JSX.Element => {

return (<>

      <h2>This section asks about the types of electronic devices you use to play games and your preferences. If you play games, select all the devices you've used in the past week (e.g., smartphone, computer, console), then choose the one you prefer most. You'll also be asked to identify the types of games you typically enjoy. If your favorite type isn't listed, feel free to write it in under "Other."</h2>

      {/* <PDCheckboxGroup
        name={"GH1PlayDevices"}
        caption={"Do you play games on any of the following devices? (Select all that apply)"}
        options={[
          { name: "GH1SmartPhoneTablet", label: "Smartphone or tablet"},
          { name: "GH1Computer", label: "Computer (desktop or laptop)"},
          { name: "GH1Console", label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)"},
          { name: "GH1DoNotPlay", label: "I do not play games on any electronic device"},
          { name: "GH1DoNotSay", label: "Prefer not to say"}
        ]} 
      />*/}

      <PDRadioScale
        name={"GH2PreferredDevice"}
        caption={"Which of the following best describes your preferred gaming device?"}
        value={formData.GH2PreferredDevice}
        options={
          [
            { label: "Smartphone or tablet", value: "1"},
            { label: "Computer (desktop or laptop)", value: "2"},
            { label: "Gaming console (e.g., PlayStation, Xbox, Nintendo Switch)", value: "3"},
            { label: "I do not have a preferred device", value: "4"},
            { label: "I do not play games", value: "5"},
            { label: "Prefer not to say", value: "6"}
          ]
        }
      />

      <PDRadioScale
        name={"GH3UsuallyPlay"}
        caption={"Which of the following best describes your preferred gaming device?"}
        value={formData.GH3UsuallyPlay}
        options={
          [
          { label: "Puzzle or casual games (e.g., Candy Crush, Sudoku)", value: "1"},
          { label: "Action or adventure games", value: "2"},
          { label: "Sports or racing games", value: "3"},
          { label: "Strategy or simulation games", value: "4"},
          { label: "Role-playing games (RPGs)", value: "5"},
          { label: "Multiplayer online games", value: "6"},
          { label: "Other", value: "7"},
          { label: "I don’t play games", value: "8"},
          { label: "Prefer not to say", value: "9"}
        ]}
      />

      <h2>Gaming Habits Assessment, Section 2: Time Spent Gaming (Past 7 Days)</h2>
      <h3>In this section, you’ll report how much time you spent gaming each day over the past week. For each day (Monday through Sunday), mark the box corresponding to the time range that best represents your total gaming activity on any electronic device. If you didn’t play games on a particular day, simply mark “None” or “0”. Try to estimate your time as accurately as possible. To help you decide, consider the total time you spent across all devices that day.</h3>

      <PDRadioScale
        name={"GH4Monday"}
        caption={"Monday"}
        value={formData.GH4Monday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH5Tuesday"}
        caption={"Tuesday"}
        value={formData.GH5Tuesday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH6Wednesday"}
        caption={"Wednesday"}
        value={formData.GH6Wednesday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH7Thursday"}
        caption={"Thursday"}
        value={formData.GH7Thursday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH8Friday"}
        caption={"Friday"}
        value={formData.GH8Friday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH9Saturday"}
        caption={"Saturday"}
        value={formData.GH9Saturday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <PDRadioScale
        name={"GH10Sunday"}
        caption={"Sunday"}
        value={formData.GH10Sunday}
        options={
          [
            { label: "None (0 minutes)", value: "1"},
            { label: "1 – 60 minutes (up to 1 hour)", value: "2"},
            { label: "61 – 120 minutes (1 to 2 hours)", value: "3"},
            { label: "121 – 180 minutes (2 to 3 hours)", value: "4"},
            { label: "181 - 240 minutes (3 to 4 hours)", value: "5"},
            { label: "241 – 300 minutes (4 to 5 hours)", value: "6"},
            { label: "More than 300 minutes (5+ hours)", value: "7"}
          ]
        }
      />

      <h2>Gaming Habits Assessment, Section 3: Physical and Sensory Preferences</h2>
      <h3>This section explores how your physical characteristics and sensory preferences may influence your gaming experience. You’ll be asked about your dominant hand, any accessibility tools or settings you use, and whether you have any sensory sensitivities that affect how you play. You’ll also be asked about your preferred screen size and how far you typically sit from the screen while gaming. Your responses will help us better understand how physical and sensory factors shape gaming habits and comfort.</h3>

      <PDRadioScale
        name={"GH11DominantHand"}
        caption={"What is your dominant hand?"}
        value={formData.GH11DominantHand}
        options={
          [
            { label: "Right-handed", value: "1"},
            { label: "Left-handed", value: "2"},
            { label: "Ambidextrous", value: "3"},
            { label: "Prefer not to say", value: "4"}
          ]
        }
      />

      {/* <PDCheckboxGroup
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
      /> */}

      <PDRadioScale
        name={"GH13SensoryPreferences"}
        caption={"Do you have any sensory preferences or sensitivities that affect your gaming experience?"}
        value={formData.GH13SensoryPreferences}
        options={
          [
            { label: "Yes", value: "1"},
            { label: "No", value: "2"},
            { label: "Prefer not to say", value: "3"},
          ]
        }
      />

      <PDRadioScale
        name={"GH14ScreenSizePref"}
        caption={"What screen size do you prefer to use when playing video games?"}
        value={formData.GH14ScreenSizePref}
        options={
          [
            { label: "6.1 - 6.7 inches (phone)", value: "1"},
            { label: "7 - 13 inches (tablet)", value: "2"},
            { label: "13 - 17 inches (laptop)", value: "3"},
            { label: "19 - 34 inches (desktop or small TV)", value: "4"},
            { label: "Greater than 34 inches (TV)", value: "5"},
            { label: "I do not play video games", value: "6"},
            { label: "Prefer not to say", value: "7"},
          ]
        }
      />

      <PDRadioScale
        name={"GH15ScreenDistPref"}
        caption={"What distance from the screen would you say you prefer when playing video games?"}
        value={formData.GH15ScreenDistPref}
        options={
          [
            { label: "12 - 20 inches", value: "1"},
            { label: "20 - 30 inches", value: "2"},
            { label: "Over 30 inches", value: "3"},
            { label: "I do not play video games", value: "4"},
            { label: "Prefer not to say", value: "5"},
          ]
        }
      />

      <h2>Gaming Habits Assessment, Section 4: Reasons for Gaming</h2>
      <h3>This section explores the reasons why you choose to play video games. Please select all options that apply to you.</h3>

      {/* <PDCheckboxGroup
        name={"GH16ChoosetoPlay"}
        caption={"Why do you choose to play video games? (Select all that apply)"}
        options={[
          { name: "GH16RelaxUnwind", label: "To relax or unwind"},
          { name: "GH16Socialize", label: "To socialize with friends or family"},
          { name: "GH16ChallengeMyself", label: "To challenge myself"},
          { name: "GH16ImproveSkills", label: "To improve skills"},
          { name: "GH16EscapeImmerse", label: "To escape or immerse in a different world"},
          { name: "GH16Compete", label: "To compete with others"},
          { name: "GH16AvoidBoredom", label: "To pass time or avoid boredom"},
          { name: "GH16CreativeExp", label: "For creative expression"},
          { name: "GH16MentalStimulation", label: "For mental stimulation"},
          { name: "GH16PhysicalStimulation", label: "For physical stimulation"},
          { name: "GH16Other", label: "Other"},
          { name: "GH16DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH17MotivatesNewGame"}
        caption={"What motivates you to start a new game? (Select all that apply)"}
        options={[
          { name: "GH17Recommendations", label: "Recommendations from friends, family, or other influencers"},
          { name: "GH17PositiveReviews", label: "Positive reviews or ratings"},
          { name: "GH17InterestingStoryline", label: "Interesting storyline or characters"},
          { name: "GH17GraphicsVisualAppeal", label: "Graphics and visual appeal"},
          { name: "GH17GameMechanicsFeatures", label: "Game mechanics or features"},
          { name: "GH17DeveloperReputation", label: "Developer reputation"},
          { name: "GH17Boredom", label: "Boredom"},
          { name: "GH17Other", label: "Other"},
          { name: "GH17DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH18MotivatesNewGame"}
        caption={"What keeps you playing a game over time? (Select all that apply)"}
        options={[
          { name: "GH18Progression", label: "Progression and rewards"},
          { name: "GH18Novelty", label: "Continued novelty or unpredictability"},
          { name: "GH18Community", label: "Community and multiplayer features"},
          { name: "GH18RegularUpdates", label: "Regular updates or the introduction of new content"},
          { name: "GH18PersonalGoals", label: "Personal goals or achievements"},
          { name: "GH18EmotionalConnection", label: "Emotional connection to the game"},
          { name: "GH18Other", label: "Other"},
          { name: "GH18DoNotSay", label: "Prefer not to say"}
        ]}
      /> */}

      <PDTextField
        name={"GH19NoGamingExplanation"}
        caption={"If you do not play any type of games on an electronic device, and if you are willing to respond, please explain why you do not play any type of games on an electronic device using the lines provided below:"}
        value={formData.GH19NoGamingExplanation}
      />

      <h2>Gaming Habits Assessment, Section 5: Physiological Information</h2>
      <h3>This section gathers information about your visual abilities, including near and far vision, use of corrective lenses, and color perception. These factors can influence how you interact with visual elements in games. You’ll be asked to report your visual acuity (if known), whether you use glasses or contacts, and if you’ve had any vision correction procedures. You’ll also be asked about your color vision and to complete a brief color-matching task. If you’re unsure of your visual acuity, please let the researcher know, and they can assist further.</h3>

      <PDTextField
        name={"GH20aVisualAcuityInfo"}
        caption={"What is your visual acuity? Right eye = 20 /"}
        value={formData.GH20aVisualAcuityInfo}
      />

      <PDTextField
        name={"GH20bVisualAcuityInfo"}
        caption={"What is your visual acuity? Left eye = 20 /"}
        value={formData.GH20bVisualAcuityInfo}
      />

      <PDRadioScale
        name={"GH21ScreenDistPref"}
        caption={"Do you utilize corrective lenses such as contacts or glasses?"}
        value={formData.GH21ScreenDistPref}
        options={
          [
            { label: "Yes, contacts", value: "1"},
            { label: "Yes, glasses", value: "2"},
            { label: "No", value: "3"},
            { label: "Prefer not to say", value: "4"},
          ]
        }
      />

      {/* <PDCheckboxGroup
        name={"GH22CorrectiveProcedures"}
        caption={"Have you had any of the following corrective procedures completed? (Select all that apply)"}
        options={[
          { name: "GH22LASIK", label: "Laser-Assisted In Situ Keratomileusis (LASIK)"},
          { name: "GH22CataractSurgery", label: "Cataract Surgery"},
          { name: "GH22PRK", label: "Photorefractive Keratectomy (PRK)"},
          { name: "GH22SMILE", label: "Small Incision Lenticule Extraction (SMILE)"},
          { name: "GH22RLE", label: "Refractive Lens Exchange (RLE)"},
          { name: "GH22ICL", label: "Implantable Collamer Lens (ICL)"},
          { name: "GH22Other", label: "None of the above"},
          { name: "GH22DoNotSay", label: "Prefer not to say"}
        ]}
      /> */}

      <PDRadioScale
        name={"GH23ColorVision"}
        caption={"Do you have normal color vision?"}
        value={formData.GH23ColorVision}
        options={
          [
            { label: "Yes", value: "1"},
            { label: "No", value: "2"},
            { label: "Prefer not to say", value: "3"},
          ]
        }
      />

      <h2>Gaming Habits Assessment, Section 6: Demographic Information</h2>
      <h3>This section collects general demographic information to help us better understand the diversity of participants in this study. You’ll be asked about your age, biological sex (both at birth and current), gender identity, race, and ethnicity. These questions are designed to be inclusive and respectful of all identities. Where applicable, you may select multiple options or write in your own response.</h3>

      <PDTextField
        name={"GH25Age"}
        caption={"What is your age in years?"}
        value={formData.GH25Age}
      />

      <PDRadioScale
        name={"GH26BiologicalSexAtBirth"}
        caption={"What was your biological sex at birth?"}
        value={formData.GH26BiologicalSexAtBirth}
        options={
          [
            { label: "Male", value: "1"},
            { label: "Female", value: "2"},
            { label: "Intersex", value: "3"},
            { label: "Prefer not to say", value: "4"},
          ]
        }
      />

      <PDRadioScale
        name={"GH27CurrentBiologicalSex"}
        caption={"What is your current biological sex?"}
        value={formData.GH27CurrentBiologicalSex}
        options={
          [
            { label: "Male", value: "1"},
            { label: "Female", value: "2"},
            { label: "Intersex", value: "3"},
            { label: "Prefer not to say", value: "4"},
          ]
        }
      />
      
      {/* <PDCheckboxGroup
        name={"GH28GenderIdentity"}
        caption={"What is your gender identity? (Select all that apply)"}
        options={[
          { name: "GH28Man", label: "Man"},
          { name: "GH28Woman", label: "Woman"},
          { name: "GH28NonBinary", label: "Non-binary"},
          { name: "GH28NotListed", label: "Not listed"},
          { name: "GH28DoNotSay", label: "Prefer not to say"}
        ]}
      />

      <PDCheckboxGroup
        name={"GH29Race"}
        caption={"What is your race? (Select all that apply)"}
        options={[
          { name: "GH29IndianNative", label: "American Indian or Alaska Native"},
          { name: "GH29BlackAfricanDescent", label: "Black or African descent (e.g., African American, Afro-Caribbean, Sub-Saharan African)"},
          { name: "GH29EastAsian", label: "East Asian (e.g., Chinese, Japanese, Korean)"},
          { name: "GH29SouthAsian", label: "South Asian (e.g., Indian, Pakistani, Bangladeshi, Sri Lankan, Nepali)"},
          { name: "GH29SoutheastAsian", label: "Southeast Asian (e.g., Filipino, Vietnamese, Thai, Indonesian, Malaysian)"},
          { name: "GH29CentralAsian", label: "Central Asian (e.g., Kazakh, Uzbek, Turkmen, Tajik, Kyrgyz)"},
          { name: "GH29MiddleEasternNorthAfrican", label: "Middle Eastern or North African (e.g., Arab, Persian, Kurdish, Berber, Egyptian)"},
          { name: "GH29NativeHawaiianPacificIslander", label: "Native Hawaiian or Other Pacific Islander"},
          { name: "GH29WhiteEuropeanDescent", label: "White or European descent (e.g., European, Australian, Russian)"},
          { name: "GH29LatinAmericanHispanic", label: "Latin American or Hispanic (e.g., Mexican, Brazilian, Colombian, Puerto Rican)"},
          { name: "GH29Carribean", label: "Caribbean (non-Hispanic)"},
          { name: "GH29AnotherRaceEthnicBackground", label: "Another race or ethnic background"},
          { name: "GH29DoNotSay", label: "Prefer not to say"}
        ]}
      /> */}

      <PDRadioScale
        name={"GH30HispanicLatinoOrigin"}
        caption={"Are you of Hispanic or Latino origin?"}
        value={formData.GH30HispanicLatinoOrigin}
        options={
          [
            { label: "Yes", value: "1"},
            { label: "No", value: "2"},
            { label: "Prefer not to say", value: "3"},
          ]
        }
      />

</>);
};

export default GamingHabitsForm;