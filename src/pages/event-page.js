// src/pages/TestCard.js
import React from 'react';
import Header from '../component/Header';
import Footer2 from '../component/Footer2';
import Card from '../component/Card';
import '../styles/event-page.css';

function EventPage() {
  return (
    <>
      <Header />
      <h1 className="head">All Events</h1>
      <div className="event-container">
        <Card 
          title="Log Off Night 2024" 
          date="7 July 2024" 
          description="An annual dinner to celebrate and appreciate final year computer science students" 
          imageUrl="/EventPic/LON.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="USM Students" 
          detail2="Prom Night"
          click='/lon-details'
        />
        <Card 
          title="Project Innovation & eXploration in CS Education and Learning 2024" 
          date="2 July 2024" 
          description="An annual flagship exhibition programme specially curated for final year computer science students." 
          imageUrl="/EventPic/Pixel.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 4" 
          detail2="Flagship"
          click='/pixel-details'
        />
        <Card 
          title="Annual General Meeting 2024" 
          date="26 June 2024" 
          description="An annual event to showcase the achievements of CS Society throughout the year and elect the new executives members." 
          imageUrl="/EventPic/Agm.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="CS Students" 
          detail2="CS Society"
          click='/agm-details'
        />
        <Card 
          title="Varsity Hackathon 2024" 
          date="20 Apr 2024" 
          description="A completely redesigned international hackathon and a space for university students to gain new hackathon experience." 
          imageUrl="/EventPic/VHack.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="International" 
          detail2="Flagship"
          click='/vhack-details'
        />
        <Card 
          title="Sukan Antara Pusat Pengajian Sains 2024" 
          date="9 Apr 2024" 
          description="A joint collaboration sports competition between seven competing Science Schools in USM." 
          imageUrl="/EventPic/sukapps.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Science Schools" 
          detail2="Sports"
          click='/sukapps-details'
        />
        <Card 
          title="Frosty Fantasy Night 2023" 
          date="4 Apr 2024" 
          description="A brand new event specifically designed for computer science undergraduates to unwind and relax." 
          imageUrl="/EventPic/frostynight.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="USM Students" 
          detail2="Entertainment"
          click='/frosy-details'
        />
        <Card 
          title="Major Minor Exploration Event 2024" 
          date="5 Mar 2024" 
          description="A 2-day virtual event aimed at helping first-year USM CS students to select their academic tracks." 
          imageUrl="/EventPic/me2.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 1" 
          detail2="Talk"
          click='/me2-details'
        />
        <Card 
          title="Virtual Computer Science Internship & Recruitment Fair 2023" 
          date="22 Oct 2023" 
          description="An annual event that is organized to welcome and guide first-year students from School of Computer Sciences, USM." 
          imageUrl="/EventPic/vcsirf.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 3 & 4" 
          detail2="Flagship"
          click='/vcsirf-details'
        />
        <Card 
          title="CS Bersamamu 2023" 
          date="5 Mar 2023" 
          description="An annual event that is organized to welcome and guide first-year students from School of Computer Sciences, USM." 
          imageUrl="/EventPic/csbersamamu.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 1" 
          detail2="Flagship"
          click='/csbersamamu-details'
        />
      </div>
      <div className="button-container">
        <div className="btn-group">
          <button className="btn btn-primary1">Page 1</button>
          <a className="btn btn-primary" href="/event-page-2" title="Go to Next">
            Next →
          </a>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default EventPage;
