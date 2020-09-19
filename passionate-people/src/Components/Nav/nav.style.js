import styled from 'styled-components';
import PassionatePeopleLogo from '../../assets/Logo.png';
export const Nav = styled.nav`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Logo = styled(PassionatePeopleLogo)`
  margin-left: 1.5rem;
`;
export const NavigationItems = styled.ul`
  grid-column: -1;
  margin-right: 1.5rem;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
export const NavigationItem = styled.li`
  font-size: 1.2rem;
  color: var(--primaryBlack);
`;
