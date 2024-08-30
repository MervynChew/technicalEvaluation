// src/component/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/event-page.css'; // Import the CSS file

function Card({ title, date, description, imageUrl, altText, detail1, detail2, click }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate(click); // Navigate to the specified route
  };

  return (
    <article className="card">
      <img
        className="card__background"
        src={imageUrl}
        alt={altText}
        width="1920"
        height="2193"
      />
      <div className="card__content flow">
        <div className="card__content--container flow">
          <h2 className="card__title">{title}</h2>
          <p className="card__date">{date}</p>
          <p className="card__description">{description}</p>
        </div>
        <div className="event__detail">
          <button className="card__button" onClick={handleButtonClick}>Read more</button>
          <div className="event__detail__word">
            <p>{detail1}</p>
            <p>{detail2}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
