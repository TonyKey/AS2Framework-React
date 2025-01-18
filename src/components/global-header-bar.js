import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './global-header-bar.css'

const GlobalHeaderBar = (props) => {
  return (
    <div className="global-header-bar-global-header-bar">
      <div className="global-header-bar-frame3466873">
        <div className="global-header-bar-global-icon-container1">
          <div className="global-header-bar-frame11921">
            <img
              alt={props.navIconsAlt}
              src={props.navIconsSrc}
              className="global-header-bar-nav-icons1"
            />
          </div>
        </div>
        <div className="global-header-bar-frame3466997">
          <div className="global-header-bar-frame3466871">
            <div className="global-header-bar-frame3466870">
              <div className="global-header-bar-logocoupawhite">
                <div className="global-header-bar-group">
                  <img
                    alt={props.pathAlt}
                    src={props.pathSrc}
                    className="global-header-bar-path1"
                  />
                  <img
                    alt={props.shapeAlt1}
                    src={props.shapeSrc1}
                    className="global-header-bar-shape1"
                  />
                  <img
                    alt={props.pathAlt1}
                    src={props.pathSrc1}
                    className="global-header-bar-path3"
                  />
                  <img
                    alt={props.shapeAlt2}
                    src={props.shapeSrc2}
                    className="global-header-bar-shape2"
                  />
                  <img
                    alt={props.shapeAlt3}
                    src={props.shapeSrc3}
                    className="global-header-bar-shape3"
                  />
                </div>
                <img
                  alt={props.shapeAlt}
                  src={props.shapeSrc}
                  className="global-header-bar-shape4"
                />
              </div>
            </div>
            <span className="global-header-bar-text1">
              {props.text ?? (
                <Fragment>
                  <span className="global-header-bar-text2">
                    Supply Chain
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
      <div className="global-header-bar-frame3466858">
        <div className="global-header-bar-frame3466996"></div>
        <div className="global-header-bar-global-icon-container2">
          <div className="global-header-bar-global-icon-container3">
            <div className="global-header-bar-frame11922">
              <div className="global-header-bar-nav-icons2">
                <img
                  alt={props.frame3466876Alt}
                  src={props.frame3466876Src}
                  className="global-header-bar-frame3466876"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="global-header-bar-global-icon-container4">
          <div className="global-header-bar-global-icon-container5">
            <div className="global-header-bar-iconhelp-center-copy">
              <img
                alt={props.rectangleAlt}
                src={props.rectangleSrc}
                className="global-header-bar-rectangle"
              />
              <div className="global-header-bar-group2">
                <img
                  alt={props.path2Alt}
                  src={props.path2Src}
                  className="global-header-bar-path2"
                />
                <img
                  alt={props.ovalAlt}
                  src={props.ovalSrc}
                  className="global-header-bar-oval"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="global-header-bar-global-icon-container6">
          <div className="global-header-bar-global-icon-container7">
            <div className="global-header-bar-frame11923">
              <img
                alt={props.navIconsAlt1}
                src={props.navIconsSrc1}
                className="global-header-bar-nav-icons3"
              />
            </div>
          </div>
        </div>
        <div className="global-header-bar-global-icon-container8">
          <div className="global-header-bar-global-icon-container9">
            <div className="global-header-bar-frame11924">
              <img
                alt={props.navIconsAlt2}
                src={props.navIconsSrc2}
                className="global-header-bar-nav-icons4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GlobalHeaderBar.defaultProps = {
  pathAlt1: 'Path2134',
  ovalAlt: 'Oval2134',
  shapeSrc3: '/external/shape2134-50ai.svg',
  navIconsAlt2: 'NavIconsI213',
  navIconsSrc: '/external/navicons2134-e8gt.svg',
  shapeAlt1: 'Shape2134',
  ovalSrc: '/external/oval2134-ai6t-200h.png',
  pathSrc: '/external/path2134-0ct9.svg',
  shapeAlt: 'Shape2134',
  navIconsAlt1: 'NavIcons2134',
  shapeSrc2: '/external/shape2134-mz9.svg',
  shapeSrc: '/external/shape2134-q4mi.svg',
  frame3466876Src: '/external/frame3466876i213-jyda.svg',
  rectangleSrc: '/external/rectangle2134-u8zn-200h.png',
  text: undefined,
  path2Alt: 'Path22134',
  pathAlt: 'Path2134',
  frame3466876Alt: 'Frame3466876I213',
  rectangleAlt: 'Rectangle2134',
  path2Src: '/external/path22134-cz6.svg',
  shapeSrc1: '/external/shape2134-byy9.svg',
  shapeAlt2: 'Shape2134',
  navIconsAlt: 'NavIcons2134',
  navIconsSrc2: '/external/naviconsi213-4vc9.svg',
  pathSrc1: '/external/path2134-4ma9.svg',
  navIconsSrc1: '/external/navicons2134-xp2l.svg',
  shapeAlt3: 'Shape2134',
}

GlobalHeaderBar.propTypes = {
  pathAlt1: PropTypes.string,
  ovalAlt: PropTypes.string,
  shapeSrc3: PropTypes.string,
  navIconsAlt2: PropTypes.string,
  navIconsSrc: PropTypes.string,
  shapeAlt1: PropTypes.string,
  ovalSrc: PropTypes.string,
  pathSrc: PropTypes.string,
  shapeAlt: PropTypes.string,
  navIconsAlt1: PropTypes.string,
  shapeSrc2: PropTypes.string,
  shapeSrc: PropTypes.string,
  frame3466876Src: PropTypes.string,
  rectangleSrc: PropTypes.string,
  text: PropTypes.element,
  path2Alt: PropTypes.string,
  pathAlt: PropTypes.string,
  frame3466876Alt: PropTypes.string,
  rectangleAlt: PropTypes.string,
  path2Src: PropTypes.string,
  shapeSrc1: PropTypes.string,
  shapeAlt2: PropTypes.string,
  navIconsAlt: PropTypes.string,
  navIconsSrc2: PropTypes.string,
  pathSrc1: PropTypes.string,
  navIconsSrc1: PropTypes.string,
  shapeAlt3: PropTypes.string,
}

export default GlobalHeaderBar
