import React, { useState } from 'react';
import GlobalStyle from './globalStyle';
import PassionatePeopleLogo from './assets/Logo.png';
import HeaderImage from './assets/headerImage1.jpg';
import HeaderGif from './assets/headerImage2.gif';
import {
  Header,
  HeaderContent,
  HeaderContentHeading,
  HeaderContentText,
  HeaderImageOne,
  HeaderImageTwo,
  HeaderImages,
} from './Components/Header/header.style';
import { PrimaryButton, SecondaryButton } from './Components/Button/index';
import {
  Logo,
  Nav,
  NavigationItem,
  NavigationItems,
} from './Components/Nav/nav.style';
const imageVariants = {
  hover: {
    scale: 1.2,
    transform: `rotate(${0}deg)`,
    transition: {
      duration: 0.3,
      type: 'tween',
    },
  },
};
const gifVariants = {
  hover: {
    scale: 1.2,
    transform: `rotate(${0}deg)`,
    transition: {
      duration: 0.3,
      type: 'tween',
    },
  },
};
const App = () => {
  const [ImageAnimationComplete, setImageAnimationComplete] = useState(false);
  const [GifAnimationComplete, setGifAnimationComplete] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Logo src={PassionatePeopleLogo} />
        <NavigationItems>
          <NavigationItem>Team</NavigationItem>
          <NavigationItem>Services</NavigationItem>
          <NavigationItem>Recommendations</NavigationItem>
          <NavigationItem>Community</NavigationItem>
          <NavigationItem>Jobs</NavigationItem>
          <NavigationItem>
            <PrimaryButton>Contact Us</PrimaryButton>
          </NavigationItem>
        </NavigationItems>
      </Nav>
      <Header>
        <HeaderContent>
          <HeaderContentHeading>
            External Engineering Experts
          </HeaderContentHeading>
          <HeaderContentText>
            We provide you with additional technical capacity to power-up your
            digital transformation journeys with our teams of first-class
            engineers and consultants.
          </HeaderContentText>
          <HeaderContentText secondParagraph>
            Full stack JavaScript Cloud Engineers ready to work with you and
            your teams.
          </HeaderContentText>
          <SecondaryButton>Get in touch now</SecondaryButton>
        </HeaderContent>
        <HeaderImages>
          <HeaderImageOne
            variants={imageVariants}
            animationComplete={ImageAnimationComplete}
            whileHover='hover'
            onHoverEnd={() => setImageAnimationComplete(true)}
            onHoverStart={() => setImageAnimationComplete(false)}
            src={HeaderImage}
          />

          <HeaderImageTwo
            variants={gifVariants}
            animationComplete={GifAnimationComplete}
            whileHover='hover'
            onHoverEnd={() => setGifAnimationComplete(true)}
            onHoverStart={() => setGifAnimationComplete(false)}
            src={HeaderGif}
          />
        </HeaderImages>
      </Header>
    </>
  );
};

export default App;
