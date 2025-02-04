import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Common.css';
import '../styles/Responsive.css';
import '../styles/SkewImg.css';

const SkewImg = ({ image, alt }) => {
  return (
      <div className={`skewContainer`}>
        <div className="skew"></div>
        <img 
          src={image || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='} 
          className="skewImg" 
          alt={alt || 'Skewed image'}
          loading='lazy'
        />
        <div className="skew1"></div>
      </div>
  );
};

SkewImg.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

export default SkewImg;