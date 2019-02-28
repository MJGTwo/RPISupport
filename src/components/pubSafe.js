import React from 'react';
import Card from './Card';
const LIGHTGREY = '#a0a3a0';
const pubSafe = () => {
  return (
    <Card
      title={'RPI Public Safety'}
      text={[
        <p>
          Communication, awareness, and prevention are essential for personal
          safety. At Rensselaer, we take a proactive approach to maintaining a
          safe and secure environment for all.
        </p>,
        <p>
          The department also provides 24-hour per day, 365-day response to
          life-safety incidents, coordinates internal and external resources to
          assist the{' '}
          <a
            href="http://www.rpi.edu/dept/public_safety/emergency/index.html"
            style={{ color: LIGHTGREY, textDecoration: 'underline' }}
          >
            management of critical incidents
          </a>
          , and conducts{' '}
          <a
            href="http://www.rpi.edu/dept/public_safety/safety/personal.html"
            style={{ color: LIGHTGREY, textDecoration: 'underline' }}
          >
            awareness programs
          </a>{' '}
          to proactively assist its community members in the maintenance of
          personal safety.
        </p>
      ]}
      url={['http://www.rpi.edu/dept/public_safety/']}
    />
  );
};

export default pubSafe;
