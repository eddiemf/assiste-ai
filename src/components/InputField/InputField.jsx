// @flow
import React from 'react';

type Props = {
  [string]: any,
  label: string,
  id: string,
};

const InputField = ({ label, id, ...props }: Props) => (
  <div>
    {label ? <label htmlFor={id}>{label}</label> : null}
    <input {...props} />
  </div>
);

export default InputField;
