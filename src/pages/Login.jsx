import React, { Fragment } from 'react';
import "./Login.css"
import $ from 'jquery';

function Login(props) {







  return (
    <Fragment className="fragbody">

      <div class="main_view">
        <div class="login_and_sign_up">
          <div class="top_box" id="login">Login</div>
          <div class="not_selected_box" id="sign_up">Sign Up</div>
        </div>
        <div class="log_in_view">
          <div class="label">Login</div>
          <div class="label2" id="label2">Enter user name and passowords</div>
          <div class="submit_form">
            <div class="form_top">Email</div>
            <div class="new_input">
              <input class="user_input" id="login_email" placeholder="Email" />
            </div>
          </div>
          <div class="submit_form">
            <div class="form_top">Password</div>
            <div class="new_input">
              <input class="user_input" id="login_password" type="password" placeholder="Password" />
            </div>

          </div>
          <div class="login_button" id="botton_log_in">Login</div>
        </div>

        <div class="sign_up_view">
          <div class="label">Sign up</div>

          <div class="submit_form">
            <div class="form_top"> User name</div>
            <div class="new_input">
              <input class="user_input" id="first" placeholder="User name" />
            </div>
          </div>
          <div class="submit_form">
            <div class="form_top"> Email ID</div>
            <div class="new_input">
              <input class="user_input" id="email" placeholder="Please keep the email format" />
            </div>
          </div>
          <div class="submit_form">
            <div class="form_top">Password</div>
            <div class="new_input">
              <input class="user_input" type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <div class="submit_form">
            <div class="form_top">Confirm password</div>
            <div class="new_input">
              <input class="user_input" type="password" id="confirm_password" placeholder="Confirm password" />
            </div>
          </div>
          <div class="gender">
            <div class="gender_form" >
              <input type="radio" id="male" /> Student
            </div>
            <div class="gender_form" >
              <input type="radio" id="female" /> Teacher
            </div>
          </div>

          <div class="expenses-filter">
            <div className="expenses-filter__control">
              <label>Select Language</label>
              <select >
                <option value="C++" >C++</option>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
              </select>
            </div>
          </div>



          <div class="login_button" id="bottom_sign_up">Sign Up</div>
        </div>

        <div class="end_sign_up_view">
          <div class="new_label">You are signed up.</div>
        </div>

        <div class="end_login_view">
          <div class="new_label">You are logged in.</div>
        </div>
      </div>
    </Fragment >
  );


}







export default Login;
