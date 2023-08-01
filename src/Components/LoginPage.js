import React, { useState } from 'react';
import '@fontsource/roboto';

import {
  LoginPageContainer,
  Card,
  Logo,
  LoginForm,
  Icon,
  InputContainer,
  FormInput,
  FormInputLabel,
  InputRow,
  IconWrapper,
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
  LogoIcon,
  IconUser,
  IconPass,
  GlobalStyles,
} from './LoginPageStyles';
import { FaFacebook, FaGoogle, FaTwitter, FaUserAlt } from 'react-icons/fa';

const LoginPage = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onSignIn function with the email and password
    await onSignIn(email, password);

    // Since the navigation will be handled in the App component, no need to navigate here.
    // After successful login, the App component will redirect to the homepage.
  };

  return (
    <LoginPageContainer className='Login'>
      <Card>
        <Logo>
          <LogoIcon />
        </Logo>
        <LoginForm onSubmit={handleSubmit}>
        <InputContainer className='Username-input'>
            <FormInputLabel>Username</FormInputLabel>
            <InputRow>
              <IconUser />
              <FormInput
                type="text"
                placeholder="Type your Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputRow>
          </InputContainer>
          <InputContainer className='Password-input'>
            <FormInputLabel>Password</FormInputLabel>
            <InputRow>
              <IconPass />
              <FormInput
                type="text"
                placeholder="Type your Password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputRow>
          </InputContainer>

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
