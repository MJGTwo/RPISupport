import React from 'react';
const RED = '#97040c';
const GREY = '#717271';
const Card = ({ title, text, url }) => {
  const linkHelper = path => {
    if (typeof path.name !== 'undefined') {
      return (
        <a
          target="_blank"
          style={{ color: GREY, fontWeight: 'bold' }}
          download={path.name}
          href={path.file}
        >
          {path.name}
        </a>
      );
    } else {
      return (
        <a href={path} style={{ color: GREY, fontWeight: 'bold' }}>
          Click for website
        </a>
      );
    }
  };

  return (
    <div className="card" style={{ background: RED }}>
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        {text.map(par => {
          return <p key={par}> {par}</p>;
        })}
      </div>
      <div className="card-action" style={{ background: 'white' }}>
        {url.map(path => {
          return linkHelper(path);
        })}
      </div>
    </div>
  );
};

export default Card;
