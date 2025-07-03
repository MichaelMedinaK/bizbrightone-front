import React from "react";
import { InputFieldProps } from "../../types/inputFieldProps";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  required = false,
}) => (
  <div style={{ marginBottom: 12 }}>
    <label>
      {label}
      <input
        style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </label>
  </div>
);

export default InputField;
