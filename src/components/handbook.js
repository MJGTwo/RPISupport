import React from 'react';
import Card from './Card';
const Handbook = () => {
  return (
    <Card
      title={
        'Rensselaer Handbook of Student Rights and Responsibilities (2014-2016)'
      }
      text={[
        `Rensselaer admits qualified students without regard to race, color,
        religion, sex, pregnancy, sexual orientation, gender identity, gender
        expression, age, marital status, national origin, citizenship status,
        disability, military status, veteran status, prior criminal
        convictions, genetic information, genetic predisposition, domestic
        violence victim, or any other basis prohibited by law.`,
        `Rensselaer expects students and members of the campus community to
        honor and uphold individuals’ right to their safety in their personal
        identity and the expression of that identity within the bounds of both
        the law and mutual respect for individual differences inherent to the
        Institute community.`,
        `Rules and regulations, as described in the current The Rensselaer
        Handbook of Student Rights and Responsibilities, are further
        conditions of occupancy for all residents in campus housing.`
      ]}
      url="http://rpi.edu/dept/doso/resources/judicial/docs/2014-2016RPIHandbookofStudentRightsandResponsibilitiesAUGUST2014.pdf"
    />
  );
};

export default Handbook;
