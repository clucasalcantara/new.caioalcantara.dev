import styled from "styled-components";

import { Card } from "../card";
import type { CardProps } from "../card/Card";

const Wrapper = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2``;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: auto;
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
