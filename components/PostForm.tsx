import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { OwnPostType, handleFunction } from "./Interface";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 80%;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 1rem;
  max-width: 30rem;
  border-radius: 3px;
  width: 100%;
  ::placeholder {
    color: silver;
  }
`;

const Button = styled.button`
  padding: 1rem;
  max-width: 30rem;
  width: 100%;
  cursor: pointer;
`;

export default function PostForm({ handleSavePost }: handleFunction) {
  const [saveStatus, setSaveStatus] = useState(false);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const urlRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const titleValue = titleRef.current?.value;
    const urlValue = urlRef.current?.value;
    const descriptionValue = descriptionRef.current?.value;
    if (titleValue && urlValue && descriptionValue) {
      const newData = {
        title: titleValue,
        url: urlValue,
        description: descriptionValue,
        author: "Unknown",
        createdAt: Date.now(),
      };
      handleSavePost(newData);
      setSaveStatus(true);
    } else {
      console.log("something went wrong!");
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input ref={titleRef} type="text" placeholder="Title" />
      <Input ref={urlRef} type="text" placeholder="URL" />
      <Input ref={descriptionRef} type="text" placeholder="Description" />
      <Button type="submit">upload</Button>
      {saveStatus && <div>data saved!</div>}
    </Form>
  );
}
