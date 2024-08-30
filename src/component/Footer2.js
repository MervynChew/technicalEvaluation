import React from 'react';
import '../styles/Footer2.css'; // Import the CSS file for styling

const Footer2 = () => {
    return (
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-content">
              <div class='logo-footer-box'>
                <a href="/" className="logo-link">
                  <img src="./Logo/cssLogo.svg" alt="USM CS Society Logo" className="logo-footer" />
                </a>
              </div>
              <div  className="footer-links">
                <div class='footer-navigation'>
                  <span className="footer-title">Navigate</span>
                  <a href="/404-Not-Found" className="link">About us</a>
                  <a href="/event-page" className="link">Events</a>
                  <a href="/404-Not-Found" className="link">News</a>
                </div>
                <div class='footer-sosial'>
                    <span className="footer-title-sosial">Social</span>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/cs.usm.my/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 320 512">
                          <path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/cs.usm/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 448 512" fill="currentColor">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
                        </svg>
                      </a>
                      <a href="https://tiktok.com/@cs.usm" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 448 512" className="social-icon">
                          <path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"></path>
                        </svg>
                      </a>

                      <a href="https://www.linkedin.com/company/cssocietyusm/" target="_blank"><svg width="1.1em" height="2em" viewBox="0 0 448 512" className="social-icon" data-icon="fa-brands:linkedin-in"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path> </svg></a>
                      <a href="https://t.me/+zA4GF8CVVFpjOWY1" target="_blank"><svg width="1em" height="1.7em" viewBox="0 0 448 512" className="social-icon" data-icon="fa-brands:telegram-plane"><path fill="currentColor" d="m446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2"></path></svg></a>
                  </div>
                </div>
              </div>
              <div class='slogan'>
                <p>#Nexus</p>
                <p>#ProgressingForTheBetter</p>
              </div>
            </div>
          </div>
          <div>
          <div class='footer-middle'>
              <img src='./Logo/CSSchool.svg'></img>
              <img src='./Logo/USMLogo.svg'></img>
            </div>
          </div>
          <div className="footer-bottom">
            
            <p className='footer-bottom-word'>© 2022 - 2023 Computer Science Society, Universiti Sains Malaysia</p>
          </div>
        </footer>
    );
};

export default Footer2;