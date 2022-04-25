import styled from "styled-components";

import { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > .header-form {
    display: flex;
    width: 370px;
    justify-content: space-between;
    margin-bottom: 35px;
    margin-top: 60px;

    > a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 16.2426px;

      background: #212529;
      border-radius: 4px;

      font-size: 12px;

      width: 70px;
      height: 29px;
      color: #f8f9fa;
    }

    > a:hover {
      background: #343b41;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  padding: 42px 22px;

  width: 400px;

  p {
    display: flex;
    justify-content: center;

    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;

    margin: 22px 0px;
  }

  h6 {
    display: flex;
    margin: 0 auto;
    margin-bottom: 22px;

    width: 166px;

    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }
`;

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateY(-30px);
    }

    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
`;
