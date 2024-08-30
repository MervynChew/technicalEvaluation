// src/pages/TestCard.js
import React from 'react';
import Header from '../component/Header';
import Footer2 from '../component/Footer2';
import Card from '../component/Card';
import '../styles/event-page.css';

function EventPage2() {
  return (
    <>
      <Header />
      <h1 className="head">All Events</h1>
      <div className="event-container">
        <Card 
          title="Log Off Night 2023" 
          date="7 July 2024" 
          description="An annual dinner to celebrate and appreciate final year computer science students' contributions." 
          imageUrl="/EventPic/LON2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="USM Students" 
          detail2="Prom Night"
          click='/lon2023-details'
        />
        <Card 
          title="Project Innovation & eXploration in CS Education and Learning 2023" 
          date="12 July 2023" 
          description="An annual flagship exhibition programme specially curated for final year computer science students." 
          imageUrl="/EventPic/Pixel2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 4" 
          detail2="Flagship"
          click='/pixel2023-details'
        />
        <Card 
          title="Annual General Meeting 2023" 
          date="21 June 2023" 
          description="An annual event to showcase the achievements of CS Society throughout the year and elect the new executives members." 
          imageUrl="/EventPic/Agm2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="CS Students" 
          detail2="CS Society"
          click='/agm2023-details'
        />
        <Card 
          title="CS Sports Day 2023" 
          date="30 Apr 2023" 
          description="A brand-new student-led sports event for students and lecturers in the School of Computer Sciences." 
          imageUrl="/EventPic/cssportsday2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="CS Students" 
          detail2="Sports"
          click='/cssport2023-details'
        />
        <Card 
          title="Varsity Hackathon 2023" 
          date="2 Apr 2023" 
          description="A completely redesigned international hackathon and a space for university students to gain new hackathon experience." 
          imageUrl="/EventPic/vhack2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="International" 
          detail2="Flagship"
          click='/vhack2023-details'
        />
        <Card 
          title="Major Minor Exploration Event 2023" 
          date="5 Mar 2023" 
          description="A virtual event aimed at helping first-year USM CS students to select their academic tracks." 
          imageUrl="/EventPic/me22023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 1" 
          detail2="Talk"
          click='/me22023-details'
        />
        <Card 
          title="C++ Clinic 2023" 
          date="Jan 28 2023" 
          description="An online C++ coding workshop involving first-year computer science students from USM in preparation for their final exam." 
          imageUrl="/EventPic/cppclinic2023.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 1" 
          detail2="Workshop"
          click='/cppclinic2023-details'
        />
        <Card 
          title="Computer Science Internship & Recruitment Fair 2022" 
          date="Jan 7 2023" 
          description="A 2-day physical event featuring career talks and exhibitions uniquely for computer science students at USM." 
          imageUrl="/EventPic/csirf2022.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 3 & 4" 
          detail2="Flagship"
          click='/csirf2023-details'
        />
        <Card 
          title="CS Bersamamu 2022" 
          date="Oct 29 2022" 
          description="An annual event that is organized for the first-year students from School of Computer Sciences, USM." 
          imageUrl="/EventPic/csbersamamu2022.webp" 
          altText="Photo of Cartagena's cathedral at the background and some colonial style houses" 
          detail1="Year 1" 
          detail2="Flagship"
          click='/csbersamamu2022-details'
        />
      </div>
      <div className="button-container">
        <div className="btn-group">
          <a className="btn btn-primary" href="/event-page" title="Go to Next">
            ← Prev
          </a>
          <button className="btn btn-primary1">Page 2</button>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default EventPage2;
