import React from 'react';
const RED = '#97040c';
const healthCenter = () => {
  return (
    <div className="card" style={{ background: RED }}>
      <div className="card-content white-text">
        <span className="card-title">Student Health Center</span>
        <p>
          The mission of the Student Health Center is to keep students healthy
          so that they may achieve their academic and personal goals. We provide
          accessible, cost-effective, current evidence-based treatment for acute
          and chronic physical and behavioral health problems, and prevention
          focused health education. We conduct public health screening campaigns
          and manage health crises and outbreaks. We strive to provide these
          services in a way that engages the student as an adult consumer of
          healthcare.
        </p>
      </div>
      <div className="card-action">
        <a href="http://studenthealth.rpi.edu/">Click for website</a>
      </div>
    </div>
  );
};

export default healthCenter;
