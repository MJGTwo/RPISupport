import React from 'react';
const RED = '#97040c';
const healthCenter = () => {
  return (
    <div className="card" style={{ background: RED, paddingBottom: '20px' }}>
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
        <br />
        <ul>
          <li>Medical or Fire Emergency: 911</li>
          <li>RPI Public Safety: 518-276-6611</li>
          <li>RPI Public Safety (non emergency): 518-276-6656</li>
          <li>24 Hour Nurse: 866-315-8756</li>
          <li>Sexual Assault (24-hour): 518-271-3257</li>
          <li>Suicide Prevention: 800-273-8255</li>
        </ul>
      </div>
      <div className="card-action">
        <a href="http://studenthealth.rpi.edu/">Click for website</a>
      </div>
    </div>
  );
};

export default healthCenter;
