import styled from "styled-components";

const ColumnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid silver;
`;

export const FooterLink = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <ColumnBox>
      <FooterLink target="_blank" href="https://yik-portfolio.vercel.app/">
        More Projects
      </FooterLink>
      <FooterLink
        target="_blank"
        href="https://www.linkedin.com/in/yik-tung-yeung"
      >
        Connect with me
      </FooterLink>
    </ColumnBox>
  );
}
