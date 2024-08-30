// src/pages/TestCard.js
import React from "react";
import Header from "../component/Header";
import Footer2 from "../component/Footer2";
import '../styles/NotFound.css';

function NotFound() {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="content-wrapper">
          <div className="content-box">
            <h1 className="not-found-title">Not Found</h1>
            <div className="description">
              <p>We cannot find the content you are looking for!</p>
            </div>
            <div className="button-group">
              <a href="javascript:history.back()" className="btn back-btn">
              <svg width="0.88em" height="1em" viewBox="0 0 448 512" class="h-4 mr-2 text-xl" data-icon="fa-solid:arrow-left"><path fill="currentColor" d="m257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3"></path></svg>
                Go back
              </a>
              <a href="/event-page" className="btn home-btn">
              <svg width="1.13em" height="1em" viewBox="0 0 576 512" class="h-4 mr-2 text-xl" data-icon="fa-solid:home"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"></path></svg>
                Home
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
}

export default NotFound;
