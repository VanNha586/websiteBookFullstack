import classNames from "classnames/bind";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

function Nav() {
  return <p className={cx("nav")}>1</p>;
}

export default Nav;
