import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface OwnPostType {
  title: string;
  url: string;
  description: string;
  createdAt: number;
  author: string;
}

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

export default function PostForm({ handleCardOpen }: any) {
  const [savePost, setSavePost] = useState<OwnPostType[]>([]);
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
        createdAt: Date.now(),
        author: "Unknown",
      };
      setSavePost((prev) => [...prev, newData]);
      handleCardOpen();
    } else {
      console.log("something went wrong!");
    }
  };

  const handleLocalStorage = (posts: OwnPostType[]) => {
    localStorage.setItem("post", JSON.stringify(posts));
  };

  useEffect(() => {
    handleLocalStorage(savePost);
  }, [savePost]);

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input ref={titleRef} type="text" placeholder="Title" />
      <Input ref={urlRef} type="text" placeholder="URL" />
      <Input ref={descriptionRef} type="text" placeholder="Description" />
      <Button type="submit">upload</Button>
    </Form>
  );
}
