import styled from "styled-components";

export const InputContainer = styled.form`
  flex: 1;
  padding: 0 38px;
  margin-bottom: 20px;
  > .section-btn {
    display: flex;
    > .btn-confirm {
      width: 40vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  .section-input {
    display: flex;
    div {
      margin-right: 16px;
    }

    .input {
      width: 20vw;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  > .header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 72px;
    padding-bottom: 30px;
    border-bottom: 1px solid #212529;

    > a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

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

  > .header-two {
    display: flex;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: space-around;

    padding: 70px;

    border-bottom: 1px solid #212529;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: #f8f9fa;
    }
    span {
      color: #868e96;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 30px -20px;

  .header-contet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;

    margin-bottom: 15px;

    width: 100%;
    justify-content: space-around;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #212529;
      border-radius: 4px;

      font-size: 20px;
      font-weight: bold;

      width: 29px;
      height: 29px;
      color: #f8f9fa;
    }

    > a:hover {
      background: #343b41;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #212529;

  width: 70vw;
  height: 416.37px;

  overflow-y: auto; ;
`;
