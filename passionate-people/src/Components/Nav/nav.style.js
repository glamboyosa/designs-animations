import styled from 'styled-components';
export const Nav = styled.nav`
  margin-top: 4rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Logo = styled.img`
  margin-left: 6rem;
  width: 70%;
`;
export const NavigationItems = styled.ul`
  grid-column: -1;
  margin-right: 1.5rem;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;
export const NavigationItem = styled.li`
  font-weight: lighter;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: var(--primaryBlack);
  cursor: pointer;
`;
