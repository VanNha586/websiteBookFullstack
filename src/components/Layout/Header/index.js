import classNames from "classnames/bind";

import styles from "./Header.module.scss";
// Layout component
import Topbar from "./Laypout/components/Topbar";
import Middlecontainer from "./Laypout/components/Middlecontainer";
import Nav from "./Laypout/components/Nav";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <Topbar />
      <Middlecontainer />
      <Nav />
      Header
    </div>
  );
}

export default Header;
