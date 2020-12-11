import styled from "styled-components";
import { lighten, darken } from "polished";

const Btn = styled.button`
  outline-style: none;
  border-style: none;
  background: ${({ bg }) => bg || "lightblue"};

  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;

  &:hover {
    background: ${({ bg }) => lighten(0.1, bg || "lightblue")};
  }
  &:active {
    background: ${({ bg }) => darken(0.3, bg || "lightblue")};
  }
`;

export default Btn;
