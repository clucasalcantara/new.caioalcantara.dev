import styled from "styled-components";

type TagProps = {
  name: string;
};

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.2rem;
  margin: 0.3rem;
  background-color: ${({ theme }) => theme.colors.tag};
  span {
    text-align: center;
    text-transform: uppercase;
    font-size: 10pt;
    font-weight: bold;
  }
`;

const Tag = ({ name }: TagProps) => (
  <TagWrapper>
    <span>{name}</span>
  </TagWrapper>
);

export default Tag;
