import styled from "styled-components";

export const Canvas = styled.canvas`
  height: 340px;
  width: 340px;
  box-sizing: border-box;
  border: 3px solid whitesmoke;
  border-radius: 5px;
  background-color: rgba(23, 22, 22, 0.9);
  outline: 3px solid rgb(192,20,58);
  box-shadow: 0 0 0 6px rgb(105,168,151);

  @media (min-width: 800px) { 
    height: 500px;
    width: 500px;
  }
`