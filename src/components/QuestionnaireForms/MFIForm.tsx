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
        name={"MFI2PhysicallyDoLittle"}
        caption={"Physically I feel only able to do a little."}
        value={formData.MFI2PhysicallyDoLittle}
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
        name={"MFI3VeryActive"}
        caption={"I feel very active."}
        value={formData.MFI3VeryActive}
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
        name={"MFI4NiceThings"}
        caption={"I feel like doing all sorts of nice things."}
        value={formData.MFI4NiceThings}
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
        name={"MFI5Tired"}
        caption={"I feel tired."}
        value={formData.MFI5Tired}
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
        name={"MFI6DoLot"}
        caption={"I think I do a lot in a day."}
        value={formData.MFI6DoLot}
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
        name={"MFI7KeepThoughts"}
        caption={"When I am doing something, I can keep my thoughts on it."}
        value={formData.MFI7KeepThoughts}
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
        name={"MFI8TakeOnLot"}
        caption={"Physically I can take on a lot."}
        value={formData.MFI8TakeOnLot}
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
        name={"MFI9DreadDoingThings"}
        caption={"I dread having to do things."}
        value={formData.MFI9DreadDoingThings}
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
        name={"MFI10DoLittle"}
        caption={"I think I do very little in a day."}
        value={formData.MFI10DoLittle}
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
        name={"MFI11ConcentrateWell"}
        caption={"I can concentrate well."}
        value={formData.MFI11ConcentrateWell}
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
        name={"MFI12Rested"}
        caption={"I am rested."}
        value={formData.MFI12Rested}
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
        name={"MFI3EffortToConcentrate"}
        caption={"It takes a lot of effort to concentrate on things."}
        value={formData.MFI3EffortToConcentrate}
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
        name={"MFI14BadCondition"}
        caption={"Physically I feel I am in a bad condition."}
        value={formData.MFI14BadCondition}
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
        name={"MFI15LotsOfPlans"}
        caption={"I have lots of plans."}
        value={formData.MFI15LotsOfPlans}
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
        name={"MFI16TireEasily"}
        caption={"I tire easily."}
        value={formData.MFI16TireEasily}
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
        name={"MFI17GetLittleDone"}
        caption={"I get little done."}
        value={formData.MFI17GetLittleDone}
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
        name={"MFI18DoingAnything"}
        caption={"I don’t feel like doing anything."}
        value={formData.MFI18DoingAnything}
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
        name={"MFI19ThoughtsWander"}
        caption={"My thoughts easily wander."}
        value={formData.MFI19ThoughtsWander}
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
        name={"MFI20ExcellentCondition"}
        caption={"Physically I feel I am in an excellent condition."}
        value={formData.MFI20ExcellentCondition}
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

</>)
};

export default MFIForm;
