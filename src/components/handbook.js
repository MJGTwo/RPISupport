import React from 'react';
import Card from './Card';
import doc1 from '../resources/handbook17.pdf';
import doc2 from '../resources/handbook14-16.pdf';
const Handbook = () => {
  return (
    <Card
      title={
        'Rensselaer Handbook of Student Rights and Responsibilities (2017-)'
      }
      text={[
        `The Rensselaer Handbook of Student Rights and Responsibilities (Handbook) is a reflection of the values,
beliefs and expectations we have as a community of scholars. The Handbook lays out both the rights and the
responsibilities of students at Rensselaer to help ensure mutual respect, integrity, and an environment where
all students can effectively pursue their educational goals.`,
        `
All Rensselaer students are expected to comply with the rules and regulations set forth in the Handbook, as
well as with the requirements set forth in other Institute policies and rules. Compliance with the requirements
of this Handbook are also conditions of occupancy for all residents in campus housing – in addition to the
contractual terms set forth in room and board contracts.`
      ]}
      url={[
        { name: 'handbook17.pdf', file: doc1 },
        { name: 'handbook14-16.pdf', file: doc2 }
      ]}
    />
  );
};

export default Handbook;
