// src/components/LandingPage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Create a keyframe animation for a slight shake
const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-2px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(2px);
  }
`;

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://t3.ftcdn.net/jpg/01/83/50/32/360_F_183503230_heDoLySnwt4W968RVTJOf7LFHbkZdCHA.jpg'), linear-gradient(to bottom, #0074D9, #00A3FF); /* Replace with your image file path */
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${shake} 5s ease infinite; /* Adjust the animation duration */
`;

const Text = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Text>Aryan Pokharel</Text>
    </LandingPageContainer>
  );
};

export default LandingPage;
