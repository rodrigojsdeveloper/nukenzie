import notFound from "../../assets/notFound.svg";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <h1>Ooops!</h1>

        <p>
          We couldn't find the page you were looking for, <b>let's try again</b>
          .
        </p>

        <Button size="l" color="home" onClick={() => history.push("/")}>
          Go to home
        </Button>
      </div>

      <img src={notFound} alt="error" />
    </Container>
  );
};

export { NotFound };
