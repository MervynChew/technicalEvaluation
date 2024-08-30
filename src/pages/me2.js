import React from 'react';
import Header from '../component/Header';
import Footer2 from '../component/Footer2';
import '../styles/event-detail.css';

function Me2Details () {
  return (
    <>
      <Header />
      <p class='back-button'>
        ← <a href="/event-2324" class="link-back">Academic Session 2023/2024</a></p>
        
      <div class='event-detail-frame'>
        <div>
          <p class='title-event'>Major Minor Exploration Event 2024</p>
          <div className="event-detail">
            <p>Year 1</p>
            <p>Talk</p>
          </div>
          <div className="event-detail-wrapper">
            <div className="event-icons">
              <svg width="24" height="24" viewBox="0 0 24 24" className="icon" data-icon="ci:calendar-event">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-4.25 14a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25z" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" className="icon" data-icon="ci:clock">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 7v5h5m-5 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" className="icon" data-icon="ci:location">
                <path fill="currentColor" d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" />
              </svg>
            </div>
            <div className="event-details">
              <span>4th & 5th March 2024</span>
              <span>8:00pm - 10:30pm (GMT+8)</span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <img src='./EventPic/me2.webp' class='event-picture'></img>
      </div>
      <div class='event-detail-description-box'>
        <p class='event-detail-description'>Description:</p>
        <p>Major Minor Exploration Event 2024 is an online sharing session involving first-year and second-year students from the School of Computer Sciences, Universiti Sains Malaysia, as well as students from other schools who are interested in pursuing a minor in Computer Science.</p>
        <br></br>
        <p>The main objective of this sharing session is to provide detailed explanations and information about the process of selecting majors and minors for Bachelor of Computer Science (Honours) to assist students in choosing their minor in the second semester of their first year and their major in the second semester of their second year. Additionally, this sharing session also offers an opportunity for students from other schools to understand the minor courses offered by the School of Computer Sciences.</p>
        <br></br>
        <p>ME² 2024’s target group consists of first-year students from the School of Computer Sciences, Universiti Sains Malaysia, while the secondary target includes second-year students from the School of Computer Sciences, Universiti Sains Malaysia, and students from other schools who are interested in taking minor courses in Computer Science.</p>
      </div>
      <Footer2 />
    </>
  );
}

export default Me2Details;