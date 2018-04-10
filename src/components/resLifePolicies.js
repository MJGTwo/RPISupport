import React from 'react';
const RED = '#97040c';
const Policies = () => {
  return (
    <div className="card" style={{ background: RED, paddingBottom: '40px' }}>
      <div className="card-content white-text">
        <span className="card-title">Student Living & Learning Policies</span>
        <p>
          It is Rensselaer's position that participation in community living and
          responsibility are of vital importance in the overall scheme of
          education. Therefore, students must assume the responsibilities
          outlined here, as well as abide by all local, state, and federal laws.
        </p>
      </div>
      <div className="card-action">
        <a href="http://reslife.rpi.edu/update.do?catcenterkey=20">
          Click for website
        </a>
      </div>
    </div>
  );
};

export default Policies;
