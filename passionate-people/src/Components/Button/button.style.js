import styled from 'styled-components';
export const PrimaryButton = styled.button`
  padding: 1rem 3rem;
  margin-top: -0.5rem;
  background-color: #44b896;
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.2s;
  &:hover {
    background-color: #4ccca7;
  }
`;
export const SecondaryButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: #392d63;
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.4rem;
  transition: all 0.2s;
  &:hover {
    background-color: #44b896;
  }
`;
