import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-container ${props.rootClassName} `}>
        <div className="feature-card-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="feature-card-image"
          />
          <span className="feature-card-text">{props.text}</span>
          <span className="feature-card-description">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .feature-card-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 600px;
            display: flex;
            max-width: 360px;
            max-height: 600px;
            align-items: center;
            border-color: #57ac49;
            border-width: 2px;
            border-radius: 20px;
            justify-items: flex-start;
            flex-direction: column;
          }
          .feature-card-image {
            width: 360px;
            height: 240px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .feature-card-text {
            width: 100%;
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Medium;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: DM Sans;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .feature-card-description {
            color: rgba(0, 0, 0, 1);
            width: 362px;
            height: auto;
            padding: var(--dl-space-space-unit);
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: DM Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .feature-card-container1 {
              height: auto;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .feature-card-text {
              font-size: 20;
            }
            .feature-card-description {
              font-size: 18;
            }
          }
          @media (max-width: 479px) {
            .feature-card-root-class-name {
              top: 96px;
              left: 0px;
              position: static;
              margin-bottom: var(--dl-space-space-sixunits);
            }
            .feature-card-root-class-name1 {
              margin-top: var(--dl-space-space-sixunits);
            }
            .feature-card-root-class-name2 {
              margin-top: var(--dl-space-space-sixunits);
              margin-bottom: var(--dl-space-space-sixunits);
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'FTK Based Water Testing',
  image_alt: 'image',
  rootClassName: '',
  description:
    'Agri community development is a process of empowering rural communities through sustainable agricultural practices to improve their livelihoods and overall quality of life. The goal is to create self-sufficient sustainable communities by providing resources, training, education, and environment-friendly agriculture.',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard
