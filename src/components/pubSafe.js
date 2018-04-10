import React from 'react';
import Card from './Card';
const GREY = '#717271';
const pubSafe = () => {
  return (
    <Card
      title={'RPI Public Safety'}
      text={[
        `Communication, awareness, and prevention are essential for personal
        safety. At Rensselaer, we take a proactive approach to maintaining a
        safe and secure environment for all.`,
        `The department also provides 24-hour per day, 365-day response to
        life-safety incidents, coordinates internal and external resources to
        assist the
        ${(
          <a
            href="http://www.rpi.edu/dept/public_safety/emergency/index.html"
            style={{ color: GREY }}
          >
            management of critical incidents
          </a>
        )}

        , and conducts
        ${(
          <a
            href="http://www.rpi.edu/dept/public_safety/safety/personal.html"
            style={{ color: GREY }}
          >
            {' '}
            awareness programs
          </a>
        )}
        to proactively assist its community members in the maintenance of
        personal safety.`
      ]}
      url="http://www.rpi.edu/dept/public_safety/"
    />
  );
};

export default pubSafe;
