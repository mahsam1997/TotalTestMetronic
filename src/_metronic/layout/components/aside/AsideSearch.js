/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";
import {
  DropdownItemToggler,
  DropdownMenu4,
} from "../../../_partials/dropdowns";

export function AsideSearch({ isActive }) {
  return(
 
  <div
    className={`tab-pane p-3 px-lg-7 py-lg-5 fade ${isActive && "show active"}`}
  >
    {/* begin::Form */}
    <form className="p-2 p-lg-3">
      <div className="d-flex">
        <div className="input-icon h-40px">
          <input
            type="text"
            className="form-control form-control-lg form-control-solid h-40px"
            placeholder="Search..."
            id="generalSearch"
            autoComplete="false"
          />
          <span>
            <span className="svg-icon svg-icon-lg">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")} />
            </span>
          </span>
        </div>

        <Dropdown drop="down" alignRight>
          <Dropdown.Toggle
            as={DropdownItemToggler}
            id="kt_quick_actions_search_toggle"
          >
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id="quick-search-tooltip">Quick search</Tooltip>
              }
            >
              <a
                href="#"
                className="btn btn-icon btn-default btn-hover-primary ml-2 h-40px w-40px flex-shrink-0"
              >
                <span className="svg-icon svg-icon-xl">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Code/Compiling.svg")}
                  />
                </span>
              </a>
            </OverlayTrigger>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
            <DropdownMenu4 />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </form>
    {/* end::Form */}

    <h3 className="p-2 p-lg-3 my-1 my-lg-3">Games</h3>

    {/* begin::List */}

    {/* begin::Item */}
    <div className="list-item hoverable p-2 p-lg-3 mb-2">
      <div className="d-flex align-items-center">
        {/* begin::Symbol */}
        <div className="symbol symbol-40 symbol-light mr-4">
          <span className="symbol-label bg-hover-white">
            <span className="svg-icon h-50 align-self-center">
              <SVG src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")} />
            </span>
          </span>
        </div>
        {/* end::Symbol */}
        {/* begin::Text */}
        <div className="d-flex flex-column flex-grow-1 mr-2">
          <span className="text-dark-75 font-size-h6 mb-0">
            <Link to="/testgo-no-go" className="linkstyle fonten m-2">
              <h4>GONOGO</h4>
            </Link>
          </span>
        </div>
        {/* begin::End */}
      </div>
    </div>
    {/* end::Item */}

    {/* begin::Item */}
    <div className="list-item hoverable p-2 p-lg-3 mb-2">
      <div className="d-flex align-items-center">
        {/* begin::Symbol */}
        <div className="symbol symbol-40 symbol-light mr-4">
          <span className="symbol-label bg-hover-white">
            <span className="svg-icon h-50 align-self-center">
              <SVG src={toAbsoluteUrl("/media/svg/misc/010-vimeo.svg")} />
            </span>
          </span>
        </div>
        {/* end::Symbol */}
        {/* begin::Text */}
        <div className="d-flex flex-column flex-grow-1 mr-2">
          <span className="text-dark-75 font-size-h6 mb-0">
            <Link to="/testN-back" className="linkstyle fonten  m-2">
              <h5>N-back</h5>
            </Link>
          </span>
        </div>
        {/* begin::End */}
      </div>
    </div>
    {/* end::Item */}

    {/* begin::Item */}
    <div className="list-item hoverable p-2 p-lg-3 mb-2">
      <div className="d-flex align-items-center">
        {/* begin::Symbol */}
        <div className="symbol symbol-40 symbol-light mr-4">
          <span className="symbol-label bg-hover-white">
            <span className="svg-icon h-50 align-self-center">
              <SVG src={toAbsoluteUrl("/media/svg/misc/014-kickstarter.svg")} />
            </span>
          </span>
        </div>
        {/* end::Symbol */}
        {/* begin::Text */}
        <div className="d-flex flex-column flex-grow-1 mr-2">
          <span className="text-dark-75 font-size-h6 mb-0">
            <Link to="/test-strop" className="linkstyle fonten  m-2">
              <h5>Strop</h5>
            </Link>
          </span>
        </div>
        {/* begin::End */}
      </div>
    </div>
    {/* end::Item */}

    {/* begin::Item */}
    <div className="list-item hoverable p-2 p-lg-3 mb-2">
      <div className="d-flex align-items-center">
        {/* begin::Symbol */}
        <div className="symbol symbol-40 symbol-light mr-4">
          <span className="symbol-label bg-hover-white">
            <span className="svg-icon h-50 align-self-center">
              <SVG
                src={toAbsoluteUrl("/media/svg/misc/009-hot-air-balloon.svg")}
              />
            </span>
          </span>
        </div>
        {/* end::Symbol */}
        {/* begin::Text */}
        <div className="d-flex flex-column flex-grow-1 mr-2">
          <span className="text-dark-75 font-size-h6 mb-0">
            <Link to="/test-cpt" className="linkstyle fonten  m-2">
              <h5>Cpt</h5>
            </Link>
          </span>
        </div>
        {/* begin::End */}
      </div>
    </div>
    {/* end::Item */}
  </div>
  )
}
