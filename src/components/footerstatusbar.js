import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footerstatusbar.css'

const Footerstatusbar = (props) => {
  return (
    <div className="footerstatusbar-footerstatusbar">
      <div className="footerstatusbar-app-name-df-name">
        <span className="footerstatusbar-text10">
          {props.text ?? (
            <Fragment>
              <span className="footerstatusbar-text35">Status:</span>
            </Fragment>
          )}
        </span>
        <div className="footerstatusbar-frame3466155">
          <div className="footerstatusbar-bugreport1">
            <img
              alt={props.bugreportAlt}
              src={props.bugreportSrc}
              className="footerstatusbar-bugreport2"
            />
          </div>
          <span className="footerstatusbar-text11">
            {props.text1 ?? (
              <Fragment>
                <span className="footerstatusbar-text28">No errors</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footerstatusbar-warning1">
          <div className="footerstatusbar-warning2">
            <img
              alt={props.warningAlt}
              src={props.warningSrc}
              className="footerstatusbar-warning3"
            />
          </div>
          <span className="footerstatusbar-text12">
            {props.text2 ?? (
              <Fragment>
                <span className="footerstatusbar-text30">0 Warning</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footerstatusbar-errors">
          <div className="footerstatusbar-emergencyhome1">
            <img
              alt={props.emergencyhomeAlt}
              src={props.emergencyhomeSrc}
              className="footerstatusbar-emergencyhome2"
            />
          </div>
          <span className="footerstatusbar-text13">
            {props.text3 ?? (
              <Fragment>
                <span className="footerstatusbar-text27">0 Errors</span>
              </Fragment>
            )}
          </span>
        </div>
        <button type="button" className="footerstatusbar-button1 button">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="footerstatusbar-text33">Button</span>
              </Fragment>
            )}
          </span>
        </button>
        <button type="button" className="footerstatusbar-button2 button">
          <span>
            {props.button1 ?? (
              <Fragment>
                <span className="footerstatusbar-text23">Button</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <div className="footerstatusbar-component86">
        <div className="footerstatusbar-frame3466173">
          <span className="footerstatusbar-text16">
            {props.text4 ?? (
              <Fragment>
                <span className="footerstatusbar-text31">Created:</span>
              </Fragment>
            )}
          </span>
          <span className="footerstatusbar-text17">
            {props.text5 ?? (
              <Fragment>
                <span className="footerstatusbar-text26">
                  12/06/2024 10:23 A.M.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footerstatusbar-frame3466172">
          <span className="footerstatusbar-text18">
            {props.text6 ?? (
              <Fragment>
                <span className="footerstatusbar-text32">Current state:</span>
              </Fragment>
            )}
          </span>
          <div className="footerstatusbar-updated-status">
            <span className="footerstatusbar-text19">
              {props.text9 ?? (
                <Fragment>
                  <span className="footerstatusbar-text29">Draft</span>
                </Fragment>
              )}
            </span>
            <span className="footerstatusbar-text20">
              {props.text10 ?? (
                <Fragment>
                  <span className="footerstatusbar-text25">Unsaved</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="footerstatusbar-frame2721">
        <div className="footerstatusbar-frame3466157">
          <div className="footerstatusbar-playarrow1">
            <img
              alt={props.playarrowAlt}
              src={props.playarrowSrc}
              className="footerstatusbar-playarrow2"
            />
          </div>
          <span className="footerstatusbar-text21">
            {props.text7 ?? (
              <Fragment>
                <span className="footerstatusbar-text34">3 App Versions</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footerstatusbar-frame3466158">
          <div className="footerstatusbar-historytoggleoff1">
            <img
              alt={props.historytoggleoffAlt}
              src={props.historytoggleoffSrc}
              className="footerstatusbar-historytoggleoff2"
            />
          </div>
          <span className="footerstatusbar-text22">
            {props.text8 ?? (
              <Fragment>
                <span className="footerstatusbar-text24">History</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Footerstatusbar.defaultProps = {
  emergencyhomeAlt: 'emergencyhome2144',
  button1: undefined,
  text8: undefined,
  text10: undefined,
  text5: undefined,
  text3: undefined,
  text1: undefined,
  playarrowAlt: 'playarrow2144',
  text9: undefined,
  historytoggleoffSrc: '/external/historytoggleoff2144-qxrm.svg',
  playarrowSrc: '/external/playarrow2144-xy8lu.svg',
  text2: undefined,
  warningSrc: '/external/warning2144-6yze.svg',
  text4: undefined,
  emergencyhomeSrc: '/external/emergencyhome2144-3pna.svg',
  text6: undefined,
  warningAlt: 'warning2144',
  bugreportSrc: '/external/bugreport2144-f7l8.svg',
  historytoggleoffAlt: 'historytoggleoff2144',
  button: undefined,
  text7: undefined,
  bugreportAlt: 'bugreport2144',
  text: undefined,
}

Footerstatusbar.propTypes = {
  emergencyhomeAlt: PropTypes.string,
  button1: PropTypes.element,
  text8: PropTypes.element,
  text10: PropTypes.element,
  text5: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  playarrowAlt: PropTypes.string,
  text9: PropTypes.element,
  historytoggleoffSrc: PropTypes.string,
  playarrowSrc: PropTypes.string,
  text2: PropTypes.element,
  warningSrc: PropTypes.string,
  text4: PropTypes.element,
  emergencyhomeSrc: PropTypes.string,
  text6: PropTypes.element,
  warningAlt: PropTypes.string,
  bugreportSrc: PropTypes.string,
  historytoggleoffAlt: PropTypes.string,
  button: PropTypes.element,
  text7: PropTypes.element,
  bugreportAlt: PropTypes.string,
  text: PropTypes.element,
}

export default Footerstatusbar
