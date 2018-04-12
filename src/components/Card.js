import React from 'react';
import fileDownload from 'js-file-download';
const RED = '#97040c';
const GREY = '#717271';
const Card = ({ title, text, url }) => {
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
          if (path.includes('.pdf')) {
            return (
              <a
                href={path}
                target="_blank"
                style={{ color: GREY, fontWeight: 'bold' }}
              >
                Click to download
              </a>
            );
          } else {
            return (
              <a href={path} style={{ color: GREY, fontWeight: 'bold' }}>
                Click for website
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
