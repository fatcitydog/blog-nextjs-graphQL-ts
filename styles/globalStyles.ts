import styled, { createGlobalStyle } from "styled-components";

const theme = {
  background: String,
  text: String,
  color: String,
};

type ThemeType = typeof theme;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

body{
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: 'Familjen Grotesk', sans-serif;
  transition: all 0.50s linear;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`;

export const Header = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Text = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ColFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoreBox = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;
