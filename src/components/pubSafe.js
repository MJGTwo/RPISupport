import React from 'react';
const RED = '#97040c';
const GREY = '#717271';
const pubSafe = () => {
  return (
    <div className="card" style={{ background: RED, paddingBottom: '20px' }}>
      <div className="card-content white-text">
        <span className="card-title">RPI Public Safety</span>
        <p>
          Communication, awareness, and prevention are essential for personal
          safety. At Rensselaer, we take a proactive approach to maintaining a
          safe and secure environment for all.
        </p>
        <br />
        <p>
          The department also provides 24-hour per day, 365-day response to
          life-safety incidents, coordinates internal and external resources to
          assist the{' '}
          <a
            href="http://www.rpi.edu/dept/public_safety/emergency/index.html"
            style={{ color: GREY }}
          >
            management of critical incidents
          </a>
          , and conducts{' '}
          <a
            href="http://www.rpi.edu/dept/public_safety/safety/personal.html"
            style={{ color: GREY }}
          >
            {}awareness programs
          </a>{' '}
          to proactively assist its community members in the maintenance of
          personal safety.
        </p>
      </div>
      <div className="card-action">
        <a
          href="http://www.rpi.edu/dept/public_safety/"
          style={{ color: GREY, fontWeight: 'bold' }}
        >
          Click for website
        </a>
      </div>
    </div>
  );
};

export default pubSafe;
