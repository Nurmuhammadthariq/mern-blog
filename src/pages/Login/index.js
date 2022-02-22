import React from 'react';
import { Link } from 'react-router-dom';
import { loginBg } from '../../assets';
import { Input, Button, Gap } from '../../components';

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={20} />
        <Link to="/register">
          <p className="text-anchor">Belum punya akun?, Register </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
