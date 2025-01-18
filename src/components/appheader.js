import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './appheader.css'

const Appheader = (props) => {
  return (
    <div className="appheader-appheader">
      <div className="appheader-leftsection">
        <span className="appheader-text10">
          {props.text ?? (
            <Fragment>
              <span className="appheader-text18">App Studio 2.0</span>
            </Fragment>
          )}
        </span>
        <div className="appheader-chevronright1">
          <img
            alt={props.chevronrightAlt}
            src={props.chevronrightSrc}
            className="appheader-chevronright2"
          />
        </div>
        <div className="appheader-frame26080858">
          <span className="appheader-text11">
            {props.text1 ?? (
              <Fragment>
                <span className="appheader-text22">New Project 1 App</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="appheader-centretabs">
        <div className="appheader-frame2719">
          <div className="appheader-table-tab-master1">
            <div className="appheader-frame27131">
              <span className="appheader-text12">
                {props.text2 ?? (
                  <Fragment>
                    <span className="appheader-text21">Data Design</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="appheader-table-tab-master2">
            <div className="appheader-frame27132">
              <span className="appheader-text13">
                {props.text3 ?? (
                  <Fragment>
                    <span className="appheader-text17">Page Designer</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="appheader-frame2722">
        <div className="appheader-frame14803">
          <div className="appheader-frame15164">
            <div className="appheader-frame15176">
              <button className="appheader-master-button1">
                <div className="appheader-btn-primary1">
                  <div className="appheader-frame21">
                    <div className="appheader-frame11">
                      <span className="appheader-text14">
                        {props.text6 ?? (
                          <Fragment>
                            <span className="appheader-text23">Save</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <button className="appheader-master-button2">
              <div className="appheader-btn-primary2">
                <div className="appheader-frame22">
                  <div className="appheader-frame12">
                    <span className="appheader-text15">
                      {props.text4 ?? (
                        <Fragment>
                          <span className="appheader-text20">Preview</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <button className="appheader-master-button3">
              <div className="appheader-btn-primary3">
                <div className="appheader-frame23">
                  <div className="appheader-frame13">
                    <span className="appheader-text16">
                      {props.text5 ?? (
                        <Fragment>
                          <span className="appheader-text19">Publish</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <div className="appheader-iconsadd-remove">
              <img
                alt={props.boundingboxAlt}
                src={props.boundingboxSrc}
                className="appheader-boundingbox"
              />
              <img
                alt={props.morevertAlt}
                src={props.morevertSrc}
                className="appheader-morevert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Appheader.defaultProps = {
  text3: undefined,
  morevertSrc: '/external/moreverti213-19gh.svg',
  chevronrightSrc: '/external/chevronright2134-hept.svg',
  chevronrightAlt: 'chevronright2134',
  text: undefined,
  text5: undefined,
  boundingboxSrc: '/external/boundingboxi213-ghn6-200h.png',
  morevertAlt: 'morevertI213',
  text4: undefined,
  boundingboxAlt: 'BoundingboxI213',
  text2: undefined,
  text1: undefined,
  text6: undefined,
}

Appheader.propTypes = {
  text3: PropTypes.element,
  morevertSrc: PropTypes.string,
  chevronrightSrc: PropTypes.string,
  chevronrightAlt: PropTypes.string,
  text: PropTypes.element,
  text5: PropTypes.element,
  boundingboxSrc: PropTypes.string,
  morevertAlt: PropTypes.string,
  text4: PropTypes.element,
  boundingboxAlt: PropTypes.string,
  text2: PropTypes.element,
  text1: PropTypes.element,
  text6: PropTypes.element,
}

export default Appheader
