import React from 'react';
import Card from './Card';
const TitleIX = () => {
  return (
    <Card
      title={'Title IX Violations'}
      text={[
        `  Title IX, the 1972 Education Amendments to the Civil Rights Act of
1964, states "No person in the United States shall, on the basis of
sex, be excluded from participation in, be denied the beneftis of,
or be subjected to discrimintion under any education program or
activity receiving federal financial assistance.`,
        `        Sexual Misconduct, including but not limited to Sexual Assault,
        Sexual Violence, Intimate Partner Violence, Sexual Harassment and
        Stalking, is a form of illegal discrimination in that it denies or
        limits an individual's ability to participate in or benefit from the
        Institute's programs or activities.`
      ]}
      url="https://sexualviolence.rpi.edu/"
    />
  );
};

export default TitleIX;
