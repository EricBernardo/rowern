import styled from 'styled-components/native';

import Input from './../../components/Input'
import Button from './../../components/Button'

export const Container = styled.View`  
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #2d3a4b;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`;

export const LogoutButton = styled(Button)`
  background: #f64c75;
`;