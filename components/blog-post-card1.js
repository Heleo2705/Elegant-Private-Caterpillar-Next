import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard1 = (props) => {
  return (
    <>
      <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card1-service3">
          <img
            alt="Rectangle77915"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="blog-post-card1-rectangle7"
          />
          <span className="blog-post-card1-text">{props.description}</span>
          <img
            alt="image147916"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="blog-post-card1-image14"
          />
          <div className="blog-post-card1-group7">
            <img
              alt="Rectangle107916"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="blog-post-card1-rectangle10"
            />
            <span className="blog-post-card1-text1">{props.title}</span>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card1-image"
        />
        <div className="blog-post-card1-container">
          <span className="blog-post-card1-text2">{props.label}</span>
          <span className="blog-post-card1-text3">{props.title}</span>
          <span className="blog-post-card1-text4">{props.description}</span>
          <div className="blog-post-card1-container1">
            <div className="blog-post-card1-profile">
              <img
                alt={props.profile_alt}
                src={props.profile_src}
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="blog-post-card1-image1"
              />
              <span className="blog-post-card1-text5">{props.author}</span>
            </div>
            <span className="blog-post-card1-text6">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card1-blog-post-card {
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card1-service3 {
            width: auto;
            height: 558px;
            display: flex;
            padding: 0;
            position: relative;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .blog-post-card1-rectangle7 {
            top: 0px;
            left: 2px;
            width: 362px;
            height: 558px;
            position: absolute;
            box-sizing: content-box;
            border-color: rgba(87, 172, 73, 1);
            border-style: solid;
            border-width: 3px;
            border-radius: 20px;
          }
          .blog-post-card1-text {
            top: 321px;
            left: 3px;
            color: rgba(0, 0, 0, 1);
            width: 362px;
            height: auto;
            position: absolute;
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
          .blog-post-card1-image14 {
            top: 0px;
            left: 1px;
            width: 363px;
            height: 237px;
            position: absolute;
            border-color: transparent;
            border-radius: 20px;
          }
          .blog-post-card1-group7 {
            top: 176px;
            left: 0px;
            width: 364px;
            height: 61px;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .blog-post-card1-rectangle10 {
            top: 0px;
            left: 1px;
            width: 363px;
            height: 61px;
            position: absolute;
            box-sizing: content-box;
            border-color: transparent;
            border-radius: 20px;
          }
          .blog-post-card1-text1 {
            top: 13px;
            color: rgba(255, 255, 255, 1);
            width: 356px;
            height: auto;
            position: absolute;
            font-size: 26px;
            align-self: auto;
            font-style: Medium;
            text-align: center;
            font-family: DM Sans;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-post-card1-image {
            width: 100%;
            height: 250px;
            display: none;
            object-fit: cover;
          }
          .blog-post-card1-container {
            display: none;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card1-text2 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card1-text3 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-text4 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card1-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card1-text5 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card1-text6 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }

          @media (max-width: 991px) {
            .blog-post-card1-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard1.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&h=400',
  author: 'Jon Doe',
  profile_alt: 'profile',
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  time: '5 min read',
  image_alt: 'image',
}

BlogPostCard1.propTypes = {
  description: PropTypes.string,
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard1
