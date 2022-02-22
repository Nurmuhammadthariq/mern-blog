import React from 'react';
import {
  Logo,
  logoCoding,
  facebook,
  github,
  instagram,
  twitter,
  youtube,
} from '../../../assets';
import './footer.scss';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon-medsos" />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="logo" src={logoCoding} alt="" />
      </div>
      <div className="social-wrapper">
        <Icon img={facebook} />
        <Icon img={github} />
        <Icon img={instagram} />
        <Icon img={twitter} />
        <Icon img={instagram} />
      </div>
    </div>
  );
};

export default Footer;
