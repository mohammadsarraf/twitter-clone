import styled from 'styled-components';
import { FaPiedPiperAlt, FaUserAlt, FaLock  } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';

export const Login = styled.div`
  /* Apply the custom font to all elements */
  body {
    font-family: 'Playfair-Display';
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  font-family: 'Roboto', sans-serif; /* Apply the Roboto font */
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.5);
  transform-origin: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogoIcon = styled(FaPiedPiperAlt)`
  font-size: 48px; /* Increase this value to make the logo bigger */
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Icon = styled(FaPiedPiperAlt)`
  font-size: 24px;
  margin-right: 10px; /* Add some spacing between the icon and input */
`;

export const FormInput = styled.input`
  flex: 1; /* Fill the remaining width of the container */
  padding: 8px;
  color: white;
  border: 1px solid transparent; /* Set the border to transparent */
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  font-family: 'Playfair-Display';
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  width: 200px; /* Add your desired width */
  background: linear-gradient(45deg, #007bff, #f51a0a); /* Replace #00ff00 with your desired second color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

export const Options = styled.div`
  color: white;
  margin-top: 0px;
  text-align: right; /* Align text to the right */
  width: 100%; /* Ensure full width */
  margin-bottom: 5%;
`;

export const OptionsLink = styled.a`
  font-size: 60%;
  color: #007bff;
  text-decoration: none;
  // margin-bottom: 0px;
`;

export const OrLine = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const OrLineHr = styled.hr`
  flex: 1;
  margin: 0;
  border: 0;
  border-top: 1px solid #ccc;
`;

export const OrLineText = styled.span`
  color: white;
  margin: 0 10px;
`;

export const SocialIcons = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GoogleCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #db4437;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export const FacebookCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b5998;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export const TwitterCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1da1f2;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export const InputContainerUsername = styled.div`
  display: flex;
  // font-color: white;
  border-bottom: 1px solid;
  width: 100%;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: flex-start; /* Change this to align items to the right */
`;

export const InputContainerPassword = styled.div`
  display: flex;
  border-bottom: 1px solid;
  width: 100%;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: flex-start; /* Change this to align items to the right */
`;

export const FormInputLabel = styled.label`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
  font-family: 'Playfair-Display';
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const IconUser = styled(FaUserAlt)`
  font-size: 12px;
  // margin-bottom: 10px;
`;

export const IconPass = styled(FaLock)`
  font-size: 12px;
  // margin-bottom: 10px;
`;
