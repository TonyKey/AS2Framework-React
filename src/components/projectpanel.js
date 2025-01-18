import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './projectpanel.css'

const Projectpanel = (props) => {
  return (
    <div className="projectpanel-projectpanel">
      <div className="projectpanel-left-column-tables">
        <div className="projectpanel-frame3467252">
          <div className="projectpanel-frame3467249">
            <span className="projectpanel-text10">
              {props.text ?? (
                <Fragment>
                  <span className="projectpanel-text26">File</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="projectpanel-frame3467251">
            <span className="projectpanel-text11">
              {props.text1 ?? (
                <Fragment>
                  <span className="projectpanel-text27">Data</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="projectpanel-frame3467250">
            <span className="projectpanel-text12">
              {props.text2 ?? (
                <Fragment>
                  <span className="projectpanel-text22">Project</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="projectpanel-frame14665">
            <img
              alt={props.frameAlt}
              src={props.frameSrc}
              className="projectpanel-frame2"
            />
          </div>
        </div>
        <div className="projectpanel-frame3467266">
          <div className="projectpanel-frame15246">
            <div className="projectpanel-component1-active">
              <div className="projectpanel-frame1">
                <div className="projectpanel-app-icons1">
                  <div className="projectpanel-icsearch">
                    <img
                      alt={props.iconAlt}
                      src={props.iconSrc}
                      className="projectpanel-icon"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={props.frameInputTextPlaceholder}
                  className="projectpanel-frame-input-text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="projectpanel-dialogcontent1">
          <div className="projectpanel-tabs1">
            <div className="projectpanel-frame149921">
              <span className="projectpanel-text13">
                {props.text3 ?? (
                  <Fragment>
                    <span className="projectpanel-text31">Pages</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="projectpanel-frame260808591">
              <div className="projectpanel-createnewthing1">
                <img
                  alt={props.frame2760Alt}
                  src={props.frame2760Src}
                  className="projectpanel-frame27601"
                />
              </div>
              <img
                alt={props.appIconsAlt}
                src={props.appIconsSrc}
                className="projectpanel-app-icons2"
              />
            </div>
          </div>
          <div className="projectpanel-dialogcontent2">
            <div className="projectpanel-list-container">
              <div className="projectpanel-list-item1">
                <div className="projectpanel-frame148001">
                  <div className="projectpanel-frame27411">
                    <div className="projectpanel-component2561"></div>
                    <div className="projectpanel-teamdashboard1">
                      <img
                        alt={props.teamdashboardAlt}
                        src={props.teamdashboardSrc}
                        className="projectpanel-teamdashboard2"
                      />
                    </div>
                  </div>
                  <span className="projectpanel-text14">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="projectpanel-text28">
                          Start Screen
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <img
                  alt={props.frame14796Alt}
                  src={props.frame14796Src}
                  className="projectpanel-frame147961"
                />
              </div>
              <div className="projectpanel-list-item2">
                <div className="projectpanel-frame148002">
                  <div className="projectpanel-frame27412">
                    <div className="projectpanel-component2562"></div>
                    <div className="projectpanel-teamdashboard3">
                      <img
                        alt={props.teamdashboardAlt1}
                        src={props.teamdashboardSrc1}
                        className="projectpanel-teamdashboard4"
                      />
                    </div>
                  </div>
                  <span className="projectpanel-text15">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="projectpanel-text23">
                          Start Screen
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <img
                  alt={props.frame14796Alt1}
                  src={props.frame14796Src1}
                  className="projectpanel-frame147962"
                />
              </div>
            </div>
          </div>
          <div className="projectpanel-tabs2">
            <div className="projectpanel-frame149922">
              <span className="projectpanel-text16">
                {props.text4 ?? (
                  <Fragment>
                    <span className="projectpanel-text24">Layers</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="projectpanel-frame260808592">
              <div className="projectpanel-createnewthing2">
                <img
                  alt={props.frame2760Alt1}
                  src={props.frame2760Src1}
                  className="projectpanel-frame27602"
                />
              </div>
              <img
                alt={props.appIconsAlt1}
                src={props.appIconsSrc1}
                className="projectpanel-app-icons3"
              />
            </div>
          </div>
          <div className="projectpanel-dialogcontent3">
            <div className="projectpanel-frame2750">
              <div className="projectpanel-component81">
                <div className="projectpanel-frame148003">
                  <div className="projectpanel-frame27413">
                    <div className="projectpanel-frame2730"></div>
                    <div className="projectpanel-teamdashboard5">
                      <img
                        alt={props.teamdashboardAlt2}
                        src={props.teamdashboardSrc2}
                        className="projectpanel-teamdashboard6"
                      />
                    </div>
                  </div>
                  <span className="projectpanel-text17">
                    {props.text7 ?? (
                      <Fragment>
                        <span className="projectpanel-text25">App Header</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <img
                  alt={props.frame14796Alt2}
                  src={props.frame14796Src2}
                  className="projectpanel-frame147963"
                />
              </div>
              <div className="projectpanel-component95">
                <div className="projectpanel-frame148004">
                  <div className="projectpanel-frame34672221">
                    <div className="projectpanel-component2563">
                      <img
                        alt={props.frameAlt6}
                        src={props.frameSrc6}
                        className="projectpanel-frame3"
                      />
                    </div>
                    <img
                      alt={props.frameAlt3}
                      src={props.frameSrc3}
                      className="projectpanel-frame4"
                    />
                  </div>
                  <span className="projectpanel-text18">
                    {props.text8 ?? (
                      <Fragment>
                        <span className="projectpanel-text21">Section</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="projectpanel-frame3467228">
                  <img
                    alt={props.frameAlt1}
                    src={props.frameSrc1}
                    className="projectpanel-frame5"
                  />
                  <img
                    alt={props.frameAlt2}
                    src={props.frameSrc2}
                    className="projectpanel-frame6"
                  />
                </div>
              </div>
              <div className="projectpanel-component96">
                <div className="projectpanel-frame148005">
                  <div className="projectpanel-frame34672222">
                    <div className="projectpanel-component2564"></div>
                    <img
                      alt={props.frameAlt4}
                      src={props.frameSrc4}
                      className="projectpanel-frame7"
                    />
                  </div>
                  <span className="projectpanel-text19">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="projectpanel-text29">Section</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="projectpanel-component97">
                <div className="projectpanel-frame148006">
                  <div className="projectpanel-frame34672223">
                    <div className="projectpanel-component2565"></div>
                    <img
                      alt={props.frameAlt5}
                      src={props.frameSrc5}
                      className="projectpanel-frame8"
                    />
                  </div>
                  <span className="projectpanel-text20">
                    {props.text10 ?? (
                      <Fragment>
                        <span className="projectpanel-text30">Section</span>
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
  )
}

Projectpanel.defaultProps = {
  frameSrc1: '/external/frame2144-0rj2.svg',
  text8: undefined,
  frameAlt2: 'Frame2144',
  text2: undefined,
  frameSrc3: '/external/frame2144-70m.svg',
  frame14796Alt1: 'Frame147962144',
  text6: undefined,
  frameAlt3: 'Frame2144',
  frameSrc2: '/external/frame2144-bqgn.svg',
  frame14796Src2: '/external/frame147962144-acl.svg',
  frame2760Alt1: 'Frame2760I214',
  frame2760Alt: 'Frame2760I214',
  frameAlt1: 'Frame2144',
  frameAlt6: 'FrameI214',
  appIconsSrc1: '/external/appicons2144-9bcf.svg',
  frame14796Src: '/external/frame147962144-3m0j.svg',
  teamdashboardAlt2: 'teamdashboard2144',
  teamdashboardAlt1: 'teamdashboard2144',
  frame14796Alt: 'Frame147962144',
  text4: undefined,
  appIconsAlt1: 'AppIcons2144',
  text7: undefined,
  teamdashboardSrc1: '/external/teamdashboard2144-bipd.svg',
  frameSrc4: '/external/frame2144-1d8.svg',
  frame14796Src1: '/external/frame147962144-3m0j.svg',
  frameSrc5: '/external/frame2144-a77.svg',
  iconAlt: 'Icon2144',
  iconSrc: '/external/icon2144-tqfd.svg',
  frameAlt5: 'Frame2144',
  text: undefined,
  frameAlt4: 'Frame2144',
  text1: undefined,
  frame2760Src: '/external/frame2760i214-67vb.svg',
  frameAlt: 'Frame2144',
  text5: undefined,
  frameSrc6: '/external/framei214-pjm.svg',
  teamdashboardSrc: '/external/teamdashboard2144-bipd.svg',
  frameSrc: '/external/frame2144-bp1q.svg',
  text9: undefined,
  frameInputTextPlaceholder: 'Search pages',
  frame2760Src1: '/external/frame2760i214-t5c.svg',
  teamdashboardAlt: 'teamdashboard2144',
  teamdashboardSrc2: '/external/teamdashboard2144-pan.svg',
  text10: undefined,
  text3: undefined,
  appIconsAlt: 'AppIcons2144',
  frame14796Alt2: 'Frame147962144',
  appIconsSrc: '/external/appicons2144-pmin.svg',
}

Projectpanel.propTypes = {
  frameSrc1: PropTypes.string,
  text8: PropTypes.element,
  frameAlt2: PropTypes.string,
  text2: PropTypes.element,
  frameSrc3: PropTypes.string,
  frame14796Alt1: PropTypes.string,
  text6: PropTypes.element,
  frameAlt3: PropTypes.string,
  frameSrc2: PropTypes.string,
  frame14796Src2: PropTypes.string,
  frame2760Alt1: PropTypes.string,
  frame2760Alt: PropTypes.string,
  frameAlt1: PropTypes.string,
  frameAlt6: PropTypes.string,
  appIconsSrc1: PropTypes.string,
  frame14796Src: PropTypes.string,
  teamdashboardAlt2: PropTypes.string,
  teamdashboardAlt1: PropTypes.string,
  frame14796Alt: PropTypes.string,
  text4: PropTypes.element,
  appIconsAlt1: PropTypes.string,
  text7: PropTypes.element,
  teamdashboardSrc1: PropTypes.string,
  frameSrc4: PropTypes.string,
  frame14796Src1: PropTypes.string,
  frameSrc5: PropTypes.string,
  iconAlt: PropTypes.string,
  iconSrc: PropTypes.string,
  frameAlt5: PropTypes.string,
  text: PropTypes.element,
  frameAlt4: PropTypes.string,
  text1: PropTypes.element,
  frame2760Src: PropTypes.string,
  frameAlt: PropTypes.string,
  text5: PropTypes.element,
  frameSrc6: PropTypes.string,
  teamdashboardSrc: PropTypes.string,
  frameSrc: PropTypes.string,
  text9: PropTypes.element,
  frameInputTextPlaceholder: PropTypes.string,
  frame2760Src1: PropTypes.string,
  teamdashboardAlt: PropTypes.string,
  teamdashboardSrc2: PropTypes.string,
  text10: PropTypes.element,
  text3: PropTypes.element,
  appIconsAlt: PropTypes.string,
  frame14796Alt2: PropTypes.string,
  appIconsSrc: PropTypes.string,
}

export default Projectpanel
