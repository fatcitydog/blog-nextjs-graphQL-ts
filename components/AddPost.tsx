import styled from "styled-components";
import { useState } from "react";
import { BsFillPatchPlusFill, BsXLg } from "react-icons/bs";

import PostForm from "./PostForm";
import Modal from "./Layout/Modal";

const Icon = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

const PlusIcon = styled(BsFillPatchPlusFill)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const LargeCloseIcon = styled(BsXLg)`
  transform: scale(1.5);
  position: absolute;
  right: 3rem;
  top: 3rem;
`;

export default function AddPost({ setPosts }: any) {
  const [cardOpen, setCardOpen] = useState(false);
  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <>
      {cardOpen && (
        <Modal
          action={handleCardOpen}
          context={<PostForm handleCardOpen={handleCardOpen} />}
        />
      )}
      {!cardOpen && (
        <Icon onClick={handleCardOpen}>
          <PlusIcon />
        </Icon>
      )}
    </>
  );
}
