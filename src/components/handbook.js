import React from 'react';
const RED = '#97040c';
const Handbook = () => {
  return (
    <div className="card" style={{ background: RED }}>
      <div className="card-content white-text">
        <span className="card-title">
          Rensselaer Handbook of Student Rights and Responsibilities (2014-2016)
        </span>
        <p>
          Rensselaer admits qualified students without regard to race, color,
          religion, sex, pregnancy, sexual orientation, gender identity, gender
          expression, age, marital status, national origin, citizenship status,
          disability, military status, veteran status, prior criminal
          convictions, genetic information, genetic predisposition, domestic
          violence victim, or any other basis prohibited by law.
        </p>
        <br />
        <p>
          Rensselaer expects students and members of the campus community to
          honor and uphold individuals’ right to their safety in their personal
          identity and the expression of that identity within the bounds of both
          the law and mutual respect for individual differences inherent to the
          Institute community.
        </p>
        <br />
        <p>
          Rules and regulations, as described in the current The Rensselaer
          Handbook of Student Rights and Responsibilities, are further
          conditions of occupancy for all residents in campus housing.
        </p>
      </div>
      <div className="card-action">
        <a href="http://rpi.edu/dept/doso/resources/judicial/docs/2014-2016RPIHandbookofStudentRightsandResponsibilitiesAUGUST2014.pdf">
          Click for website
        </a>
      </div>
    </div>
  );
};

export default Handbook;
