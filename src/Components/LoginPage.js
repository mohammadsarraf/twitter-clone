import React, { useState } from 'react';
import '@fontsource/roboto';
import {
  LoginPageContainer,
  Card,
  Logo,
  LoginForm,
  FormInput,
  SubmitButton,
  Options,
  OptionsLink,
  OrLine,
  OrLineHr,
  OrLineText,
  SocialIcons,
  GoogleCircle,
  FacebookCircle,
  TwitterCircle,
} from './LoginPageStyles';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';


const LoginPage = ({ onSignIn, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSignIn function with the email and password
    onSignIn(email, password);
  };

  return (
    <LoginPageContainer>
      <Card>
        <h2>Login Page</h2>
        <Logo>
          {/* Replace this with your desired logo/icon */}
          <img src="path_to_your_logo.png" alt="Logo" />
        </Logo>
        <LoginForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Username/Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
        <Options>
          <p>
            <OptionsLink href="#">Forgot password?</OptionsLink> |{' '}
            <OptionsLink href="#">New user? Register</OptionsLink>
          </p>
        </Options>
        <OrLine>
          <OrLineHr />
          <OrLineText>or login with:</OrLineText>
          <OrLineHr />
        </OrLine>
        <SocialIcons>
          {/* Use the customized icons for Google, Facebook, and Twitter */}
          <a href="#">
            <GoogleCircle>
              <FaGoogle />
            </GoogleCircle>
          </a>
          <a href="#">
            <FacebookCircle>
              <FaFacebook />
            </FacebookCircle>
          </a>
          <a href="#">
            <TwitterCircle>
              <FaTwitter />
            </TwitterCircle>
          </a>
        </SocialIcons>
      </Card>
    </LoginPageContainer>
  );
};

export default LoginPage;