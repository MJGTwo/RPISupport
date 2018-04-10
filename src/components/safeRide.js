import React from 'react';
const RED = '#97040c';
const safeRide = () => {
  return (
    <div className="card" style={{ background: RED, paddingBottom: '40px' }}>
      <div className="card-content white-text">
        <span className="card-title">RPI Safe Ride</span>
        <p>
          Safe Ride at Rensselaer provides students with a free
          evening/late-night transportation option within a specified service
          area. The program will operate seven days a week from 6:45 p.m.–3:00
          a.m. with the exception of holidays, academic breaks, and inclement
          weather.
        </p>
      </div>
      <div className="card-action">
        <a href="https://info.rpi.edu/safe-ride">Click for website</a>
      </div>
    </div>
  );
};

export default safeRide;
