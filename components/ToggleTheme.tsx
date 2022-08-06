import styled from "styled-components";

import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const ToggleIcon = styled.span`
  font-size: 30px;
  color: white;
  vertical-align: middle;
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  @media screen and (min-width: 1000px) {
    top: 1.5rem;
    right: 10rem;
  }
`;

export default function ToggleTheme({ toggleTheme, isLight }: any) {
  return (
    <>
      {isLight ? (
        <ToggleIcon>
          <BsToggleOff onClick={toggleTheme} />
        </ToggleIcon>
      ) : (
        <ToggleIcon>
          <BsToggleOn onClick={toggleTheme} />
        </ToggleIcon>
      )}
    </>
  );
}
