import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
export const Header = styled.header`
  height: 90vh;
  display: grid;
  grid-gap: 2.5rem;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
`;
export const HeaderContent = styled.div`
  margin-left: 6rem;
  margin-top: 5rem;
`;
export const HeaderImages = styled.div`
  position: relative;
`;

export const HeaderContentHeading = styled.h1`
  font-size: 5rem;
  color: #4ccca7;
  font-weight: 100;
  word-wrap: break-word;
  margin-top: 2rem;
  letter-spacing: 0.2rem;
`;
export const HeaderContentText = styled.p`
  font-size: ${(props) => (props.secondParagraph ? '1.9rem' : '2rem')};
  word-wrap: break-word;
  margin-top: ${(props) => (props.secondParagraph ? '2rem' : '1rem')};
`;
export const HeaderImageOne = styled(motion.img)`
  transform: rotate(5deg);
  position: absolute;
  width: 100%;
  left: 20%;
  top: 10%;
  max-width: 100%;
  outline: 1rem solid #ffffff;
  width: 50%;
  height: auto;
  margin-left: 3rem;
  box-shadow: 0 2rem 2rem #000;
  ${(props) =>
    props.animationComplete &&
    css`
      transform: rotate(5deg) !important;
      transition: all 0.2s;
    `}
`;
export const HeaderImageTwo = styled(motion.img)`
  z-index: 1;
  transform: rotate(-5deg);
  position: absolute;
  left: 20%;
  top: 45%;
  width: 100%;
  max-width: 100%;
  width: 65%;
  height: auto;
  margin-left: 3rem;
  outline: 1rem solid #ffffff;
  box-shadow: 0 2rem 2rem #000;
  ${(props) =>
    props.animationComplete &&
    css`
      transform: rotate(-5deg) !important;
      transition: all 0.2s;
    `}
`;
