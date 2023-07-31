import styled from 'styled-components';

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
  display: center;
  max-width: 100px;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

export const Options = styled.div`

  color: white;
  margin-top: 15px;
`;

export const OptionsLink = styled.a`
  font-size: 12px;
  color: #007bff;
  text-decoration: none;
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
