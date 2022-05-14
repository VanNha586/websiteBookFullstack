import classNames from "classnames/bind";

import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content() {
  return <h1 className={cx("content")}>Content</h1>;
}

export default Content;
