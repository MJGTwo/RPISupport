import React from 'react';
const RED = '#97040c';
const GREY = '#717271';
const Card = ({ title, text, url }) => {
  return (
    <div className="card" style={{ background: RED }}>
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        {text.map(par => {
          console.log(par);
          return <p key={par}> {par}</p>;
        })}
      </div>
      <div className="card-action" style={{ background: 'white' }}>
        <a href={url} style={{ color: GREY, fontWeight: 'bold' }}>
          Click for website
        </a>
      </div>
    </div>
  );
};

export default Card;
