import "../router/testcomponent.style.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import GonogoTest from "../gonogo-test/starttest.component";

const ButtonGonogoTest = (props) => {
  useEffect(() => {
    changechar();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let input = {
    t: 1000,
    isi: 1000,
    target: "پ",
    s: props.settingGonogo[0].s,
    mode: "demo",
  };
  const changechar = () => {
    props.settingGonogo[0].s.map((item, index) => {
      if (item === 0) {
        props.settingGonogo[0].s.splice(index, 1, "ث");
      }
      if (item === 1) {
        props.settingGonogo[0].s.splice(index, 1, "ب");
      }
      if (item === 2) {
        props.settingGonogo[0].s.splice(index, 1, "ت");
      }
      if (item === 100) {
        props.settingGonogo[0].s.splice(index, 1, "پ");
      }
    });
    props.settingGonogo[0].s.push(null);
  };

  const getSettingFromUser = (event) => {
    event.preventDefault();
    const Elements = event.target.elements;
    for (const iterator of Elements) {
      if (iterator.value !== "" && iterator.name !== "target") {
        input[iterator.name] = parseInt(iterator.value);
      }
      if (iterator.value !== "" && iterator.name === "target") {
        input[iterator.name] = iterator.value;
      }
      if (document.getElementById("radio1").checked) {
        let radio_value1 = document.getElementById("radio1").value;
        input.mode = radio_value1;
      }
      if (document.getElementById("radio2").checked) {
        let radio_value2 = document.getElementById("radio2").value;
        input.mode = radio_value2;
      }
    }
    props.settingGonogo.pop();
      let tempSetting = props.settingGonogo;
      tempSetting.push(input);
      props.setSettingGonogo(tempSetting);
  };
  const StartTest = () => {
    props.setShowComponent(true);
    props.setStartGame(true);
  };
  return (
    <>
      {props.startGame === false ? (
        <>
          <section className="sectionStartTest">
            <div className="container">
              <div className="row featureRow">
                <div className="offset-2 col-8">
                  <div className="jumbotron featurejumbotron fontfa">
                    <div className="container">
                      <Button
                        variant="primary"
                        className=" offset-3 col-6 py-4 mt-5 px-1"
                        onClick={handleShow}
                      >
                        تنظیمات
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        animation={true}
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body className="fontfa">
                          <Form onSubmit={getSettingFromUser}>
                            <Form.Group controlId="formBasicNumberOfElement">
                              <Form.Label>تعداد مجموعه محرک‌ها</Form.Label>
                              <Form.Control
                                type="number"
                                min="0"
                                name="numberOfArraySample"
                                defaultValue=""
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicTimeShow">
                              <Form.Label> زمان نمایش محرک‌ها</Form.Label>
                              <InputGroup className="mb-3 ">
                                <Form.Control
                                  type="number"
                                  min="0"
                                  name="t"
                                  placeholder="به عنوان مثال هزار میلی‌ثانیه"
                                  className="textModal"
                                  defaultValue={props.settingGonogo[0].t}
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text>ms</InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicTimeRest">
                              <Form.Label> فاصله بین محرک‌ها</Form.Label>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  type="number"
                                  min="0"
                                  name="isi"
                                  placeholder="به عنوان مثال هزار میلی‌ثانیه"
                                  className="textModal"
                                  defaultValue={props.settingGonogo[0].isi}
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text>ms</InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicSelectTarget">
                              <Form.Label> انتخاب کاراکتر</Form.Label>
                              <Form.Control
                                type="text"
                                name="target"
                                defaultValue={props.settingGonogo[0].target}
                              />
                              <Form.Text className="text-muted">
                                .از بین حروف الفبا، یک حرف را وارد کنید
                              </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formSelect">
                              <Form.Label> انتخاب حالت:</Form.Label>
                              {["radio"].map((type) => (
                                <div
                                  key={`default-${type}`}
                                  className="mb-3 mx-2"
                                  style={{ textAlign: "right" }}
                                >
                                  <Form.Check
                                    name="mode"
                                    value="demo"
                                    label="demo"
                                    type={type}
                                    id="radio1"
                                    defaultChecked={props.settingGonogo[0].mode === "demo"}
                                  />
                                  <Form.Check
                                    name="mode"
                                    value="test"
                                    type={type}
                                    label="test"
                                    id="radio2"
                                  />
                                </div>
                              ))}
                            </Form.Group>
                            <hr />
                            <Button variant="secondary" onClick={handleClose}>
                              بستن
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={handleClose}
                              className="ml-3"
                            >
                              ذخیره
                            </Button>
                          </Form>
                        </Modal.Body>
                      </Modal>
                      <div className="fontfa">
                        <div className="text">
                          <button
                            className="btn btn-primary col-md-6 col-6 py-4 mb-5"
                            type="button"
                            id="button"
                          >
                            {" "}
                            <h6 className="" onClick={StartTest}>
                              شروع آزمون
                            </h6>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : props.showComponent === true && props.startGame === true ? (
        <>
          <GonogoTest
            t={props.settingGonogo[0].t}
            isi={props.settingGonogo[0].isi}
            target={props.settingGonogo[0].target}
            s={props.settingGonogo[0].s}
            mode={props.settingGonogo[0].mode}
          />
        </>
      ) : null}
    </>
  );
};
export default ButtonGonogoTest;
