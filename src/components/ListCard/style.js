import styled from "styled-components";

const List = styled.div`
  width: 100%;
  max-width: 560px;
  padding: 5px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 10px 0 20px 0;

  h2 {
    font-size: 16px;
    color: var(--background-home);
  }

  nav {
    display: flex;
    flex-direction: row;

    button {
      margin: 0 5px;

      :hover {
        background: var(--background-button-home);
        color: var(--white);
        border-color: var(--background-button-home);
      }
    }

    @media (max-width: 320px) {
      flex-direction: column;

      button {
        margin: 5px 0;
        padding: 0 85px;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    h2 {
      padding-bottom: 15px;
    }

    nav {
      justify-content: center;
    }
  }
`;

const ListBody = styled.div`
  h2 {
    padding-bottom: 35px;
  }

  img {
    width: 100%;
  }
`;

export { List, ListHeader, ListBody };
