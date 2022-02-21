import React from 'react';
import { registerBg } from '../../assets';
import { Input, Button, Gap } from '../../components';
import './register.scss';

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={registerBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Fullname" />
        <Gap height={10} />
        <Input label="Email" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={20} />
        <Button title="Register" />
      </div>
    </div>
  );
};

export default Register;
