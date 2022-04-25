import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 65vw;
  height: 48;
  margin-top: 10px;
  background: #121214;
  border-radius: 4px;

  justify-content: space-between;

  padding: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14.2123px;
  line-height: 24px;

  color: #f8f9fa;

  color: white;

  > span {
    color: #868e96;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
  }

  :hover {
    background: #343b41;
    cursor: pointer;
  }
`;
