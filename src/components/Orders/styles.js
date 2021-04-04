import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 42px;

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 658px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const cardStatusVariants = {
  PREPARING: css`
    background: #F6A609;
    color: #FFF;

    header small {
      background: #FFF;
      color: #0A100D;
    }

    select {
      border-color: #FFF
    }
  `,

  DONE: css`
    background: #2AC769;
    color: #FFF;

    header small {
      background: #FFF;
      color: #0A100D;
    }

    select {
      border-color: #FFF
    }
  `,
};

export const Card = styled.div`
  background: #FFF;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 500;
      font-size: 18px;
    }

    small {
      padding: 4px 8px;
      background: #CCC;
      border-radius: 5px;
      color: #FFF;
      font-weight: bold;
      font-size: 12px;
    }
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }

  select {
    margin-top: 8px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #CCC;
    background: #FFF;
    font-size: 14px;
    height: 45px;
    padding: 0 8px;
  }

  ${({ status }) => cardStatusVariants[status] || null }
`;