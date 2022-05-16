import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Topbar.module.scss";

const cx = classNames.bind(styles);
console.log(cx);
function Topbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "topbar")}>
        <ul className={cx("list")}>
          <li className={cx("list-item")}>
            <a href="#" className={cx("list-link")}>
              <FontAwesomeIcon icon="envelope" />
              <i class="fa-solid fa-envelope"></i>
              Contact
            </a>
          </li>
          <li className={cx("list-item")}>
            <a href="#" className={cx("list-link")}>
              <i class="fa-solid fa-circle-question"></i>
              Help
            </a>
          </li>
          <li className={cx("list-item")}>
            <a href="#" className={cx("list-link")}>
              <i class="fa-solid fa-earth-europe"></i>
              Currency
            </a>
          </li>
        </ul>
        <div className={cx("user-login")}>
          <img
            className={cx("avatar")}
            src="https://i.pinimg.com/236x/e8/20/e3/e820e35cac87d3543c3d9e4c6241df39.jpg"
          />
          <p className={cx("down")}>Hi, Nha</p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
