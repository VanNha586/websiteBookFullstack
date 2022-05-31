import classNames from "classnames/bind";

import styles from "./Middlecontainer.module.scss";

const cx = classNames.bind(styles);

function Middlecontainer() {
  return (
    <div className={cx("middlecontainer", "container")}>
      <a href="#" className={cx("logo")}>
        <img src={require("~/assets/logo_book.png")} />
      </a>
      <div className={cx("searchbox")}>
        <input className={cx("search")} type="text" placeholder="Search" />
        <span>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </span>
      </div>
      <div className={cx("middle-icons")}>
        <div className={cx("icon-heart")}>
          <span>
            <i className="far fa-heart"></i>
          </span>
          Wishlist
        </div>
        <div className={cx("icon-cart")}>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          $123.00
        </div>
      </div>
    </div>
  );
}

export default Middlecontainer;
