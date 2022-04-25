import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background: #212529;
  width: 35%;
  height: 400px;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 4px;

  h2 {
    display: flex;
    color: gray;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f8f9fa;
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    background-color: #343b41;

    padding-left: 10px;
  }

  .react-modal-close {
    position: absolute;
    display: flex;
    float: right;

    background-color: transparent;
    margin-left: 32%;
    margin-top: 10px;

    color: #868e96;

    border: none;
    &:hover {
      color: white;
    }
  }

  .btn-confirm {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    flex-grow: 0;

    width: 60%;
    height: 48px;

    margin-top: 20px;
  }
`;
