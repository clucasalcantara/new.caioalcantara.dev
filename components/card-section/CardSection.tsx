import styled from "styled-components";

import { Card } from "../card";
import type { CardProps } from "../card/Card";

const Wrapper = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkpink};
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

type SectionProps = {
  title: string;
  cards: any[];
};

const CardSection = ({ title, cards = [] }: SectionProps) => (
  <Wrapper>
    <SectionTitle>{title}</SectionTitle>
    <CardsWrapper>
      {cards?.map((card: CardProps) => (
        <Card key={card.slug} title={card.title} categories={card.categories} />
      ))}
    </CardsWrapper>
  </Wrapper>
);

export default CardSection;
