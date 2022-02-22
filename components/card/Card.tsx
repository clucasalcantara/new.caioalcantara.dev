import styled from "styled-components";
import { Tag } from "./partials";

export type CardProps = {
  title: string;
  slug?: string;
  categories?: string[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.4rem;
  opacity: 0.75;
  background-color: ${({ theme }) => theme.colors.card};
  max-width: 20rem;
  max-height: 150px;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(
      ${({ theme }) => theme.colors.darkpink},
      ${({ theme }) => theme.colors.pink}
    );
  }
  h3 {
    margin: 0;
    text-wrap: wrap;
    font-size: 14pt;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
`;

const Card = ({ title, categories }: CardProps) => (
  <Wrapper>
    <h3>{title}</h3>
    <TagsWrapper>
      {categories?.map((category) => (
        <Tag key={category} name={category} />
      ))}
    </TagsWrapper>
  </Wrapper>
);

export default Card;
