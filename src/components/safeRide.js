import React from 'react';
import Card from './Card';
const safeRide = () => {
  return (
    <Card
      title={'RPI Safe Ride'}
      text={[
        `     Safe Ride at Rensselaer provides students with a free
        evening/late-night transportation option within a specified service
        area. The program will operate seven days a week from 6:45 p.m.–3:00
        a.m. with the exception of holidays, academic breaks, and inclement
        weather.`
      ]}
      url={['https://info.rpi.edu/safe-ride']}
    />
  );
};

export default safeRide;
