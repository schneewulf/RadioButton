//@flow
import React, {Component} from 'react';

type Props = {
  name: string,
  children: mixed,
};

class RadioGroup extends Component<Props> {
  render() {
    let {name} = this.props;
    return (
      <div>
        <h1>{name}</h1>
        {React.Children.map(this.props.children, (radiobutton) =>
          React.cloneElement(radiobutton, {name: name}),
        )}
      </div>
    );
  }
}

export default RadioGroup;
