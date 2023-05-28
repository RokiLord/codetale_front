import React from 'react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../component/Navbar";
import "./Curriculum.css";

function Curriculum() {

    const getCheckboxValue = (event) => {
        let result = '';
        if (event.target.checked) {
            result = event.target.value;
        } else {
            result = '';
        }
        console.log(result);
    };

    const navigate = useNavigate();

    const moveToWorkbook = () => {
        navigate("/content");
    };

    const data = {
        num: 0
    }


    return (
        <Fragment className="curriculum_backgroud">

            <Navbar />


            <div className="support-grid"></div>

            <div className="band">
                <div className="title">
                    <a className="card">
                        <article>
                            <h1>Curriculum</h1>
                        </article>
                    </a>
                </div>
                <div className="item-1">
                    <a className="card">
                        <div className="thumb" ></div>
                        <article>
                            <h1>Week1</h1>
                            Ohyeah
                            <button

                                onClick={() => {
                                    navigate("/content", { state: { num: 1 } });
                                }}
                                style={{ marginTop: "1rem" }}> chapter 1 </button>
                            <button onClick={() => {
                                navigate("/content", { state: { num: 2 } });
                            }} style={{ marginTop: "1rem" }}> chapter 2 </button>
                            <button onClick={() => {
                                navigate("/content", { state: { num: 2 } });
                            }} style={{ marginTop: "1rem" }}> chapter 3 </button>
                            <div className="checkbox" style={{ marginTop: "1rem" }}>
                                check
                                <input type="checkbox" name="input_check" value="4" id="check" onChange={getCheckboxValue} />
                            </div>
                        </article>

                    </a>
                </div>
                <div className="item-2">
                    <a className="card">
                        <div className="thumb" ></div>
                        <article>
                            <h1>Week2</h1>
                            Ohyeah
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 4 } });
                                }} style={{ marginTop: "1rem" }}> chapter 1 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 5 } });
                                }} style={{ marginTop: "1rem" }}> chapter 2 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 6 } });
                                }} style={{ marginTop: "1rem" }}> chapter 3 </button>
                            <div className="checkbox" style={{ marginTop: "1rem" }}>
                                check
                                <input type="checkbox" name="input_check" value="4" id="check" onChange={getCheckboxValue} />
                            </div>
                        </article>
                    </a>
                </div>
                <div className="item-3">
                    <a className="card">
                        <div className="thumb" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)" }}></div>
                        <article>
                            <h1>Week3</h1>
                            Ohyeah
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 7 } });
                                }} style={{ marginTop: "1rem" }}> chapter 1 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 8 } });
                                }} style={{ marginTop: "1rem" }}> chapter 2 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 9 } });
                                }} style={{ marginTop: "1rem" }}> chapter 3 </button>
                            <div className="checkbox" style={{ marginTop: "1rem" }}>
                                check
                                <input type="checkbox" name="input_check" value="4" id="check" onChange={getCheckboxValue} />
                            </div>

                        </article>
                    </a>
                </div>
                <div className="item-4">
                    <a className="card">
                        <div className="thumb" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);" }}></div>
                        <article>
                            <h1>Week4</h1>
                            Ohyeah
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 10 } });
                                }} style={{ marginTop: "1rem" }}> chapter 1 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 11 } });
                                }} style={{ marginTop: "1rem" }}> chapter 2 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 12 } });
                                }} style={{ marginTop: "1rem" }}> chapter 3 </button>
                            <div className="checkbox" style={{ marginTop: "1rem" }}>
                                check
                                <input type="checkbox" name="input_check" value="4" id="check" onChange={getCheckboxValue} />
                            </div>
                        </article>
                    </a>
                </div>
                <div className="item-5">
                    <a className="card">
                        <div className="thumb" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)" }}></div>
                        <article>
                            <h1>Week5</h1>
                            Ohyeah
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 13 } });
                                }} style={{ marginTop: "1rem" }}> chapter 1 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 14 } });
                                }} style={{ marginTop: "1rem" }}> chapter 2 </button>
                            <button onClick={() => {
                                    navigate("/content", { state: { num: 15 } });
                                }} style={{ marginTop: "1rem" }}> chapter 3 </button>
                            <div className="checkbox" style={{ marginTop: "1rem" }}>
                                check
                                <input type="checkbox" name="input_check" value="4" id="check" onChange={getCheckboxValue} />
                            </div>
                        </article>
                    </a>
                </div>
            </div>

        </Fragment>
    );
}

export default Curriculum;