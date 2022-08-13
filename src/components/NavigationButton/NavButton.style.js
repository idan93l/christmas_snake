import styled from "styled-components";

export const NavButton = styled.button`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40px;
  color: whitesmoke;
  background-color: rgba(85, 4, 4, 0.826);
  border: 3px solid whitesmoke;
  border-radius: 20px;
  outline: 3px solid rgb(192, 20, 58);
  box-shadow: 0 0 0 6px rgb(105, 168, 151);
`;

export const NavButtonsWrapper = styled.div`
  height: 180px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  outline: none;
`;

export const NavButtonsInnerWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  outline: none;
`;
