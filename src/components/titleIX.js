import React from 'react';
const RED = '#97040c';
const TitleIX = () => {
  return (
    <div>
      <div className="card" style={{ background: RED }}>
        <div className="card-content white-text">
          <span className="card-title">Title IX Violations</span>
          <p>
            Title IX, the 1972 Education Amendments to the Civil Rights Act of
            1964, states "No person in the United States shall, on the basis of
            sex, be excluded from participation in, be denied the beneftis of,
            or be subjected to discrimintion under any education program or
            activity receiving federal financial assistance."
          </p>
          <br />
          <p>
            Sexual Misconduct, including but not limited to Sexual Assault,
            Sexual Violence, Intimate Partner Violence, Sexual Harassment and
            Stalking, is a form of illegal discrimination in that it denies or
            limits an individual's ability to participate in or benefit from the
            Institute's programs or activities.
          </p>
        </div>
        <div className="card-action">
          <a href="https://sexualviolence.rpi.edu/">Click for website</a>
        </div>
      </div>
    </div>
  );
};

export default TitleIX;
