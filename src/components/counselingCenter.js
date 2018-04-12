import React from 'react';
import Card from './Card';
const counselingCenter = () => {
  return (
    <Card
      title={'Student Counseling Center'}
      text={[
        `We believe that everyone could benefit from counseling from an
      objective, knowledgeable, and caring person at some time. For some of
      us, this time occurs during the college years. The goal of Counseling
      Services is to help students maximize their sense of well being as
      well as their academic, personal and social growth. Counseling
      Services staff are available in case of a crisis on evenings and
      weekends. Call Public Safety at 518-276-6611 and ask to speak with the
      on-call counselor.`
      ]}
      url={['http://studenthealth.rpi.edu/counseling']}
    />
  );
};

export default counselingCenter;
