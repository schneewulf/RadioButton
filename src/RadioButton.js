//@flow
import React from 'react';

type Props = {
  label: string,
  name: string,
};

export default function RadioButton(props: Props) {
  let {label, name} = props;

  return (
    <p>
      <input type="radio" name={name} />
      {label}
    </p>
  );
}
