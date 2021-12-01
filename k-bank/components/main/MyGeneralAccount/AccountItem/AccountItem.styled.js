import styled from "@emotion/styled";

export const AccountItemContainer = styled.div`
  height: 103px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  align-items: stretch;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 15px;
  padding: 18px;
  .bankName {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
  }
  .account_number {
    font-size: 12px;
    font-weight: bold;
  }
  .money {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    .won {
      font-size: 18px;
    }
  }
  .button {
    width: 62px;
    button {
      width: 100%;
      height: auto;
      background: #ffffff;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border: 0px;
      color: rgba(255, 53, 93, 1);
      font-size: 14px;
    }
  }
`;
