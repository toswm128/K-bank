import styled from "@emotion/styled";

export const OverlapInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  input {
    flex: 3;
  }
  button {
    flex: 1;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 15px;

  .profile_img {
    flex: 3;
    .profile_img_item {
      width: 83.5px;
      height: 83.5px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .profile_button {
    flex: 5;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    color: #aaa;
    button {
      width: 100%;
    }
  }
`;
