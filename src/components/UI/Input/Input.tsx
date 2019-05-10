import * as React from 'react';

import './Input.css';

interface Props {
  inpPlaceholder: string;
  inpType: string;
  inpValue: string;
  onChange: () => void;
}

const Input: React.FC<Props> = props => {
  return (
    <input
      className="input"
      type={props.inpType}
      placeholder={props.inpPlaceholder}
      value={props.inpValue}
      onChange={props.onChange}
    />
  );
};

export default Input;
