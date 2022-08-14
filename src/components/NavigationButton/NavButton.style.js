import styled from "styled-components";
// import responsivity from "../responsivity/responsivity"
// const { mobileS, mobileM, mobileL, tablet, laptop, laptopL, desktop, desktopL } = responsivity;

export const NavButtonsWrapper = styled.div`
  height: 160px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  outline: none;

  @media (min-width: 800px) { 
    display: none;
  }

  @media (max-height: 660px) { 
    display: none;
  }
`;

export const NavButtonsInnerWrapper = styled.div`
  width: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  outline: none;
`;

export const NavButton = styled.button`
  height: 65px;
  width: 65px;
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
