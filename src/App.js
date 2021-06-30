import React, { useState } from 'react'

import {
  TextInput,
  PasswordInput,
  NumberInput,
  DateInput,
  SelectInput,
  CheckboxInput,
  RadioInput,
  ToggleInput,
  RangeInput
} from 'Components'

import 'App.css'

const App = () => {
  const [inputs, setInputs] = useState({
    text: '',
    password: '',
    number: '',
    date: '',
    select: '',
    checkbox: false,
    radio: false,
    toggle: false,
    range: '1500'
  })

  const handleChange = (name, value) => setInputs({ ...inputs, [name]: value })

  return (
    <div className="wrapper">

      <div className="grid">
        <div>Text</div>
        <div>
          <TextInput
            value={inputs.text}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="text"
          />
        </div>
        <div><pre>{inputs.text || '/'}</pre></div>
      </div>

      <div className="grid">
        <div>Password</div>
        <div>
          <PasswordInput
            value={inputs.password}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="password"
          />
        </div>
        <div><pre>{inputs.password || '/'}</pre></div>
      </div>

      <div className="grid">
        <div>Number</div>
        <div>
          <NumberInput
            value={inputs.number}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="number"
          />
        </div>
        <div><pre>{inputs.number || '/'}</pre></div>
      </div>

      <div className="grid">
        <div>Date</div>
        <div>
          <DateInput
            value={inputs.date}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="date"
          />
        </div>
        <div><pre>{inputs.date || '/'}</pre></div>
      </div>

      <div className="grid">
        <div>Select</div>
        <div>
          <SelectInput
            value={inputs.select}
            onChange={(name, value) => handleChange(name, value)}
            items={['Please select', 'Value 1', 'Value 2', 'Value 3']}
            label="Label"
            name="select"
          />
        </div>
        <div><pre>{inputs.select || '/'}</pre></div>
      </div>

      <div className="grid">
        <div>Checkbox</div>
        <div>
          <CheckboxInput
            value={inputs.checkbox}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="checkbox"
          />
        </div>
        <div><pre>{inputs.checkbox.toString()}</pre></div>
      </div>

      <div className="grid">
        <div>Radio</div>
        <div>
          <RadioInput
            value={inputs.radio}
            onChange={(name, value) => handleChange(name, value)}
            label="Label"
            name="radio"
          />
        </div>
        <div><pre>{inputs.radio.toString()}</pre></div>
      </div>

      <div className="grid">
        <div>Toggle</div>
        <div>
          <ToggleInput
            value={inputs.toggle}
            onChange={(name, value) => handleChange(name, value)}
            label={['Left', 'Right']}
            name="toggle"
          />
        </div>
        <div><pre>{inputs.toggle.toString()}</pre></div>
      </div>

      <div className="grid">
        <div>Range</div>
        <div>
          <RangeInput
            value={inputs.range}
            onChange={(name, value) => handleChange(name, value)}
            min="1000"
            max="2000"
            name="range"
          />
        </div>
        <div><pre>{inputs.range}</pre></div>
      </div>

    </div>
  )
}

export default App
