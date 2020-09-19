import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 1rem 3rem;
  background-color: var(--primaryGreen);
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.2s;
  &::hover {
    background-color: var(--secondaryGreen);
  }
`;
export const SecondaryButton = styled.button`
  padding: 1rem 3rem;
  background-color: var(--primaryPurple);
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.4rem;
  transition: all 0.2s;
  &::hover {
    background-color: var(--primaryGreen);
  }
`;
