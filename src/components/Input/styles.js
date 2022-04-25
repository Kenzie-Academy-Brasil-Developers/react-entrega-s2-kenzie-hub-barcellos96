import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    color: #f8f9fa;

    font-family: "Inter";
    font-weight: 400;
    font-size: 12.182px;

    margin: 20px 0px;
    > span {
      color: red;
    }
  }
`;

export const InputContainer = styled.div`
  background: #343b41;
  border-radius: 10px;
  color: #868e96;

  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    outline: none;

    width: 329.93px;

    font-family: "Inter";
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;

    color: white;

    margin: 0px 8.11656px;
  }
`;
