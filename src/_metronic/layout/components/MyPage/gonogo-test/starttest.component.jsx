import React, { useState, useEffect, useRef } from "react";
import "../router/testcomponent.style.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const GonogoTest = (props) => {
  const history = useHistory();
  const refResponse = useRef([]);
  const refSumResponseTime = useRef(0);
  const refAverageCorrectResponseTime = useRef(0);
  const refTargets = useRef([]);
  const refResults = useRef([]);
  const refReactions = useRef([]);
  const [currentTarget, setCurrentTarget] = useState("");
  const [spaces, setSpaces] = useState([]);
  const [feedback, setFeedback] = useState("");
  const refCount = useRef(-1);
  const refStartTrial = useRef(null);
  const [totalInCorrect, setTotalInCorrect] = useState([]);
  const [totalCorrect, setTotalCorrect] = useState([]);
  const [correctdeterrent, setCorrectDeterrent] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [ommition, setOmmition] = useState([]);
  const [commition, setCommition] = useState([]);
  const refStetimeFaideShow = useRef();
  const refStetimeShow = useRef();
  useEffect(() => {
    window.addEventListener("keypress", startBySpace);
  }, []);

  useEffect(() => {
    updateValueTest();
    computingTotalCorrect();
  }, []);
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
  }, []);
  const startBySpace = (event) => {
    if (!event || event.code === "Space") {
      start(refCount.current);
    }
  };

  const updateValueTest = () => {
    for (const iterator of props.s) {
      refResponse.current.push(props.t + props.isi);
      refResults.current.push(false);
      refReactions.current.push(false);
      iterator === props.target
        ? refTargets.current.push(1)
        : refTargets.current.push(0);
    }
  };

  const computingTotalCorrect = () => {
    let idx = props.s.indexOf(props.target);
    while (idx != -1) {
      let tempTotalInCorrect = totalInCorrect;
      tempTotalInCorrect.push(idx);
      idx = props.s.indexOf(props.target, idx + 1);
      setTotalInCorrect(tempTotalInCorrect);
    }
  };

  const start = (cnt) => {
   if (refCount.current===-1) {
         console.log("fnkj");
   window.removeEventListener("keypress", startBySpace);
    }
    setFeedback("");
    refCount.current = cnt;
    refStartTrial.current = Date.now();
    setCurrentTarget(props.s[cnt]);
    refStetimeFaideShow.current = setTimeout(() => {
      setCurrentTarget("");
    }, props.t);
    if (cnt < props.s.length - 1) {
      refStetimeShow.current = setTimeout(() => {
        start(cnt + 1);
      }, props.t + props.isi);
    } else {
      showResult();
      window.removeEventListener("keypress", handleKeyPress);
    }
  };
  const handleEvent = () => {
    let timeSpace = Date.now();
    if (refResponse.current[refCount.current] === props.t + props.isi) {
      let tempSpaces = spaces;
      tempSpaces.push(timeSpace);
      setSpaces(tempSpaces);
      refResponse.current[refCount.current] = timeSpace - refStartTrial.current;
      if (refResponse.current[refCount.current] < props.t) {
        clearTimeout(refStetimeFaideShow.current);
        clearTimeout(refStetimeShow.current);
        setCurrentTarget("");
        if (refCount.current <= props.s.length) {
          setTimeout(() => {
            start(refCount.current + 1);
          }, props.isi);
        }
        if (props.mode === "demo") {
          handleFeedback();
        }
      } else {
        if (props.mode === "demo") {
          handleFeedback();
        }
      }
    }
    refReactions.current[refCount.current] = true;
  };
  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      handleEvent();
    }
  };
  const handleClickButton = () => {
    handleEvent();
  };
  const handleFeedback = () => {
    if (props.s[refCount.current] !== props.target) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  const showResult = () => {
    for (let index = 0; index < props.s.length; index++) {
      if (
        refTargets.current[index] === 0 &&
        refReactions.current[index] === true &&
        props.s[index] !== null
      ) {
        refResults.current[index] = "A";
        let tempCorrect = correct;
        tempCorrect.push(index);
        setCorrect(tempCorrect);
      }
      if (
        refTargets.current[index] === 1 &&
        refReactions.current[index] === false &&
        props.s[index] !== null
      ) {
        refResults.current[index] = "B";
      }
      if (
        refTargets.current[index] === 1 &&
        refReactions.current[index] === true &&
        props.s[index] !== null
      ) {
        refResults.current[index] = "C";
      }
      if (
        refTargets.current[index] === 0 &&
        refReactions.current[index] === false &&
        props.s[index] !== null
      ) {
        refResults.current[index] = "D";
      }
    }
    for (let index = 0; index < refResults.current.length; index++) {
      if (refResults.current[index] === "B" && props.s[index] !== null) {
        let tempCorrectDeterrent = correctdeterrent;
        tempCorrectDeterrent.push(index);
        setCorrectDeterrent(tempCorrectDeterrent);
      }
      if (refResults.current[index] === "D" && props.s[index] !== null) {
        let tempOmmition = ommition;
        tempOmmition.push(index);
        setOmmition(tempOmmition);
      }
      if (refResults.current[index] === "C" && props.s[index] !== null) {
        let tempCommition = commition;
        tempCommition.push(index);
        setCommition(tempCommition);
      }
      if (
        refResults.current[index] === "A" ||
        (refResults.current[index] === "D" && props.s[index] !== null)
      ) {
        let tempTotalCorrect = totalCorrect;
        tempTotalCorrect.push(index);
        setTotalCorrect(tempTotalCorrect);
      }
    }
    let SumCorrectResponseTime = correct.map((item) => {
      return refResponse.current[item];
    });
    refSumResponseTime.current = SumCorrectResponseTime.reduce(
      (a, b) => a + b,
      0
    );
    if (correct.length !== 0) {
      refAverageCorrectResponseTime.current =
        refSumResponseTime.current / correct.length;
    }
  };

  function handleClick() {
    props.setStartGame(false);
  }

  return (
    <>
      {refCount.current === -1 ? (
        <>
          <div className="container">
            <div className="row  featureRow d-flex flex-column align-items-center">
              <div className="col-8 mt-5 d-flex justify-content-center">
                <div className="featurejumbotron">
                  <div className="container">
                    <div className="fontfa">
                      <p
                        className="text col-12 d-flex justify-content-center contentInDesktop"
                        style={{
                          marginTop: "15rem",
                        }}
                      >
                        ???? ?????? ?????????? ???????? ???? ???????? ????????
                      </p>
                      <Button
                        id="buttons"
                        variant="primary"
                        className="col-12 px-1 py-4 mt-5 buttonInStart"
                        onClick={() => startBySpace()}
                      >
                        ???????? ????????
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : refCount.current > -1 && refCount.current <= props.s.length - 2 ? (
        <>
          <section className="sectionShowNumber">
            <div className="container">
              <div className="row featureRow d-flex flex-column align-items-center">
                <div className="col-8 d-flex justify-content-center">
                  <div className="featurejumbotron">
                    <div className="container">
                      <div className="fontfa">
                        <p
                          className="text showNumber d-flex justify-content-center"
                          style={{
                           marginTop: "1rem",
                            fontSize: "200px",
                          }}
                        >
                          {currentTarget}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="showFeedback">
            <div className="container d-flex flex-column align-items-center justify-content-center">
              <Button
                id="buttons"
                variant="primary"
                className="col-8 fontfa buttonChlick"
                onClick={handleClickButton}
              >
                ???????? ????????
              </Button>
              <div className="row">
                <div className="">
                  <div className="fontfa alignFeedback">
                    {feedback === true ? (
                      <>
                        <p style={{ fontSize: "100px" }}>????????</p>
                      </>
                    ) : feedback === false ? (
                      <>
                        <p style={{ fontSize: "100px" }}>??????</p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : refCount.current === props.s.length - 1 ? (
        <>
          <section className="sectionShowResult">
            <div className="container pt-5">
              <div className="row colorTitleSectionShowResult">
                <div className="offset-2 col-10 ">
                  <h5 className="fontfa py-2 directionContentTable">
                    ?????????? ?????????? ?????? ??????
                  </h5>
                </div>
              </div>
            </div>
            <div className="container-fluid ">
              <div className="row mt-3 mb-3">
                <div className="offset-1 col-10">
                  <table className="table table-hover table-striped table-responsive-sm borderTable">
                    <tbody>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ?????????? ???????????????{" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {props.s.length - 2}
                          </h6>
                        </td>
                      </tr>
                      <tr className="backgroundTableResult">
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ?????????? ???????????????
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {props.t}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ?????? ???????????????
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {props.isi}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ?????????? ???? ???????? ??????
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {totalCorrect.length}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ?????????? ???? ???????? ?????? ??????
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {totalInCorrect.length}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ?????????????? ????????{" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {correctdeterrent.length}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ????????{" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {correct.length}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ???????? ????????{" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {refSumResponseTime.current}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ?????????????? ???????? ???????? ????????{" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {refAverageCorrectResponseTime.current}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ??????(ommition){" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {ommition.length}
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="directionContentTable fontfa p-1 ">
                            {" "}
                            ???????? ???????????? (commition){" "}
                          </h6>
                        </td>
                        <td>
                          <h6 className="directionResultTable p-1 ">
                            {commition.length}
                          </h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-lg col-md-2 col-4 my-3 fontfa"
                      type="button"
                      onClick={handleClick}
                    >
                      ???????? ???????? ??????????
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default GonogoTest;
