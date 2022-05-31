import React, { useState } from "react";

import classNames from "classnames/bind";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

function Nav() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className={cx("wrapper_nav")}>
      <div className={cx("container")}>
        <ul className={cx("nav")}>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Home
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Authors
              <i className={cx("fa-solid", "fa-angle-down", "icon-down")}></i>
              <ul className={cx("authors")}>
                <li className={cx("authors-item")}>
                  <a className={cx("authors-link")} href="#">
                    Authors
                  </a>
                </li>
                <li className={cx("authors-item")}>
                  <a className={cx("authors-link")} href="#">
                    Authors details
                  </a>
                </li>
              </ul>
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Best Selling
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Weekly Sale
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Latest News
              <i className={cx("fa-solid", "fa-angle-down", "icon-down")}></i>
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Contact
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Product
            </a>
          </li>
          <li onClick={handleShow} className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              <i className={cx("fa-solid ", "fa-bars-staggered", "icon-bar")}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
