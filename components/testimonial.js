import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <div className={`testimonial-testimonial ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="testimonial-image"
        />
        <div className="testimonial-testimonial1">
          <div className="testimonial-container">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="testimonial-icon"
            >
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="testimonial-text">{props.text}</span>
          <div className="testimonial-container1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="testimonial-icon2"
            >
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="testimonial-name">{props.Name}</span>
        <span className="testimonial-title">{props.Title}</span>
      </div>
      <style jsx>
        {`
          .testimonial-testimonial {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: #57ac49a6;
          }
          .testimonial-image {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-container {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-icon {
            width: var(--dl-size-size-small);
            margin-bottom: -6rem;
          }
          .testimonial-text {
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-twounits);
          }
          .testimonial-container1 {
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-icon2 {
            width: var(--dl-size-size-small);
            margin-top: -6rem;
          }
          .testimonial-name {
            font-size: 1.5rem;
            max-width: 600px;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-title {
            max-width: 600px;
            text-align: center;
            font-weight: 600;
          }
          .testimonial-root-class-name2 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-root-class-name {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-root-class-name1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .testimonial-image {
              margin-bottom: 0px;
            }
            .testimonial-text {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonial-testimonial {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-image {
              width: 200px;
            }
            .testimonial-icon {
              margin-bottom: 0px;
            }
            .testimonial-text {
              width: auto;
            }
            .testimonial-icon2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  Title: 'Software Engineer',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=300',
  image_alt: 'image',
  rootClassName: '',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  Name: 'Jane Doe',
}

Testimonial.propTypes = {
  Title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Name: PropTypes.string,
}

export default Testimonial
