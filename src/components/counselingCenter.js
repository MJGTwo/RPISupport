import React from 'react';
const RED = '#97040c';
const counselingCenter = () => {
  return (
    <div className="card" style={{ background: RED }}>
      <div className="card-content white-text">
        <span className="card-title">Student Counseling Center</span>
        <p>
          We believe that everyone could benefit from counseling from an
          objective, knowledgeable, and caring person at some time. For some of
          us, this time occurs during the college years. The goal of Counseling
          Services is to help students maximize their sense of well being as
          well as their academic, personal and social growth. Counseling
          Services staff are available in case of a crisis on evenings and
          weekends. Call Public Safety at 518-276-6611 and ask to speak with the
          on-call counselor.
        </p>
      </div>
      <div className="card-action">
        <a href="http://studenthealth.rpi.edu/counseling">Click for website</a>
      </div>
    </div>
  );
};

export default counselingCenter;
