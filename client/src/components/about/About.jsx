import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAbout } from '../../actions/about';
import { Link } from 'react-router-dom';

const initState = {
  title: '',
  para1: '',
  para2: '',
  para3: '',
};

const About = ({ getAbout, data, loading }) => {
  const [aboutState, setAboutState] = useState(initState);
  const { title, para1, para2, para3 } = aboutState;

  useEffect(() => {
    getAbout();

    if (loading) return null;

    const [about] = data;
    setAboutState({
      title: about.title,
      para1: about.para1,
      para2: about.para2,
      para3: about.para3,
    });
  }, [loading]);

  return (
    <div className="about">
      <div className="about__header">
        <div className="about__header-title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="about__content">
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
      </div>
      <div className="about__contact">
        <p>For all enquiries, please email us</p>
        <Link to="/contact" className="btn btn-secondary">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

About.propTypes = {
  getAbout: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  data: state.about.data,
  loading: state.about.loading,
});

export default connect(mapStateToProps, { getAbout })(About);
