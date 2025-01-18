import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component-props.css'

const ComponentProps = (props) => {
  return (
    <div className="component-props-component-props">
      <div className="component-props-frame15366">
        <div className="component-props-tabs">
          <div className="component-props-frame1125">
            <span className="component-props-text10">
              {props.text ?? (
                <Fragment>
                  <span className="component-props-text25">Components</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="component-props-frame15246">
        <div className="component-props-component1-active">
          <div className="component-props-frame1">
            <div className="component-props-app-icons">
              <div className="component-props-icsearch">
                <img
                  alt={props.iconAlt}
                  src={props.iconSrc}
                  className="component-props-icon"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder={props.frameInputTextPlaceholder}
              className="component-props-frame-input-text"
            />
          </div>
          <div className="component-props-frame-input-array-right">
            <div className="component-props-frame1142"></div>
          </div>
        </div>
      </div>
      <div className="component-props-frame1589">
        <div className="component-props-frame26080801">
          <div className="component-props-structureheader1">
            <img
              alt={props.iconsCaratsAlt}
              src={props.iconsCaratsSrc}
              className="component-props-icons-carats1"
            />
            <span className="component-props-text11">
              {props.text1 ?? (
                <Fragment>
                  <span className="component-props-text28">Structure</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="component-props-frame153651">
            <div className="component-props-nodefocus1">
              <div className="component-props-nodeinner1">
                <div className="component-props-label-icon1">
                  <img
                    alt={props.frameAlt}
                    src={props.frameSrc}
                    className="component-props-frame2"
                  />
                  <div className="component-props-frame152491">
                    <span className="component-props-text12">
                      {props.text3 ?? (
                        <Fragment>
                          <span className="component-props-text27">
                            Section
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="component-props-text13">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="component-props-text29">
                            Organize your pages into sections containing columns
                            and rows to manage components.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component-props-structureheader2">
            <img
              alt={props.iconsCaratsAlt1}
              src={props.iconsCaratsSrc1}
              className="component-props-icons-carats2"
            />
            <span className="component-props-text14">
              {props.text2 ?? (
                <Fragment>
                  <span className="component-props-text24">Components</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="component-props-dropdown-container">
            <div className="component-props-component-container">
              <div className="component-props-draggable-node">
                <div className="component-props-nodeinner2">
                  <div className="component-props-label-icon2">
                    <div className="component-props-actions-icons2432px">
                      <img
                        alt={props.frameAlt3}
                        src={props.frameSrc3}
                        className="component-props-frame3"
                      />
                    </div>
                    <div className="component-props-frame152492">
                      <span className="component-props-text15">
                        {props.text5 ?? (
                          <Fragment>
                            <span className="component-props-text31">Text</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="component-props-text16">
                        {props.text6 ?? (
                          <Fragment>
                            <span className="component-props-text26">
                              Headings and paragraph text
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="component-props-frame15363">
              <div className="component-props-nodefocus2">
                <div className="component-props-nodeinner3">
                  <div className="component-props-label-icon3">
                    <img
                      alt={props.frameAlt1}
                      src={props.frameSrc1}
                      className="component-props-frame4"
                    />
                    <div className="component-props-frame152493">
                      <span className="component-props-text17">
                        {props.text7 ?? (
                          <Fragment>
                            <span className="component-props-text21">
                              Button
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="component-props-text18">
                        {props.text8 ?? (
                          <Fragment>
                            <span className="component-props-text30">
                              Insert Primary, Secondary or Outline buttons.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="component-props-frame153652">
              <div className="component-props-nodefocus3">
                <div className="component-props-nodeinner4">
                  <div className="component-props-label-icon4">
                    <img
                      alt={props.frameAlt2}
                      src={props.frameSrc2}
                      className="component-props-frame5"
                    />
                    <div className="component-props-frame152494">
                      <span className="component-props-text19">
                        {props.text9 ?? (
                          <Fragment>
                            <span className="component-props-text22">
                              Data Table
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="component-props-text20">
                        {props.text10 ?? (
                          <Fragment>
                            <span className="component-props-text23">
                              Data grids which can be configured to display
                              table data from selected connections.
                            </span>
                          </Fragment>
                        )}
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
  )
}

ComponentProps.defaultProps = {
  frameSrc3: '/external/frame2133-m0qk.svg',
  iconsCaratsSrc1: '/external/iconscarats2144-haqf.svg',
  frameSrc1: '/external/frame2133-2u62.svg',
  frameInputTextPlaceholder: 'Type to search',
  text7: undefined,
  iconAlt: 'Icon2133',
  frameAlt: 'Frame2133',
  iconsCaratsSrc: '/external/iconscarats2144-lf1b.svg',
  frameAlt2: 'Frame2133',
  frameAlt1: 'Frame2133',
  text9: undefined,
  text10: undefined,
  frameSrc2: '/external/frame2133-gd23.svg',
  text2: undefined,
  text: undefined,
  iconsCaratsAlt: 'iconsCarats2144',
  frameAlt3: 'Frame2133',
  frameSrc: '/external/frame2133-rj3p.svg',
  text6: undefined,
  text3: undefined,
  text1: undefined,
  iconSrc: '/external/icon2133-5rtx.svg',
  text4: undefined,
  iconsCaratsAlt1: 'iconsCarats2144',
  text8: undefined,
  text5: undefined,
}

ComponentProps.propTypes = {
  frameSrc3: PropTypes.string,
  iconsCaratsSrc1: PropTypes.string,
  frameSrc1: PropTypes.string,
  frameInputTextPlaceholder: PropTypes.string,
  text7: PropTypes.element,
  iconAlt: PropTypes.string,
  frameAlt: PropTypes.string,
  iconsCaratsSrc: PropTypes.string,
  frameAlt2: PropTypes.string,
  frameAlt1: PropTypes.string,
  text9: PropTypes.element,
  text10: PropTypes.element,
  frameSrc2: PropTypes.string,
  text2: PropTypes.element,
  text: PropTypes.element,
  iconsCaratsAlt: PropTypes.string,
  frameAlt3: PropTypes.string,
  frameSrc: PropTypes.string,
  text6: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  iconSrc: PropTypes.string,
  text4: PropTypes.element,
  iconsCaratsAlt1: PropTypes.string,
  text8: PropTypes.element,
  text5: PropTypes.element,
}

export default ComponentProps
