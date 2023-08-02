import React, { useState } from 'react';
import '@fontsource/roboto';

import {
  LoginPageContainer,
  Card,
  Logo,
  LoginForm,
  Icon,
  InputContainerUsername,
  InputContainerPassword,
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
          
          <InputContainerUsername>
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
          </InputContainerUsername>
          <InputContainerPassword>
            <FormInputLabel>Password</FormInputLabel>
            <InputRow>
              <IconPass />
              <FormInput
                type="password" // Corrected the type to 'password'
                placeholder="Type your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Corrected the state to 'password'
                required
              />
            </InputRow>
          </InputContainerPassword>

          <Options>
            <OptionsLink href="#">Forgot Password?</OptionsLink>
          </Options>

          <SubmitButton type="submit">Login</SubmitButton>

        </LoginForm>

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
