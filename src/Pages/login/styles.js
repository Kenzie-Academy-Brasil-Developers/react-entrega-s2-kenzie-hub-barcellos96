import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > .header-form {
    display: flex;
    width: 370px;
    justify-content: center;
    margin: 60px auto 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 400px;

  p {
    display: flex;
    justify-content: center;

    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }

  span {
    display: flex;
    margin: 0 auto;
    margin: 22px auto;

    width: 166px;

    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  button:last-child {
    margin-top: 0px;
    background: #868e96;
  }
`;

const appearFromTop = keyframes`
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
  animation: ${appearFromTop} 1s;

  form {
    margin: 50px 0;
    text-align: center;
  }
`;
