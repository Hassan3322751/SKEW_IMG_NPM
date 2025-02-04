import React from 'react';
import PropTypes from 'prop-types';

const SkewImg = ({
  image,
  alt
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `skewContainer`
  }, /*#__PURE__*/React.createElement("div", {
    className: "skew"
  }), /*#__PURE__*/React.createElement("img", {
    src: image || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    className: "skewImg",
    alt: alt || 'Skewed image',
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "skew1"
  }));
};
SkewImg.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

export { SkewImg as default };
