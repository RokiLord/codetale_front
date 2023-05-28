import React, { Fragment, useState } from "react";
import "./Login.css";
import Navbar from "../component/Navbar";
import axios from "axios";


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

  const {user_id, password, language, teller}= inputs;

  function onChange(e) {
    const {value, name} = e.target;
    setInputs({
        ...inputs,
        [name]: value,
      });
  };

  function onClick(e) {
    e.preventDefault();
    console.log(user_id);
    console.log(password);
    console.log(language);
    console.log(teller);
    axios
      .post("http://localhost:8080/users", { //spring에서도 @Getmapping("/users") 통해 설정
        userId: user_id,
        password: password,
        language: language,
        teller: teller,
      }).then((res) => { //데이터 전송 성공 시 response 받음
        console.log("데이터 전송 성공");
      })
      .catch(function (err) { //데이터 전송 실패 시 error 받음
        console.log("데이터 전송 실패 :  " + err);
      });
  }

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
    <Fragment>
    <Navbar />
    <div className="login_app">
      <div className="login-form">
        <div className="login_title">Sign Up</div>
        {renderForm}
      </div>
    </div>
    </Fragment>
  );
}

export default Register;