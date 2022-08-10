import { useRef, useState } from "react";
import styled from "styled-components";

import { handleFunction } from "./Interface";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 80%;
`;

const Label = styled.label`
  max-width: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 1rem;
  max-width: 30rem;
  border-radius: 3px;
  width: 100%;
  border: none;
  border-bottom: 1px solid silver;
  ::placeholder {
    color: silver;
  }
`;

const Button = styled.button`
  padding: 1rem;
  max-width: 30rem;
  width: 100%;
  border: silver;
  cursor: pointer;
`;

export default function PostForm({ handleSavePost }: handleFunction) {
  const [updatedPost, setUpdatedPost] = useState(false);
  
  const titleRef = useRef<HTMLInputElement | null>(null);
  const urlRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let titleValue = titleRef.current?.value;
    let urlValue = urlRef.current?.value;
    let descriptionValue = descriptionRef.current?.value;
    if (titleValue && urlValue && descriptionValue) {
      const newData = {
        title: titleValue,
        url: urlValue,
        description: descriptionValue,
        author: "Unknown",
        createdAt: Date.now(),
      };
      handleSavePost(newData);
      setUpdatedPost(true);
    } else {
      console.log("something went wrong!");
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Title: <Input ref={titleRef} type="text" placeholder="Youtuber" />
      </Label>
      <Label>
        URL:
        <Input
          ref={urlRef}
          type="text"
          placeholder="https://www.youtube.com/"
        />
      </Label>
      <Label>
        Description:
        <Input
          ref={descriptionRef}
          type="text"
          placeholder="A video Platform"
        />
      </Label>
      {!updatedPost ? (
        <Button type="submit">upload</Button>
      ) : (
        <div>data saved!</div>
      )}
    </Form>
  );
}
