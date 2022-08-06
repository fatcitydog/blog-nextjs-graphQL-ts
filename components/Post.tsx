import styled from "styled-components";

import { timeDifferenceForDate } from "../utils/timeDifference";
import { Header, ColFlexBox, Text } from "../styles/globalStyles";

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
  return (
    <Box>
      <Image src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" />
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
