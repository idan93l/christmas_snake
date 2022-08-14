import styled from "styled-components";

export const GameIntroduction = styled.canvas`
  height: 340px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 3px solid whitesmoke;
  border-radius: 5px;
  background-color: rgba(85, 4, 4, 0.826);
  outline: 3px solid rgb(192,20,58);
  box-shadow: 0 0 0 6px rgb(105,168,151);
  font-size: 14px;
  color: whitesmoke;

  @media (min-width: 800px) { 
    height: 500px;
    width: 500px;
    display: none;
  }
`

export const GameWrapper = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  outline: none;
`;

export const MiddleWrapper = styled.div`
  height: 50px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const PlayButton = styled.button`
  height: 100%;
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  color: rgb(85, 4, 4);
  background-color: rgb(105, 168, 151);
  border: 3px solid whitesmoke;
  border-radius: 20px;
  outline: 3px solid rgb(192, 20, 58);
  box-shadow: 0 0 0 6px rgb(105, 168, 151);
`;
