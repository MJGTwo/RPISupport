import React from 'react';
import Card from './Card';
const Policies = () => {
  return (
    <Card
      title={'Student Living & Learning Policies'}
      text={[
        `It is Rensselaer's position that participation in community living and
        responsibility are of vital importance in the overall scheme of
        education. Therefore, students must assume the responsibilities
        outlined here, as well as abide by all local, state, and federal laws.`
      ]}
      url="http://reslife.rpi.edu/update.do?catcenterkey=20"
    />
  );
};

export default Policies;
