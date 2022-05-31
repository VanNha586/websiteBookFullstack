import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import classNames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content() {
  return (
    <>
      {/*  best selling start */}

      <section className={cx("wp-content")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className={cx("sectionhead")}>
                <h2>
                  <p>Peoples Choice</p>Bestselling Books
                </h2>

                <a href="#" className={cx("btn", " btn-outline-primary", "btn--hover")}>
                  View All
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <OwlCarousel
                className={cx("owl-theme", "owl-carousel", "owl-drag", "bestsellingbooksslider")}
                loop
                margin={10}
                nav
                items={5}
              >
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>
                      <div className={cx("tg-themetagbox")}>
                        <span className={cx("tg-themetag")}>sale</span>
                      </div>
                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>
                      <div className={cx("tg-themetagbox")}>
                        <span className={cx("tg-themetag")}>sale</span>
                      </div>
                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>
                      <div className={cx("tg-themetagbox")}>
                        <span className={cx("tg-themetag")}>sale</span>
                      </div>
                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>
                      <div className={cx("tg-themetagbox")}>
                        <span className={cx("tg-themetag")}>sale</span>
                      </div>
                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Help Me Find My Stomach</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <span className={cx("tg-stars")}>
                        <span></span>
                      </span>
                      <span className={cx("tg-bookprice")}>
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                      </span>
                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/*  best selling end */}

      {/*  featured start */}

      <section className={cx("tg-bglight", "tg-haslayout")}>
        <div className="container">
          <div className="row">
            <div className={cx("tg-featureditm")}>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                <figure>
                  <img src={require("~/assets/img-04.png")} alt="image description" />
                </figure>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className={cx("tg-featureditmcontent")}>
                  <div className={cx("tg-booktitle")}>
                    <h3>
                      <a href="javascript:void(0);">Things To Know About Green Flat Design</a>
                    </h3>
                  </div>
                  <span className={cx("tg-bookwriter")}>
                    By: <a href="javascript:void(0);">Farrah Whisenhunt</a>
                  </span>
                  <span className={cx("tg-stars")}>
                    <span></span>
                  </span>
                  <div className={cx("tg-priceandbtn")}>
                    <span className={cx("tg-bookprice")}>
                      <ins>$23.18</ins>
                      <del>$30.20</del>
                    </span>
                    <a
                      className={cx("tg-btn", " tg-btnstyletwo", " tg-active")}
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-shopping-basket"></i>
                      <em>Add To Basket</em>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  featured end */}

      {/*  Release start */}

      <section className={cx("tg-sectionspace", "tg-haslayout")}>
        <div className="container">
          <div className="row">
            <div className={cx("tg-newrelease")}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className={cx("tg-sectionhead")}>
                  <h2>
                    <span>Taste The New Spice</span>New Release Books
                  </h2>
                </div>
                <div className={cx("tg-description")}>
                  <p>
                    Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip
                    commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor
                    fugiat nulla pariatur cepteur sint occaecat cupidatat.
                  </p>
                </div>
                <div className={cx("tg-btns")}>
                  <a className={cx("tg-btn", "tg-active")} href="javascript:void(0);">
                    View All
                  </a>
                  <a className={cx("tg-btn")} href="javascript:void(0);">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className={cx("tg-newreleasebooks")}>
                    <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                      <div className={cx("tg-postbook")}>
                        <figure className={cx("tg-featureimg")}>
                          <div className={cx("tg-bookimg")}>
                            <div className={cx("tg-frontcover")}>
                              <img
                                src={require("~/assets/book/img-07.jpg")}
                                alt="image description"
                              />
                            </div>
                            <div className={cx("tg-backcover")}>
                              <img
                                src={require("~/assets/book/img-07.jpg")}
                                alt="image description"
                              />
                            </div>
                          </div>
                          <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                            <i className={cx("icon-heart")}></i>
                            <span>add to wishlist</span>
                          </a>
                        </figure>
                        <div className={cx("tg-postbookcontent")}>
                          <ul className={cx("tg-bookscategories")}>
                            <li>
                              <a href="javascript:void(0);">Adventure</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Fun</a>
                            </li>
                          </ul>
                          <div className={cx("tg-booktitle")}>
                            <h3>
                              <a href="javascript:void(0);">Help Me Find My Stomach</a>
                            </h3>
                          </div>
                          <span className={cx("tg-bookwriter")}>
                            By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                          </span>
                          <span className={cx("tg-stars")}>
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                      <div className={cx("tg-postbook")}>
                        <figure className={cx("tg-featureimg")}>
                          <div className={cx("tg-bookimg")}>
                            <div className={cx("tg-frontcover")}>
                              <img
                                src={require("~/assets/book/img-08.jpg")}
                                alt="image description"
                              />
                            </div>
                            <div className={cx("tg-backcover")}>
                              <img
                                src={require("~/assets/book/img-08.jpg")}
                                alt="image description"
                              />
                            </div>
                          </div>
                          <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                            <i className={cx("icon-heart")}></i>
                            <span>add to wishlist</span>
                          </a>
                        </figure>
                        <div className={cx("tg-postbookcontent")}>
                          <ul className={cx("tg-bookscategories")}>
                            <li>
                              <a href="javascript:void(0);">Adventure</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Fun</a>
                            </li>
                          </ul>
                          <div className={cx("tg-booktitle")}>
                            <h3>
                              <a href="javascript:void(0);">Help Me Find My Stomach</a>
                            </h3>
                          </div>
                          <span className={cx("tg-bookwriter")}>
                            By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                          </span>
                          <span className={cx("tg-stars")}>
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-4 hidden-md">
                      <div className={cx("tg-postbook")}>
                        <figure className={cx("tg-featureimg")}>
                          <div className={cx("tg-bookimg")}>
                            <div className={cx("tg-frontcover")}>
                              <img
                                src={require("~/assets/book/img-09.jpg")}
                                alt="image description"
                              />
                            </div>
                            <div className={cx("tg-backcover")}>
                              <img
                                src={require("~/assets/book/img-09.jpg")}
                                alt="image description"
                              />
                            </div>
                          </div>
                          <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                            <i className={cx("icon-heart")}></i>
                            <span>add to wishlist</span>
                          </a>
                        </figure>
                        <div className={cx("tg-postbookcontent")}>
                          <ul className={cx("tg-bookscategories")}>
                            <li>
                              <a href="javascript:void(0);">Adventure</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Fun</a>
                            </li>
                          </ul>
                          <div className={cx("tg-booktitle")}>
                            <h3>
                              <a href="javascript:void(0);">Help Me Find My Stomach</a>
                            </h3>
                          </div>
                          <span className={cx("tg-bookwriter")}>
                            By: <a href="javascript:void(0);">Kathrine Culbertson</a>
                          </span>
                          <span className={cx("tg-stars")}>
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Release end */}

      {/*  Collection start */}
      <section
        className={cx("tg-parallax", "tg-bgcollectioncount", "tg-haslayout", "tg-backgroundImage")}
        data-z-index="-100"
        data-appear-top-offset="600"
        data-parallax="scroll"
        data-image-src={require("~/assets/parallax/bgparallax-04.jpg")}
      >
        <div className={cx("tg-sectionspace", "tg-collectioncount", "tg-haslayout")}>
          <div className="container">
            <div className="row">
              <div id="tg-collectioncounters" className={cx("tg-collectioncounters")}>
                <div className={cx("tg-collectioncounter", "tg-drama")}>
                  <div className={cx("tg-collectioncountericon")}>
                    <i className="fa-regular fa-comment"></i>
                  </div>
                  <div className={cx("tg-titlepluscounter")}>
                    <h2>Drama</h2>
                    <h3
                      data-from="0"
                      data-to="6179213"
                      data-speed="8000"
                      data-refresh-interval="50"
                    >
                      6,179,213
                    </h3>
                  </div>
                </div>
                <div className={cx("tg-collectioncounter", "tg-horror")}>
                  <div className={cx("tg-collectioncountericon")}>
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                  <div className={cx("tg-titlepluscounter")}>
                    <h2>Horror</h2>
                    <h3
                      data-from="0"
                      data-to="3121242"
                      data-speed="8000"
                      data-refresh-interval="50"
                    >
                      3,121,242
                    </h3>
                  </div>
                </div>
                <div className={cx("tg-collectioncounter", "tg-romance")}>
                  <div className={cx("tg-collectioncountericon")}>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className={cx("tg-titlepluscounter")}>
                    <h2>Romance</h2>
                    <h3
                      data-from="0"
                      data-to="2101012"
                      data-speed="8000"
                      data-refresh-interval="50"
                    >
                      2,101,012
                    </h3>
                  </div>
                </div>
                <div className={cx("tg-collectioncounter", "tg-fashion")}>
                  <div className={cx("tg-collectioncountericon")}>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <div className={cx("tg-titlepluscounter")}>
                    <h2>Fashion</h2>
                    <h3
                      data-from="0"
                      data-to="1158245"
                      data-speed="8000"
                      data-refresh-interval="50"
                    >
                      1,158,245
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Collection end */}

      {/* author start */}

      <section className={cx("wp-author")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className={cx("sectionhead")}>
                <h2>
                  <p>Peoples Choice</p>Bestselling Books
                </h2>

                <a href="#" className={cx("btn", " btn-outline-primary", "btn--hover")}>
                  View All
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <OwlCarousel
                className={cx("owl-theme", "owl-carousel", "owl-drag", "bestsellingbooksslider")}
                loop
                margin={10}
                nav
                items={3}
              >
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <div className={cx("tg-hovercontent")}>
                        <div className={cx("tg-description")}>
                          <p>
                            Consectetur adipisicing elit sed do eiusmod tempor incididunt labore
                            toloregna aliqua enim adia minim veniam, quis nostrud.
                          </p>
                        </div>
                        <strong className={cx("tg-bookpage")}>Book Pages: 206</strong>
                        <strong className={cx("tg-bookcategory")}>Category: Adventure, Fun</strong>
                        <strong className={cx("tg-bookprice")}>Price: $23.18</strong>
                        <div className={cx("tg-ratingbox")}>
                          <span className={cx("tg-stars")}>
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                      <a className={cx("tg-btnaddtowishlist")} href="javascript:void(0);">
                        <i className={cx("icon-heart")}></i>
                        <span>add to wishlist</span>
                      </a>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>

                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Seven Minutes In Heaven</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>

                      <a className={cx("tg-btn", "tg-btnstyletwo")} href="javascript:void(0);">
                        <i className="fa fa-shopping-basket"></i>
                        <em>Add To Basket</em>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* author end */}

      {/* action start */}

      <section
        className={cx("tg-parallax", "tg-bgcalltoaction", "tg-haslayout")}
        data-z-index="-100"
        data-appear-top-offset="600"
        data-parallax="scroll"
        data-image-src="images/parallax/bgparallax-06.jpg"
      >
        <div className={cx("tg-sectionspace", "tg-haslayout")}>
          <div className={cx("container")}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className={cx("tg-calltoaction")}>
                  <h2>Open Discount For All</h2>
                  <h3>
                    Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                    dolore.
                  </h3>
                  <a className={cx("tg-btn", "tg-active")} href="javascript:void(0);">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* action end */}

      {/* new start */}
      <section className={cx("wp-content")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className={cx("sectionhead")}>
                <h2>
                  <p>Peoples Choice</p>Bestselling Books
                </h2>

                <a href="#" className={cx("btn", " btn-outline-primary", "btn--hover")}>
                  View All
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <OwlCarousel
                className={cx("owl-theme", "owl-carousel", "owl-drag", "bestsellingbooksslider")}
                loop
                margin={10}
                nav
                items={5}
              >
                <div className={cx("item")}>
                  <div className={cx("tg-postbook")}>
                    <figure className={cx("tg-featureimg")}>
                      <div className={cx("tg-bookimg")}>
                        <div className={cx("tg-frontcover")}>
                          <img src={require("~/assets/blog/img-01.jpg")} alt="image error" />
                        </div>
                        <div className={cx("tg-backcover")}>
                          <img src={require("~/assets/book/img-01.jpg")} alt="image error" />
                        </div>
                      </div>
                    </figure>
                    <div className={cx("tg-postbookcontent")}>
                      <ul className={cx("tg-bookscategories")}>
                        <li>
                          <a href="javascript:void(0);">Adventure</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Fun</a>
                        </li>
                      </ul>
                      <div className={cx("tg-themetagbox")}>
                        <span className={cx("tg-themetag")}>featured</span>
                      </div>
                      <div className={cx("tg-booktitle")}>
                        <h3>
                          <a href="javascript:void(0);">Where The Wild Things Are</a>
                        </h3>
                      </div>
                      <span className={cx("tg-bookwriter")}>
                        By: <a href="javascript:void(0);">Angela Gunning</a>
                      </span>
                      <ul className={cx("tg-postmetadata")}>
                        <li>
                          <a href="javascript:void(0);">
                            <i class="fa-regular fa-comment"></i>
                            <i>21,415 Comments</i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i class="fa-regular fa-eye"></i>
                            <i>24,565 Views</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* new end */}
    </>
  );
}

export default Content;
