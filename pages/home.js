import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - Elegant Private Caterpillar</title>
          <meta
            property="og:title"
            content="Home - Elegant Private Caterpillar"
          />
        </Head>
        <nav className="home-container1">
          <div className="home-container2">
            <div className="home-titlebar">
              <div className="home-home">
                <span className="home-text">
                  <span>Home</span>
                </span>
                <img
                  alt="Line17920"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-line1"
                />
              </div>
              <div className="home-services">
                <span className="home-text02">
                  <span>Services</span>
                </span>
                <img
                  alt="Line27923"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-line2"
                />
              </div>
              <div className="home-aboutus">
                <span className="home-text04">
                  <span>About Us</span>
                </span>
                <img
                  alt="Line37926"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-line3"
                />
              </div>
              <div className="home-contactus">
                <span className="home-text06">
                  <span>Contact Us</span>
                </span>
                <img
                  alt="Line47929"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-line4"
                />
              </div>
            </div>
            <img
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image"
            />
          </div>
          <span className="home-text08">
            <span>
              <span>HEALTHY SOIL,</span>
              <br></br>
              <span>
                WEALTHY FARM
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </nav>
        <div className="home-feature-card">
          <span className="home-text13">
            <span>01 . About us</span>
          </span>
          <span className="home-text15">
            <span>
              <span>Helping people to live</span>
              <br></br>
              <span>better than before</span>
            </span>
          </span>
          <div className="home-group8">
            <img
              alt="spiral7913"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-spiral"
            />
            <img
              alt="Rectangle17935"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-rectangle1"
            />
            <img
              alt="Slice1117936"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-slice111"
            />
            <span className="home-text20">
              <span>Why choose us ?</span>
            </span>
            <img
              alt="Rectangle27914"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-rectangle2"
            />
            <img
              alt="image37933"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image3"
            />
            <span className="home-text22">
              <span>
                ffdfbndf fbngneg fvsdvjngdnv svdsvubs vs skjvbfubvb scvvkvbfv gu
              </span>
            </span>
            <img
              alt="Line57940"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-line5"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: fit-content;
            display: flex;
            min-height: 100vh;
            align-content: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            width: auto;
            height: 700px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            margin-right: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/image%201-700h.png');
            background-position: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .home-titlebar {
            width: 712px;
            height: 26px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            border-color: transparent;
          }
          .home-home {
            top: 0px;
            left: 0px;
            width: 57px;
            height: 26px;
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
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .home-text {
            color: rgba(255, 255, 255, 1);
            width: 57px;
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
          }
          .home-line1 {
            top: 26px;
            left: 0px;
            width: 57px;
            height: auto;
            position: absolute;
            box-sizing: content-box;
          }
          .home-services {
            top: 0px;
            left: 181px;
            width: 83px;
            height: 26px;
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
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .home-text02 {
            color: rgba(255, 255, 255, 1);
            width: 83px;
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-line2 {
            top: 26px;
            left: 0px;
            width: 83px;
            height: auto;
            position: absolute;
            box-sizing: content-box;
          }
          .home-aboutus {
            top: 0px;
            left: 388px;
            width: 90px;
            height: 26px;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: center;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .home-text04 {
            color: rgba(255, 255, 255, 1);
            width: 90px;
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-line3 {
            top: 26px;
            left: 0px;
            width: 90px;
            height: auto;
            position: absolute;
            box-sizing: content-box;
          }
          .home-contactus {
            top: 0px;
            left: 602px;
            width: 110px;
            height: 26px;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: center;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: center;
            background-color: transparent;
          }
          .home-text06 {
            color: rgba(255, 255, 255, 1);
            width: 110px;
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-line4 {
            top: 26px;
            left: 0px;
            width: 110px;
            height: auto;
            position: absolute;
            box-sizing: content-box;
          }
          .home-image {
            width: auto;
            height: auto;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-sixunits);
          }
          .home-text08 {
            color: rgba(255, 255, 255, 1);
            width: auto;
            height: auto;
            font-size: 30px;
            align-self: auto;
            font-style: italic;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            padding-top: var(--dl-space-space-fiveunits);
            font-stretch: normal;
            margin-right: 0;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            position: relative;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text13 {
            color: rgba(182, 187, 188, 1);
            width: 191px;
            height: auto;
            font-size: 30px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-text15 {
            color: rgba(37, 76, 80, 1);
            width: 443px;
            height: auto;
            font-size: 40px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-group8 {
            width: auto;
            height: 679px;
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
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-end;
            background-color: transparent;
          }
          .home-spiral {
            top: 41px;
            left: 945px;
            width: 500px;
            height: 500px;
            position: absolute;
            border-color: transparent;
          }
          .home-rectangle1 {
            top: 429px;
            left: 0px;
            width: 781px;
            height: 223px;
            position: absolute;
            border-color: transparent;
          }
          .home-slice111 {
            top: 368px;
            left: 0px;
            width: 121px;
            height: 121px;
            position: absolute;
            border-color: transparent;
          }
          .home-text20 {
            top: 368px;
            left: 72px;
            color: rgba(63, 77, 80, 1);
            width: 290px;
            height: auto;
            position: absolute;
            font-size: 34px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-rectangle2 {
            top: 0px;
            left: 547px;
            width: 736px;
            height: 679px;
            position: absolute;
            border-color: transparent;
          }
          .home-image3 {
            top: 272px;
            left: 547px;
            width: 736px;
            height: 407px;
            position: absolute;
            border-color: transparent;
          }
          .home-text22 {
            top: 71px;
            left: 621px;
            color: rgba(0, 0, 0, 1);
            width: 601px;
            height: auto;
            position: absolute;
            font-size: 30px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: DM Sans;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-line5 {
            top: 44px;
            left: 621px;
            width: 193px;
            height: 0px;
            position: absolute;
            box-sizing: content-box;
          }
          @media (max-width: 767px) {
            .home-container2 {
              flex-direction: column;
            }
            .home-feature-card {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
