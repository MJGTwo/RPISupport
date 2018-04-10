import React from 'react';
import Card from './Card';

const healthCenter = () => {
  return (
    <Card
      title={'Student Health Center'}
      text={[
        `The mission of the Student Health Center is to keep students healthy
          so that they may achieve their academic and personal goals. We provide
          accessible, cost-effective, current evidence-based treatment for acute
          and chronic physical and behavioral health problems, and prevention
          focused health education. We conduct public health screening campaigns
          and manage health crises and outbreaks. We strive to provide these
          services in a way that engages the student as an adult consumer of
          healthcare.`,
        <ul>
          <li>Medical or Fire Emergency: 911</li>
          <li>RPI Public Safety: 518-276-6611</li>
          <li>RPI Public Safety (non emergency): 518-276-6656</li>
          <li>24 Hour Nurse: 866-315-8756</li>
          <li>Sexual Assault (24-hour): 518-271-3257</li>
          <li>Suicide Prevention: 800-273-8255</li>
        </ul>
      ]}
      url="http://studenthealth.rpi.edu/"
    />
  );
};

export default healthCenter;
