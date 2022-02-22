import styled from "styled-components";

const Wrapper = styled.div`
  opacity: 0.25;
  animation: bounce 2s infinite alternate;
  -webkit-animation: bounce 2s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(-19.5rem);
    }
    to {
      transform: translateY(-20rem);
    }
  }

  @-webkit-keyframes bounce {
    from {
      transform: translateY(-19.5rem);
    }
    to {
      transform: translateY(-20rem);
    }
  }
`;

const Stripe = styled.div`
  position: fixed;
  left: -20rem;
  top: -3rem;
  width: 300%;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.lightpink},
    ${({ theme }) => theme.colors.darkpink}
  );
  height: 50px;
  transform: rotate(-25deg);
  z-index: 1;
  opacity: 0.7;
`;

const Stripe2 = styled.div`
  position: fixed;
  left: -20rem;
  top: -2rem;
  width: 300%;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.pink},
    ${({ theme }) => theme.colors.darkpink}
  );
  height: 50px;
  transform: rotate(-25deg);
  z-index: 1;
  opacity: 0.6;
`;

const Stripe3 = styled.div`
  position: fixed;
  left: -20rem;
  top: 0;
  width: 300%;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.darkpink},
    ${({ theme }) => theme.colors.pink}
  );
  height: 50px;
  transform: rotate(-25deg);
  z-index: 3;
`;

export const Stripes = () => (
  <Wrapper>
    <Stripe />
    <Stripe2 />
    <Stripe3 />
  </Wrapper>
);
