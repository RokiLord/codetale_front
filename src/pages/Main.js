import React, { Fragment } from "react";

function Main(){
    return (
      <Fragment className="g-sidenav-show">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div className="container">
            <a
              className="navbar-brand"
              href="/#"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >
              CodeTale
            </a>
            <button
              className="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5"
              id="navigation"
            >
              <ul className="navbar-nav navbar-nav-hover w-100">
                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a
                    href="#!"
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    id="dropdownMenuPages1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                    <img
                      src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      className="arrow ms-1"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuPages1"
                  >
                    <div className="d-none d-lg-block">
                      <a href="/#" className="dropdown-item border-radius-md">
                        Lecture
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Code Test
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Author
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Sign In
                      </a>
                    </div>

                    <div className="d-lg-none">
                      <a href="/#" className="dropdown-item border-radius-md">
                        About Us
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Contact Us
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Author
                      </a>
                      <a href="/#" className="dropdown-item border-radius-md">
                        Sign In
                      </a>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a
                    href="#!"
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    id="dropdownMenuBlocks"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blocks
                    <img
                      src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      className="arrow ms-1"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-animation dropdown-lg dropdown-lg-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                    aria-labelledby="dropdownMenuBlocks"
                  >
                    <div className="d-none d-lg-block">
                      <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                            </div>
                            <div className="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  Page Sections
                                </h6>
                                <span className="text-sm">
                                  See all 109 sections
                                </span>
                              </div>

                              <img
                                src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/down-arrow.svg"
                                alt="down-arrow"
                                className="arrow"
                              />
                            </div>
                          </div>
                        </a>
                        <div
                          className="dropdown-menu mt-0 py-3 px-2 mt-3"
                          aria-labelledby="pageSections"
                        >
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Page Headers
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Features
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Pricing
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            FAQ
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Blog Posts
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Testimonials
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Teams
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Stats
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Call to Actions
                          </a>
                          <a
                            className="dropdown-item ps-3 border-radius-md mb-1"
                            href="/#"
                          >
                            Logo Areas
                          </a>
                        </div>
                      </li>
                    </div>

                    <div className="row d-lg-none">
                      <div className="col-md-12">
                        <div className="d-flex mb-2">
                          <div className="icon h-10 me-3 d-flex mt-1">
                            <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                          </div>
                          <div className="w-100 d-flex align-items-center justify-content-between">
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Page Sections
                              </h6>
                            </div>
                          </div>
                        </div>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Page Headers
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Features
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Pricing
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          FAQ
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Blog Posts
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Testimonials
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Teams
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Stats
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Call to Actions
                        </a>
                        <a
                          className="dropdown-item ps-3 border-radius-md mb-1"
                          href="/#"
                        >
                          Applications
                        </a>
                      </div>
                    </div>
                  </ul>
                </li>

                <li className="nav-item dropdown dropdown-hover mx-2">
                  <a
                    href="#!"
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                    id="dropdownMenuDocs"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs
                    <img
                      src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/down-arrow-dark.svg"
                      alt="down-arrow"
                      className="arrow ms-1"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
                    aria-labelledby="dropdownMenuDocs"
                  >
                    <div className="d-none d-lg-block">
                      <li className="nav-item ">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlinkHref="http://www.w3.org/1999/xlink"
                              >
                                <title>spaceship</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1720.000000, -592.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(4.000000, 301.000000)">
                                        <path
                                          className="color-background"
                                          d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                          opacity="0.598539807"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                          opacity="0.598539807"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Getting Started
                              </h6>
                              <span className="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 44"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>document</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1870.000000, -591.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g
                                        id="document"
                                        transform="translate(154.000000, 300.000000)"
                                      >
                                        <path
                                          className="color-background"
                                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                          opacity="0.603585379"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Foundation
                              </h6>
                              <span className="text-sm">
                                See our colors, icons and typography
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 42 42"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>box-3d-50</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-2319.000000, -291.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g
                                        id="box-3d-50"
                                        transform="translate(603.000000, 0.000000)"
                                      >
                                        <path
                                          className="color-background"
                                          d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                          opacity="0.7"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                          opacity="0.7"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Components
                              </h6>
                              <span className="text-sm">
                                Explore our collection of fully designed
                                components
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 44"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>switches</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1870.000000, -440.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(154.000000, 149.000000)">
                                        <path
                                          className="color-background"
                                          d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z"
                                          opacity="0.6"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Plugins
                              </h6>
                              <span className="text-sm">
                                Check how you can integrate our plugins
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>settings</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-2020.000000, -442.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(304.000000, 151.000000)">
                                        <polygon
                                          className="color-background"
                                          opacity="0.596981957"
                                          points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                        ></polygon>
                                        <path
                                          className="color-background"
                                          d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                          opacity="0.596981957"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Utility ClassNameclassNamees
                              </h6>
                              <span className="text-sm">
                                For those who want flexibility, use our utility
                                classNamees
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </div>

                    <div className="row d-lg-none">
                      <div className="col-md-12 g-0">
                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>spaceship</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1720.000000, -592.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(4.000000, 301.000000)">
                                        <path
                                          className="color-background"
                                          d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                          opacity="0.598539807"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                          opacity="0.598539807"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Getting Started
                              </h6>
                              <span className="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </div>
                          </div>
                        </a>

                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 44"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>document</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1870.000000, -591.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(154.000000, 300.000000)">
                                        <path
                                          className="color-background"
                                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                          opacity="0.603585379"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Foundation
                              </h6>
                              <span className="text-sm">
                                See our colors, icons and typography
                              </span>
                            </div>
                          </div>
                        </a>

                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 42 42"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>box-3d-50</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-2319.000000, -291.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(603.000000, 0.000000)">
                                        <path
                                          className="color-background"
                                          d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                          opacity="0.7"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                          opacity="0.7"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Components
                              </h6>
                              <span className="text-sm">
                                Explore our collection of fully designed
                                components
                              </span>
                            </div>
                          </div>
                        </a>

                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 44"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>switches</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-1870.000000, -440.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(154.000000, 149.000000)">
                                        <path
                                          className="color-background"
                                          d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z"
                                          opacity="0.6"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Plugins
                              </h6>
                              <span className="text-sm">
                                Check how you can integrate our plugins
                              </span>
                            </div>
                          </div>
                        </a>

                        <a
                          className="dropdown-item py-2 ps-3 border-radius-md"
                          href="/#"
                        >
                          <div className="d-flex">
                            <div className="icon h-10 me-3 d-flex mt-1">
                              <svg
                                className="text-secondary"
                                width="16px"
                                height="16px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>settings</title>
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    transform="translate(-2020.000000, -442.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(304.000000, 151.000000)">
                                        <polygon
                                          className="color-background"
                                          opacity="0.596981957"
                                          points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                        ></polygon>
                                        <path
                                          className="color-background"
                                          d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                          opacity="0.596981957"
                                        ></path>
                                        <path
                                          className="color-background"
                                          d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Utility ClassNameclassNamees
                              </h6>
                              <span className="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0">
                  <a
                    href="/#"
                    className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="">
          <div className="page-header min-vh-100">
            <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
              <div
                className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                style={{
                  "background-image":
                    "url(https://demos.creative-tim.com/soft-ui-design-system/assets/img/curved-images/curved11.jpg)",
                }}
              ></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                  <h1 className="text-gradient text-primary">Your Work With</h1>
                  <h1 className="mb-4">AI Coding System</h1>
                  <p className="lead pe-5 me-5">
                    The time for coding with AI. Personalized Recommendation
                    with StoryTelling are waiting
                  </p>
                  <div className="buttons">
                    <button
                      type="button"
                      className="btn bg-gradient-primary mt-4"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      className="btn text-primary shadow-none mt-4"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="info">
                      <div className="icon icon-md">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 40 40"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>spaceship</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1720.000000, -592.000000)"
                              fill="#923DFA"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(4.000000, 301.000000)">
                                  <path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                                  <path d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                                  <path
                                    d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                    opacity="0.598539807"
                                  ></path>
                                  <path
                                    d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                    id="color-3"
                                    opacity="0.598539807"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>

                      <h5 style={{ outline: "rgb(162, 162, 162) dashed 1px" }}>
                        StoryTelling
                      </h5>
                      <p>Start trip with your personal teller to Code World</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info">
                      <div className="icon icon-md">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 42 42"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>briefcase-24</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-2170.000000, -292.000000)"
                              fill="#923DFA"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  id="briefcase-24"
                                  transform="translate(454.000000, 1.000000)"
                                >
                                  <path d="M26.25,31.5 L26.25,35 L15.75,35 L15.75,31.5 L1.75,31.5 L1.75,40.25 C1.75,41.216 2.534,42 3.5,42 L38.5,42 C39.466,42 40.25,41.216 40.25,40.25 L40.25,31.5 L26.25,31.5 Z"></path>
                                  <path
                                    d="M40.25,7 L29.75,7 L29.75,1.75 C29.75,0.784 28.966,0 28,0 L14,0 C13.034,0 12.25,0.784 12.25,1.75 L12.25,7 L1.75,7 C0.784,7 0,7.784 0,8.75 L0,26.25 C0,27.216 0.784,28 1.75,28 L15.75,28 L15.75,22.75 L26.25,22.75 L26.25,28 L40.25,28 C41.216,28 42,27.216 42,26.25 L42,8.75 C42,7.784 41.216,7 40.25,7 Z M26.25,7 L15.75,7 L15.75,3.5 L26.25,3.5 L26.25,7 Z"
                                    opacity="0.6"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>

                      <h5 style={{ outline: "rgb(162, 162, 162) dashed 1px" }}>
                        Code Test
                      </h5>
                      <p>Make your hand dirty with code</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="info">
                      <div className="icon icon-md">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 45 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>map-big</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-2321.000000, -593.000000)"
                              fill="#923DFA"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  id="map-big"
                                  transform="translate(605.000000, 302.000000)"
                                >
                                  <polygon points="31.875 0.71625 24.375 4.46625 24.375 40.53375 31.875 36.78375"></polygon>
                                  <polygon points="20.625 4.46625 13.125 0.71625 13.125 36.78375 20.625 40.53375"></polygon>
                                  <path
                                    d="M9.375,0.81375 L0.909375,5.893125 C0.346875,6.230625 0,6.84 0,7.5 L0,43.125 L9.375,37.06125 L9.375,0.81375 Z"
                                    opacity="0.70186942"
                                  ></path>
                                  <path
                                    d="M44.090625,5.893125 L35.625,0.81375 L35.625,37.06125 L45,43.125 L45,7.5 C45,6.84 44.653125,6.230625 44.090625,5.893125 Z"
                                    opacity="0.70186942"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <h5>Personalized Recommendation</h5>
                      <p>
                        Your trip will be personalized with AI model until end
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info">
                      <div className="icon icon-md">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 42 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>time-alarm</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-2319.000000, -440.000000)"
                              fill="#923DFA"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  id="time-alarm"
                                  transform="translate(603.000000, 149.000000)"
                                >
                                  <path
                                    d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z"
                                    opacity="0.6"
                                  ></path>
                                  <path
                                    d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z"
                                    opacity="0.6"
                                  ></path>
                                  <path d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <h5>Start Now</h5>
                      <p>Consideration after action</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ms-auto">
                <div className="card">
                  <img
                    alt="img"
                    className="card-img-top"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/funny.jpg"
                  />
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "50px", marginTop: "-50px" }}
                  >
                    <div className="position-absolute w-100 top-0 z-index-1">
                      <svg
                        className="waves waves-sm"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 40"
                        preserveAspectRatio="none"
                        shape-rendering="auto"
                      >
                        <defs>
                          <path
                            id="card-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                          ></path>
                        </defs>
                        <g className="moving-waves">
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="-1"
                            fill="rgba(255,255,255,0.30"
                          ></use>
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="3"
                            fill="rgba(255,255,255,0.35)"
                          ></use>
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="5"
                            fill="rgba(255,255,255,0.25)"
                          ></use>
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="8"
                            fill="rgba(255,255,255,0.20)"
                          ></use>
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="13"
                            fill="rgba(255,255,255,0.15)"
                          ></use>
                          <use
                            xlinkHref="#card-wave"
                            x="48"
                            y="16"
                            fill="rgba(255,255,255,0.99)"
                          ></use>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>AI Coding Education System</h4>
                    <p></p>
                    <a href="/#" className="text-primary icon-move-right">
                      More about us
                      <i
                        className="fas fa-arrow-right text-xs ms-1"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <h4 className="text-gradient text-primary">
                  Join our awesome team
                </h4>
              </div>
            </div>
            <div className="row mt-lg-5 mt-4">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-2">Michael Frisen</h5>
                      <span className="badge badge-sm rounded-pill mb-3 text-dark">
                        PHP Developer
                      </span>
                      <br />
                      <button
                        type="button"
                        className="btn btn-twitter btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-twitter text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dribbble btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-dribbble text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-slack btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-slack text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <div className="col-lg-5 text-end my-auto">
                      <img
                        alt="img"
                        className="avatar avatar-xxl"
                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-2">Laurent Shaun</h5>
                      <span className="badge badge-sm rounded-pill mb-3 text-dark">
                        Laravel Senior
                      </span>
                      <br />
                      <button
                        type="button"
                        className="btn btn-facebook btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-facebook-f text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dribbble btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-dribbble text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-slack btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-slack text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <div className="col-lg-5 text-end my-auto">
                      <img
                        alt="img"
                        className="avatar avatar-xxl"
                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-2">Ramon Siente</h5>
                      <span className="badge badge-sm rounded-pill mb-3 text-dark">
                        Vue.js Specialist
                      </span>
                      <br />
                      <button
                        type="button"
                        className="btn btn-twitter btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-twitter text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dribbble btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-dribbble text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-github btn-simple px-2 mb-0"
                      >
                        <i
                          className="fab fa-github text-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <div className="col-lg-5 text-end my-auto">
                      <img
                        alt="img"
                        className="avatar avatar-xxl"
                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="mb-1">Thank you for your support!</h4>
                <p className="lead mb-0">Delivering the best products</p>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <a href="/#" className="btn btn-twitter mb-0 me-2">
                  <i className="fab fa-twitter me-1" aria-hidden="true"></i>{" "}
                  Twitter
                </a>
                <a href="/#" className="btn btn-facebook mb-0 me-2">
                  <i
                    className="fab fa-facebook-square me-1"
                    aria-hidden="true"
                  ></i>{" "}
                  Facebook
                </a>
                <a href="/#" className="btn btn-tumblr mb-0 me-2">
                  GitHub
                </a>
                <a href="/#" className="btn btn-dribbble mb-0">
                  <i className="fab fa-dribbble me-1" aria-hidden="true"></i>{" "}
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Main;