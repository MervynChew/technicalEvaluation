import React from 'react';
import Header from '../component/Header';
import Footer2 from '../component/Footer2';
import '../styles/event-detail.css';

function Vhack2Details () {
  return (
    <>
      <Header />
      <p class='back-button'>
        ← <a href="/event-2223" class="link-back">Academic Session 2022/2023</a></p>
        
      <div class='event-detail-frame'>
        <div>
          <p class='title-event'>Varsity Hackathon 2023</p>
          <div className="event-detail">
            <p>International</p>
            <p>Flagship</p>
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
              <span>2nd April 2023</span>
              <span>9:00am - 6:30pm (GMT+8)</span>
              <span>Dewan Utama Pelajar, USM</span>
            </div>
          </div>
        </div>
        <img src='./EventPic/vhack2023.webp' class='event-picture'></img>
      </div>
      <div class='event-detail-description-box'>
        <p class='event-detail-description'>Description:</p>
        <p>Varsity Hackathon (V Hack), is a year-old flagship program, initiated in the early months of 2022. V Hack is one of the largest student-led international intervarsity competition for local and international undergraduates to compete by formulating the best solutions to solve real-world issues.</p><br></br>
        <p>V Hack aims to break the norms and expose our Malaysian undergraduates of all disciplines to the wonders of hackathons. It provides the participants a platform to gain new experiences and widen their exposure in various issues as an undergraduate. Furthermore, V Hack is the place for them to enhance their technical skills with professionals around the globe, develop ground-breaking ideas alongside expanding their network with likeminded people.</p><br></br>
        <p>Learn more about us at our <a href='https://vhackusm.com/'><u>official website!</u></a></p>
      </div>
      <Footer2 />
    </>
  );
}

export default Vhack2Details;