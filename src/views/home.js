import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import GlobalHeaderBar from '../components/global-header-bar'
import Appheader from '../components/appheader'
import Projectpanel from '../components/projectpanel'
import ComponentProps from '../components/component-props'
import Footerstatusbar from '../components/footerstatusbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>AS2Framework</title>
        <meta property="og:title" content="AS2Framework" />
      </Helmet>
      <GlobalHeaderBar
        text={
          <Fragment>
            <span className="home-text10">
              Supply Chain
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
      ></GlobalHeaderBar>
      <Appheader
        text={
          <Fragment>
            <span className="home-text11">App Studio 2.0</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text12">New Project 1 App</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text13">Data Design</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text14">Page Designer</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text15">Preview</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text16">Publish</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text17">Save</span>
          </Fragment>
        }
      ></Appheader>
      <div className="home-container2">
        <Projectpanel
          text={
            <Fragment>
              <span className="home-text18">File</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text19">Data</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text20">Project</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text21">Pages</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text22">Layers</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text23">Start Screen</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text24">Start Screen</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text25">App Header</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text26">Section</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text27">Section</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text28">Section</span>
            </Fragment>
          }
        ></Projectpanel>
        <div className="home-app-body-container">
          <div className="home-expanded-preview-mode">
            <div className="home-tab-bar">
              <div className="home-tab-inner">
                <img
                  alt="sidebarleftcollapse2133"
                  src="/external/sidebarleftcollapse2133-m5ug.svg"
                  className="home-sidebarleftcollapse"
                />
                <div className="home-frame3467085">
                  <div className="home-tab-details">
                    <div className="home-frame117">
                      <div className="home-frame3466177">
                        <div className="home-teamdashboard1">
                          <img
                            alt="teamdashboard2133"
                            src="/external/teamdashboard2133-ugl.svg"
                            className="home-teamdashboard2"
                          />
                        </div>
                        <span className="home-text29">Homepage</span>
                      </div>
                      <div className="home-frame3466178">
                        <div className="home-icon-modeler-tab-management-tab-refresh">
                          <img
                            alt="Color2133"
                            src="/external/color2133-mabk.svg"
                            className="home-color1"
                          />
                        </div>
                        <div className="home-icon-modeler-tab-management-tab-close">
                          <img
                            alt="Color2133"
                            src="/external/color2133-d7op.svg"
                            className="home-color2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-frame3467087">
                <img
                  alt="Frame2133"
                  src="/external/frame2133-myp.svg"
                  className="home-frame1"
                />
              </div>
            </div>
            <div className="home-header">
              <div className="home-frame3466879">
                <div className="home-frame3466871">
                  <div className="home-frame3467125">
                    <img
                      alt="FrameI213"
                      src="/external/framei213-65x.svg"
                      className="home-frame2"
                    />
                    <span className="home-text30">ABC Company</span>
                  </div>
                  <div className="home-frame3466214">
                    <span className="home-text31">Homepage</span>
                  </div>
                  <div className="home-frame3466215">
                    <span className="home-text32">New Page</span>
                  </div>
                  <div className="home-frame3467126">
                    <span className="home-text33">Scenario Management</span>
                    <img
                      alt="Line106I213"
                      src="/external/line106i213-v34.svg"
                      className="home-line106"
                    />
                    <div className="home-expandmore1">
                      <img
                        alt="expandmoreI213"
                        src="/external/expandmorei213-33d7.svg"
                        className="home-expandmore2"
                      />
                    </div>
                  </div>
                  <div className="home-frame3466217">
                    <span className="home-text34">Analysis</span>
                  </div>
                  <div className="home-frame3466218">
                    <span className="home-text35">Review</span>
                  </div>
                  <div className="home-frame3466219">
                    <span className="home-text36">Users</span>
                  </div>
                </div>
                <div className="home-frame3466878">
                  <div className="home-global-icon-container1">
                    <div className="home-global-icon-container2">
                      <div className="home-frame1192">
                        <img
                          alt="arrowbackiosFILL0wght300GRAD0opsz24I213"
                          src="/external/arrowbackiosfill0wght300grad0opsz24i213-hagd.svg"
                          className="home-arrowbackios-fill0wght300grad0opsz24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-frame3466869">
                    <span className="home-text37">Data Flows</span>
                  </div>
                </div>
              </div>
              <div className="home-frame3467239">
                <img
                  alt="FrameI213"
                  src="/external/framei213-ql66.svg"
                  className="home-frame3"
                />
              </div>
            </div>
            <div className="home-mainappbodycontainer">
              <div className="home-dropzone"></div>
            </div>
          </div>
        </div>
        <ComponentProps
          text={
            <Fragment>
              <span className="home-text38">Components</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text39">Structure</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text40">Components</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text41">Section</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text42">
                Organize your pages into sections containing columns and rows to
                manage components.
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text43">Text</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text44">Headings and paragraph text</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text45">Button</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text46">
                Insert Primary, Secondary or Outline buttons.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text47">Data Table</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text48">
                Data grids which can be configured to display table data from
                selected connections.
              </span>
            </Fragment>
          }
        ></ComponentProps>
      </div>
      <Footerstatusbar
        text={
          <Fragment>
            <span className="home-text49">Status:</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text50">No errors</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text51">0 Warning</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text52">0 Errors</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text53">Created:</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text54">12/06/2024 10:23 A.M.</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text55">Current state:</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text56">3 App Versions</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text57">History</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text58">Draft</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text59">Button</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text60">Unsaved</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="home-text61">Button</span>
          </Fragment>
        }
      ></Footerstatusbar>
    </div>
  )
}

export default Home
