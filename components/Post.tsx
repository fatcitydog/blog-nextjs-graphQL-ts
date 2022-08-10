import styled from "styled-components";

import { timeDifferenceForDate } from "../utils/timeDifference";
import { Header, ColFlexBox, Text } from "../styles/globalStyles";
import { useFetchURL } from "./Hooks/useFetchURL";

const Box = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid silver;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    flex-direction: row;
    align-items: space-between;
  }
`;

const Image = styled.img`
  width: 100%;

  max-width: 30rem;
  border-radius: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-right: 2rem;
  }
`;
const TextBox = styled(ColFlexBox)`
  width: 100%;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    height: 20rem;
  }
`;

const RowBox = styled(ColFlexBox)`
  flex-direction: row;
  justify-content: space-between;
`;

const PostInfo = styled(Text)`
  color: grey;
  font-size: 0.8rem;
`;

export default function Post({ post }: any) {
  
  const imageURL = useFetchURL(post.url);

  return (
    <Box>
      <Image src={imageURL ? imageURL : "/error.png"} />
      <TextBox>
        <Header>{post.title}</Header>
        <RowBox>
          <PostInfo>{post.author}</PostInfo>
          <PostInfo>{timeDifferenceForDate(post.createdAt)}</PostInfo>
        </RowBox>
        <Text>{post.text}</Text>
      </TextBox>
    </Box>
  );
}
