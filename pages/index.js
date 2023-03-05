import React from 'react'
import Head from 'next/head'

import NavigationLinks1 from '../components/navigation-links1'
import FeatureCard from '../components/feature-card'
import Testimonial from '../components/testimonial'

const Try2 = (props) => {
  return (
    <>
      <div className="try2-container">
        <Head>
          <title>Earth Analytica Labs</title>
          <meta property="og:title" content="Earth Analytica Labs" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/46d206fe-d8f4-44cf-ae10-27089d487573/ff7a0634-87d4-49e4-b017-61a71798892d?org_if_sml=1"
          />
        </Head>
        <div id="home" className="try2-header">
          <header data-role="Header" className="try2-header1">
            <div className="try2-titlebar">
              <div className="try2-home">
                <span className="try2-text">
                  <span>Home</span>
                </span>
              </div>
              <div className="try2-services">
                <a href="#features" className="try2-text02">
                  <span>Services</span>
                </a>
              </div>
              <div className="try2-aboutus">
                <a href="#aboutUs" className="try2-text04">
                  <span>About Us</span>
                </a>
              </div>
              <div className="try2-contactus">
                <a href="#contactUs" className="try2-text06">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
            <div className="try2-container01">
              <img
                alt="logo"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="try2-image"
              />
              <div className="try2-nav">
                <NavigationLinks1 rootClassName="rootClassName12"></NavigationLinks1>
              </div>
            </div>
            <div data-role="BurgerMenu" className="try2-burger-menu">
              <svg viewBox="0 0 1024 1024" className="try2-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="try2-mobile-menu">
              <nav className="try2-nav1">
                <div className="try2-container02">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="try2-image1"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="try2-close-mobile-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="try2-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks1 rootClassName="rootClassName14"></NavigationLinks1>
              </nav>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="try2-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="try2-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="try2-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
            <img
              alt="WhatsAppImage20230203at21517916"
              src="/playground_assets/whatsappimage20230203at21517916-7n89-1400w.png"
              className="try2-whats-app-image20230203at2151"
            />
          </header>
          <span className="try2-text08">
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
        </div>
        <div id="aboutUs" className="try2-about-us">
          <div className="try2-container03">
            <span className="try2-text13">
              <span>01 . About us</span>
            </span>
            <span className="try2-text15">
              <span>
                <span>Helping people to live</span>
                <br></br>
                <span>better than before</span>
              </span>
            </span>
            <h1 className="try2-text20">
              <span>Be the first to get the latest features</span>
            </h1>
            <span className="try2-text22">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis, ut tincidunt lectus. Mauris luctus
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
                ante. Proin at enim purus. Mauris ut felis nisi.
              </span>
            </span>
            <div className="try2-container04">
              <input
                type="text"
                placeholder="Email here..."
                className="try2-textinput input"
              />
              <button className="try2-button button">Subscribe</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="try2-image2"
          />
          <div className="try2-rectangle2">
            <span className="try2-text27">
              Enriching farming with on-field services involves providing
              farmers with various services that help them improve their crop
              yields, increase efficiency, and optimize their resources.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <img
              alt="image37933"
              src="/playground_assets/image37933-f4jv-1400w.png"
            />
          </div>
        </div>
        <div id="features" className="try2-features">
          <div className="try2-container05">
            <span className="try2-text28">
              <span>02 . Services</span>
            </span>
            <span className="try2-text30">
              Our services help you optimize both costs and harvests
            </span>
            <div className="try2-container06">
              <FeatureCard
                text="FTK Based Water Testing"
                image_src="/playground_assets/image137915-105n-300h.png"
                description="Field test kits are used to perform quick, on-site tests to monitor water quality and ensure it meets certain standards for safety, drinking water, or environmental regulations. They are designed for quick and convenient water testing."
                rootClassName="feature-card-root-class-name"
              ></FeatureCard>
              <FeatureCard
                text="Agri Residue Management"
                image_src="/playground_assets/image147916-m0cp-300h.png"
                description="Agri residue management refers to the handling and treatment of the organic material that remains after crops have been harvested. This includes leaves, stems, stalks, and other plant parts that are left in the fields. Proper agri residue management is important."
                rootClassName="feature-card-root-class-name2"
              ></FeatureCard>
              <FeatureCard
                text="Rapid Soil Testing"
                image_src="/playground_assets/image%2012-300h.png"
                description="Rapid soil testing is a method of analyzing soil characteristics quickly and efficiently, typically within a few hours, it provide crucial information about soil fertility, nutrient levels, soil structure, and other important soil characteristics."
                rootClassName="feature-card-root-class-name1"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div className="try2-container07">
          <span className="try2-text31">03 . Our Team</span>
          <Testimonial
            Name="Krishn Dev Singh"
            text=" “MBA in HR &amp; Marketing and has 14+ years of diverse experience spanning Human Resource, Project Management, Business Process Management,Corporate Trainings, Executive Assistant  &amp; Startup Operations Management.“"
            Title="Co-founder &amp; CEO"
            image_src="/playground_assets/kd%20singh-300h.png"
            rootClassName="testimonial-root-class-name2"
          ></Testimonial>
          <Testimonial
            Name="Nishaant Veer Dixit"
            text="“Tech enthusiast and mobile development expert. Previously headed the mobile development department at a Fintech.  B. Tech @ IIT Dhanbad 2021.  “"
            Title="Co-founder &amp; CTO"
            image_src="/playground_assets/nishaant-300h.png"
            rootClassName="testimonial-root-class-name"
          ></Testimonial>
          <Testimonial
            Name="Yashraj Shah"
            text="“B. Tech @ BITS Pilani, 2+ year experience in product management, consulting &amp; strategy. “"
            Title="Co-founder &amp; CBO"
            image_src="/playground_assets/yashraj-300h.png"
            rootClassName="testimonial-root-class-name1"
          ></Testimonial>
        </div>
        <footer className="try2-footer">
          <div id="contactUs" className="try2-container08">
            <div className="try2-logo">
              <a href="#home" className="try2-link">
                <img
                  alt="logo"
                  src="/playground_assets/whatsappimage20230203at21517916-7n89-1400w.png"
                  className="try2-image3 try2-image3"
                />
              </a>
            </div>
            <div className="try2-links-container">
              <div className="try2-container09">
                <div className="try2-company-container">
                  <a href="#home" className="try2-link1">
                    Home
                  </a>
                  <a href="#features" className="try2-link2">
                    Services
                  </a>
                  <span className="try2-text32">Careers</span>
                  <span className="try2-text33">Contact</span>
                  <span className="try2-text34">Blog</span>
                </div>
              </div>
              <div className="try2-container10">
                <div className="try2-contact">
                  <span className="try2-text35">Contact Us</span>
                  <span className="try2-text36">thefamersshop@gmail.com</span>
                  <span>+91 70110 70404</span>
                </div>
                <div className="try2-socials">
                  <span className="try2-text38">Follow Us</span>
                  <div className="try2-icon-group1">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="try2-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="try2-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="try2-icon14"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="try2-separator"></div>
          <span className="try2-text39">
            <span>© 2021 teleportHQ, All Rights Reserved.</span>
            <span className="try2-text41"></span>
            <span></span>
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .try2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .try2-header {
            width: var(--dl-size-size-maxwidth);
            display: flex;
            min-height: 80vh;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/image%201-1500h.png');
            background-position: center;
          }
          .try2-header1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .try2-titlebar {
            width: 712px;
            height: 26px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .try2-home {
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
          .try2-text {
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
            text-decoration: none;
          }
          .try2-services {
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
          .try2-text02 {
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
          .try2-aboutus {
            top: 0px;
            left: 388px;
            width: 90px;
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
          .try2-text04 {
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
          .try2-contactus {
            top: 0px;
            left: 602px;
            width: 110px;
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
          .try2-text06 {
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
          .try2-container01 {
            flex: 0 0 auto;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .try2-image {
            height: 2rem;
          }
          .try2-nav {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .try2-burger-menu {
            display: none;
          }
          .try2-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .try2-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .try2-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .try2-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .try2-image1 {
            height: 2rem;
          }
          .try2-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .try2-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .try2-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .try2-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .try2-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .try2-whats-app-image20230203at2151 {
            width: 263px;
            height: 316px;
            position: relative;
            border-color: transparent;
          }
          .try2-text08 {
            color: rgba(255, 255, 255, 1);
            width: 237px;
            height: auto;
            font-size: 30px;
            align-self: flex-start;
            font-style: italic;
            text-align: left;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .try2-about-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .try2-container03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .try2-text13 {
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
          .try2-text15 {
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
          .try2-text20 {
            display: none;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .try2-text22 {
            display: none;
            margin-right: var(--dl-space-space-threeunits);
          }
          .try2-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .try2-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .try2-button {
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
          }
          .try2-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .try2-image2 {
            width: 300px;
            height: 300px;
            display: none;
            object-fit: cover;
            flex-shrink: 0;
          }
          .try2-rectangle2 {
            width: 736px;
            height: 679px;
            display: flex;
            position: relative;
            border-color: transparent;
            justify-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
            background-color: #d9d9d9;
          }
          .try2-text27 {
            color: rgb(0, 0, 0);
            width: 601px;
            height: auto;
            margin: var(--dl-space-space-fourunits);
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
          .try2-image3 {
            width: 736px;
            height: 407px;
            position: relative;
            border-color: transparent;
          }
          .try2-features {
            flex: m;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .try2-container05 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 0px;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .try2-text28 {
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
            padding-top: var(--dl-space-space-threeunits);
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .try2-text30 {
            color: rgb(37, 76, 80);
            width: 1047px;
            height: auto;
            font-size: 42px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: DM Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .try2-container06 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-twounits);
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-sixunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .try2-container07 {
            flex: 0 0 auto;
            width: var(--dl-size-size-maxwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .try2-text31 {
            color: rgb(182, 187, 188);
            width: 261px;
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
          .try2-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #d9d9d9;
          }
          .try2-container08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .try2-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .try2-link {
            display: contents;
          }
          .try2-image3 {
            width: fit-content;
            height: var(--dl-size-size-large);
            text-decoration: none;
          }
          .try2-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .try2-container09 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .try2-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .try2-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .try2-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .try2-text32 {
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .try2-text33 {
            display: none;
            margin-bottom: var(--dl-space-space-unit);
          }
          .try2-text34 {
            display: none;
          }
          .try2-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .try2-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .try2-text35 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .try2-text36 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .try2-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .try2-text38 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .try2-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .try2-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .try2-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .try2-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .try2-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .try2-text39 {
            align-self: center;
          }
          .try2-text41 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .try2-titlebar {
              display: none;
            }
            .try2-icon {
              display: flex;
            }
            .try2-about-us {
              flex-direction: column;
            }
            .try2-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .try2-text22 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .try2-container04 {
              justify-content: center;
            }
            .try2-image2 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .try2-container06 {
              grid-template-columns: 1fr;
            }
            .try2-footer {
              flex-direction: column;
            }
            .try2-container09 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .try2-header {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .try2-header1 {
              display: none;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .try2-nav {
              display: none;
            }
            .try2-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .try2-whats-app-image20230203at2151 {
              width: 100%;
              align-self: center;
            }
            .try2-text08 {
              align-self: center;
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-sixunits);
            }
            .try2-about-us {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .try2-text15 {
              width: 100%;
            }
            .try2-text22 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .try2-rectangle2 {
              width: 100%;
            }
            .try2-text27 {
              width: 90%;
              margin: var(--dl-space-space-halfunit);
            }
            .try2-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .try2-container05 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .try2-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .try2-container08 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .try2-logo {
              align-items: center;
            }
            .try2-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .try2-container09 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .try2-header {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .try2-header1 {
              display: flex;
              padding: var(--dl-space-space-unit);
            }
            .try2-burger-menu {
              display: none;
            }
            .try2-mobile-menu {
              padding: 16px;
            }
            .try2-about-us {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .try2-container04 {
              align-items: center;
              flex-direction: column;
            }
            .try2-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .try2-image2 {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
            .try2-features {
              width: 100%;
              padding: 0;
            }
            .try2-container05 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .try2-text30 {
              width: 100%;
            }
            .try2-container06 {
              position: relative;
            }
            .try2-container07 {
              width: 100%;
            }
            .try2-footer {
              padding: var(--dl-space-space-unit);
            }
            .try2-container08 {
              align-items: center;
              flex-direction: column;
            }
            .try2-image3 {
              margin-bottom: 0px;
            }
            .try2-links-container {
              align-items: center;
              flex-direction: column;
            }
            .try2-container09 {
              margin-right: 0px;
            }
            .try2-container10 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .try2-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .try2-text39 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Try2
