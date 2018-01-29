//@flow

import React from 'react';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';

export default function App() {
  return (
    <div>
      <RadioGroup name="favouriteColor">
        <RadioButton label="Blue" name="" />
        <RadioButton label="Green" name="" />
        <RadioButton label="Red" name="" />
      </RadioGroup>
      <RadioGroup name="favouriteVehicle">
        <RadioButton label="Motorcycle" name="" />
        <RadioButton label="Car" name="" />
        <RadioButton label="Red" name="" />
      </RadioGroup>
    </div>
  );
}
