import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer id="tg-footer" className={cx("tg-footer", "tg-haslayout")}>
      <div className={cx("tg-footerarea")}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className={cx("tg-clientservices")}>
                <li className={cx("tg-devlivery")}>
                  <span className={cx("tg-clientserviceicon")}>
                    <i className={cx("fa-solid", "fa-rocket", "rocket")}></i>
                  </span>
                  <div className={cx("tg-titlesubtitle")}>
                    <h3>Fast Delivery</h3>
                    <p>Shipping Worldwide</p>
                  </div>
                </li>
                <li className={cx("tg-discount")}>
                  <span className={cx("tg-clientserviceicon")}>
                    <i className={cx("fa-solid", "fa-tag", "tag")}></i>
                  </span>
                  <div className={cx("tg-titlesubtitle")}>
                    <h3>Open Discount</h3>
                    <p>Offering Open Discount</p>
                  </div>
                </li>
                <li className={cx("tg-quality")}>
                  <span className={cx("tg-clientserviceicon")}>
                    <i className={cx("fa-solid", "fa-leaf", "leaf")}></i>
                  </span>
                  <div className={cx("tg-titlesubtitle")}>
                    <h3>Eyes On Quality</h3>
                    <p>Publishing Quality Work</p>
                  </div>
                </li>
                <li className={cx("tg-support")}>
                  <span className={cx("tg-clientserviceicon")}>
                    <i className={cx("fa-regular", "fa-heart", "heart")}></i>
                  </span>
                  <div className={cx("tg-titlesubtitle")}>
                    <h3>24/7 Support</h3>
                    <p>Serving Every Moments</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={cx("tg-threecolumns")}>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className={cx("tg-footercol")}>
                  <strong className={cx("tg-logo")}>
                    <a href="javascript:void(0);">
                      <img src={require("~/assets/flogo.png")} alt="image description" />
                    </a>
                  </strong>
                  <ul className={cx("tg-contactinfo")}>
                    <li>
                      <i className={cx("icon-apartment")}></i>
                      <address>
                        Suit # 07, Rose world Building, Street # 02, AT246T Manchester
                      </address>
                    </li>
                    <li>
                      <i className="icon-phone-handset"></i>
                      <span>
                        <em>0800 12345 - 678 - 89</em>
                        <em>+4 1234 - 4567 - 67</em>
                      </span>
                    </li>
                    <li>
                      <i className="icon-clock"></i>
                      <span>Serving 7 Days A Week From 9am - 5pm</span>
                    </li>
                    <li>
                      <i className="icon-envelope"></i>
                      <span>
                        <em>
                          <a href="mailto:support@domain.com">support@domain.com</a>
                        </em>
                        <em>
                          <a href="mailto:info@domain.com">info@domain.com</a>
                        </em>
                      </span>
                    </li>
                  </ul>
                  <ul className={cx("tg-socialicons")}>
                    <li className={cx("tg-facebook")}>
                      <a href="javascript:void(0);">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className={cx("tg-twitter")}>
                      <a href="javascript:void(0);">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className={cx("tg-linkedin")}>
                      <a href="javascript:void(0);">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li className={cx("tg-googleplus")}>
                      <a href="javascript:void(0);">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className={cx("tg-rss")}>
                      <a href="javascript:void(0);">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className={cx("tg-footercol", "tg-widget ", "tg-widgetnavigation")}>
                  <div className={cx("tg-widgettitle")}>
                    <h3>Shipping And Help Information</h3>
                  </div>
                  <div className={cx("tg-widgetcontent")}>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">Terms of Use</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Terms of Sale</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Returns</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Privacy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Cookies</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Contact Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Our Affiliates</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Vision &amp; Aim</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">Our Story</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">FAQ</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Testimonials</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Join Our Team</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className={cx("tg-footercol", "tg-widget", "tg-widgettopsellingauthors")}>
                  <div className={cx("tg-widgettitle")}>
                    <h3>Top Selling Authors</h3>
                  </div>
                  <div className={cx("tg-widgetcontent")}>
                    <ul>
                      <li>
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src={require("~/assets/author/imag-09.jpg")}
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div className={cx("tg-authornamebooks")}>
                          <h4>
                            <a href="javascript:void(0);">Jude Morphew</a>
                          </h4>
                          <p>21,658 Published Books</p>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src={require("~/assets/author/imag-10.jpg")}
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div className={cx("tg-authornamebooks")}>
                          <h4>
                            <a href="javascript:void(0);">Shaun Humes</a>
                          </h4>
                          <p>20,257 Published Books</p>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <a href="javascript:void(0);">
                            <img
                              src={require("~/assets/author/imag-11.jpg")}
                              alt="image description"
                            />
                          </a>
                        </figure>
                        <div className={cx("tg-authornamebooks")}>
                          <h4>
                            <a href="javascript:void(0);">Kathrine Culbertson</a>
                          </h4>
                          <p>15,686 Published Books</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
