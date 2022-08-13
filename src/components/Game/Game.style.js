import styled from 'styled-components';

export const GameWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  outline: none;
  `;

export const Score = styled.h1`
  background: linear-gradient(to left, #753ad5, #d53a9d);
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
`;