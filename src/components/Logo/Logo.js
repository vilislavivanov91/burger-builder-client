import React from 'react';

import './Logo.css';

import logoSrc from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className="Logo">
    <img src={logoSrc} alt="BrandName" />
  </div>
);

export default logo;
