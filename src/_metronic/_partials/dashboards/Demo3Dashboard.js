import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../layout/components/MyPage/router/testcomponent.style.css";
// import {
//   MixedWidget4,
//   BaseTablesWidget1,
//   BaseTablesWidget2,
//   BaseTablesWidget6,
//   StatsWidget11,
//   StatsWidget10,
//   ListsWidget8,
//   ListsWidget10,
//   ListsWidget14,
//   AdvanceTablesWidget9,
// } from "../widgets";

export function Demo3Dashboard() {
  return (
    <>
      <div className="container d-flex justify-content-around " >
        <div className="row col-12" style={{marginTop:'100px'}}>
          <div className="col-6" style={{height:'150px'}}>
            <div>
              <Button size="lg" block>
                <Link to="/testgo-no-go" className="linkstyle fonten m-2 ">
                  <h5>GONOGO</h5>
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-6">
            <div>
              <Button size="lg" block>
                <Link to="/testN-back" className="linkstyle fonten m-2" style={{whiteSpace:'nowrap'}}>
                  <h5>N-back</h5>
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-6">
            <div>
              <Button size="lg" block>
                <Link to="/test-strop" className="linkstyle fonten m-2">
                  <h5>strop</h5>
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-6">
            <div>
              <Button size="lg" block>
                <Link to="/test-cpt" className="linkstyle fonten  m-2">
                  <h5>cpt</h5>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* begin::Dashboard */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-4">
          <MixedWidget4 className="gutter-b card-stretch" />
        </div>
        <div className="col-xl-8">
          <BaseTablesWidget6 className="gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-4">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget11
                className="gutter-b"
                symbolShape="circle"
                baseColor="danger"
              />
            </div>
            <div className="col-xl-12">
              <StatsWidget10
                className="gutter-b"
                symbolShape="circle"
                baseColor="info"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <ListsWidget14 className="gutter-b card-stretch" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-lg-12 col-xxl-12">
          <AdvanceTablesWidget9 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-xl-6">
          <ListsWidget10 className="card-stretch gutter-b" />
        </div>
        <div className="col-xl-6">
          <BaseTablesWidget1 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className="row">
        <div className="col-lg-4">
          <ListsWidget8 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-8">
          <BaseTablesWidget2 className="card-stretch gutter-b" />
        </div>
      </div> */}
      {/* end::Row */}

      {/* end::Dashboard */}
    </>
  );
}
