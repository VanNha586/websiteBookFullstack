import classNames from "classnames/bind";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

function Nav() {
  return (
    <div className={cx("wrapper_nav")}>
      <div className={cx("container")}>
        <ul className={cx("nav")}>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              All Categories
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Home
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Authors
              <i class="fa-solid fa-angle-down"></i>
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
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              Contact
            </a>
          </li>
          <li className={cx("nav-item")}>
            <a href="#" className={cx("nav-link")}>
              <i class="fa-solid fa-bars-staggered"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
