import React, { useState } from "react";
import "./Login.css";


const options = [
    { value: "0", name: "C++" },
    { value: "1", name: "Java" },
    { value: "2", name: "Javascript" },
    { value: "3", name: "Python" },
  ];
  // -----------------------------------------------------------------
const options1 = [
    { value: "0", name: "신데렐라" },
    { value: "1", name: "어린왕자" },
    { value: "2", name: "토끼" },
];

export const Select = ({options, ...props}) => {
    const [selectValue, setSelectValue] = useState(props.initValue);

    return (
        <select
        //   name={props.name}
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          onBlur={() => {
            props.getResult({ [props.name]: selectValue});
          }}
        >
            {options.map((option) => {
                return (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
};

export const Select1 = ({options1, ...props}) => {
    const [selectValue, setSelectValue] = useState(props.initValue);

    return (
        <select
        //   name={props.name}
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          onBlur={() => {
            props.getResult({ [props.name]: selectValue});
          }}
        >
            {options1.map((option) => {
                return (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
};



function Register(){
  const [inputs, setInputs] = useState({
    user_id: "",
    password: "",
    language: "",
    teller: "",
  });

  const getResult = (obj) => {
    const key = Object.keys(obj);
    setInputs({...inputs, [key]: obj[key]});
  };

  const {user_id, password, language}= inputs;

  function onChange(e) {
    const {value, name} = e.target;
    setInputs({
        ...inputs,
        [name]: value,
      });
  };

  const onClick = () => {
    console.log(inputs);
  };

  const renderForm = (
    <div className="login_form">
      <form>
        <div className="login_input-container">
          <label>User ID</label>
          <input type="text" name="user_id" onChange={onChange} value={user_id} required></input>
        </div>
        <div className="login_input-container">
          <label>Password </label>
          <input type="password" name="password" onChange={onChange} value={password} required></input>
        </div>
        <div className="login_input-container">

        </div>
        <div className="login_input-container">
        <label>Select Language</label>
            <Select
                name="language"
                options={options}
                initValue={options[0]}
                getResult={getResult}
            />
        <label>Select Teller</label>
            <Select
                name="teller"
                options={options1}
                initValue={options1[0]}
                getResult={getResult}
            />
        </div>
      </form>
      <br></br>
      <div className="login_input-container">
            <button onClick={onClick}>Create</button>
      </div>
    </div>
  );

  return (
    <div className="login_app">
      <div className="login-form">
        <div className="login_title">Sign Up</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Register;