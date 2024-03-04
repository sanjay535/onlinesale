import { useState } from 'react';
import { FIELD_TYPES, TEXT_IDS } from './constant';
import { InputText } from './components/InputText';
import Checkbox from './components/Checkbox';
import TextArea from './components/TextArea';
import RadioButton from './components/RadioButton';
import DropDown from './components/DropDown';
import { generateUniqueId } from './util';

function App() {
  const [choosenField, setChoosenField] = useState(TEXT_IDS.TEXT_INPUT);
  const [fieldsConfig, setFieldsConfig] = useState([]);
  const [fieldLabel, setFieldLabel] = useState('');
  const [radioBtnOptions, setRadioBtnOptins] = useState([{ id: generateUniqueId(), value: '' }]);
  const [dropDowOptions, setDropDownOptins] = useState([{ id: generateUniqueId(), value: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let fieldObject;

    switch (choosenField) {
      case TEXT_IDS.TEXT_INPUT:
        fieldObject = {
          id: generateUniqueId(),
          label: fieldLabel,
          type: TEXT_IDS.TEXT_INPUT
        };
        setFieldsConfig([...fieldsConfig, fieldObject]);
        break;

      case TEXT_IDS.TEXT_AREA:
        fieldObject = {
          id: generateUniqueId(),
          label: fieldLabel,
          type: TEXT_IDS.TEXT_AREA
        };
        setFieldsConfig([...fieldsConfig, fieldObject]);
        break;

      case TEXT_IDS.DROPDOWN:
        fieldObject = {
          id: generateUniqueId(),
          label: fieldLabel,
          type: TEXT_IDS.DROPDOWN,
          options: dropDowOptions.map((dropdown) => dropdown)
        };
        setFieldsConfig([...fieldsConfig, fieldObject]);
        break;
      case TEXT_IDS.CHECKBOX:
        fieldObject = {
          id: generateUniqueId(),
          label: fieldLabel,
          type: TEXT_IDS.CHECKBOX
        };
        setFieldsConfig([...fieldsConfig, fieldObject]);
        break;
      case TEXT_IDS.RADIO_BUTTON:
        fieldObject = {
          id: generateUniqueId(),
          label: fieldLabel,
          type: TEXT_IDS.RADIO_BUTTON,
          options: radioBtnOptions.map((radioBtn) => radioBtn)
        };
        setFieldsConfig([...fieldsConfig, fieldObject]);
        break;
      default:
        break;
    }
  };

  const chooseComponent = (field) => {
    console.log(field);
    switch (field.type) {
      case TEXT_IDS.TEXT_INPUT:
        return <InputText handleValue={handleValue} label={field.label} key={field.id} />;
      case TEXT_IDS.CHECKBOX:
        return <Checkbox handleValue={handleValue} label={field.label} key={field.id} />;
      case TEXT_IDS.TEXT_AREA:
        return <TextArea handleValue={handleValue} label={field.label} key={field.id} />;
      case TEXT_IDS.RADIO_BUTTON:
        return (
          <RadioButton
            label={field.label}
            groupId={field.id}
            handleValue={handleValue}
            key={field.id}
            radioBtnConfig={field.options}
          />
        );
      case TEXT_IDS.DROPDOWN:
        return (
          <DropDown
            label={field.label}
            groupId={field.id}
            handleValue={handleValue}
            key={field.id}
            dropDownOptions={field.options}
          />
        );

      default:
        break;
    }
  };
  const handleChoosenField = (SelectedValue) => {
    // reset field
    setDropDownOptins([{ id: generateUniqueId(), value: '' }]);
    setRadioBtnOptins([{ id: generateUniqueId(), value: '' }]);
    setChoosenField(SelectedValue);
  };
  const handleDropDownOptionChange = (value, id) => {
    setDropDownOptins(
      dropDowOptions.map((dropDown) =>
        dropDown.id === id ? { id: dropDown.id, value: value } : dropDown
      )
    );
  };
  const handleRadioBtnOptionChange = (value, id) => {
    setRadioBtnOptins(
      radioBtnOptions.map((radioBtn) =>
        radioBtn.id === id ? { id: radioBtn.id, value: value } : radioBtn
      )
    );
  };
  const handleValue = (value) => {
    // console.log(value)
  };

  const handleDropDownAddOption = () => {
    setDropDownOptins([...dropDowOptions, { id: generateUniqueId(), value: '' }]);
  };
  const handleDropDownRemoveOption = (id) => {
    if (dropDowOptions.length === 1) return;
    setDropDownOptins(dropDowOptions.filter((dropdown) => dropdown.id !== id));
  };
  const handleRadioBtnRemoveOption = (id) => {
    if (radioBtnOptions.length === 1) return;
    setRadioBtnOptins(radioBtnOptions.filter((radioBtn) => radioBtn.id !== id));
  };
  const handleRadioBtnAddOption = () => {
    setRadioBtnOptins([...radioBtnOptions, { id: generateUniqueId(), value: '' }]);
  };
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Create Form</h1>
      <div className="leftRight">
        <form className="left" onSubmit={handleSubmit}>
          <div>
            <label className="label">Select Field</label>
            <select
              value={choosenField}
              onChange={(e) => {
                handleChoosenField(e.target.value);
              }}
              className="select"
            >
              {FIELD_TYPES.map((field) => (
                <option key={field.id} value={field.id}>
                  {field.type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Enter label</label>
            <input
              className="inputField"
              type="text"
              value={fieldLabel}
              onChange={(e) => setFieldLabel(e.target.value)}
              required
            />
          </div>
          {choosenField === TEXT_IDS.DROPDOWN ? (
            <div>
              {dropDowOptions.map((dropdown, i) => (
                <div key={dropdown.id}>
                  <label className="label">Option-{i + 1}</label>
                  <input
                    required
                    className="inputField"
                    type="text"
                    placeholder="Enter option"
                    value={dropdown.value}
                    onChange={(e) => handleDropDownOptionChange(e.target.value, dropdown.id)}
                  />
                  <button type="button" onClick={() => handleDropDownRemoveOption(dropdown.id)}>
                    Remove Option
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleDropDownAddOption}>
                Add Option
              </button>
            </div>
          ) : null}
          {choosenField === TEXT_IDS.RADIO_BUTTON ? (
            <div>
              {radioBtnOptions.map((radioBtn, i) => (
                <div key={radioBtn.id}>
                  <label className="label">Option-{i + 1}</label>
                  <input
                    required
                    className="inputField"
                    type="text"
                    placeholder="Enter option"
                    value={radioBtn.value}
                    onChange={(e) => handleRadioBtnOptionChange(e.target.value, radioBtn.id)}
                  />
                  <button type="button" onClick={() => handleRadioBtnRemoveOption(radioBtn.id)}>
                    Remove Option
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleRadioBtnAddOption}>
                Add Option
              </button>
            </div>
          ) : null}
          <button className="addField" type="submit">
            Add Field
          </button>
        </form>
        <div className="right">
          {/* <InputText handleValue={handleValue} label={"Name"} />
          <Checkbox handleValue={handleValue} label={'XYZ'} />
          <TextArea handleValue={handleValue} label={'details'} />
          <RadioButton groupId={"biiju"} handleValue={handleValue} radioBtnConfig={RADIO_BTN_CONFIG} />
          <DropDown label={'GENDER'} handleValue={handleValue} dropDownOptions={DROPDOWN_OPTION} /> */}
          {fieldsConfig.map((field) => chooseComponent(field))}
        </div>
      </div>
    </div>
  );
}

export default App;
