/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        <li className="menu-section ">
          <SVG
            src={toAbsoluteUrl(
              "/media/svg/icons/Games/1622833_checkmark_done_exam_list_pencil_icon.svg"
            )}
          />
          <h5 className="menu-text ml-3">Games</h5>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/testN-back",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link" to="/testN-back">
            <i className="menu-bullet menu-bullet-dot">
              <span />
            </i>
            <span className="menu-text">N-back</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/testN-back",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link" to="/testgo-no-go">
            <i className="menu-bullet menu-bullet-dot">
              <span />
            </i>
            <span className="menu-text">gonogo</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/testN-back",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link" to="/test-strop">
            <i className="menu-bullet menu-bullet-dot">
              <span />
            </i>
            <span className="menu-text">strop</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/testN-back",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link" to="/test-cpt">
            <i className="menu-bullet menu-bullet-dot">
              <span />
            </i>
            <span className="menu-text">cpt</span>
          </NavLink>
        </li>
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
