import { Container } from "./style";
import React from "react";

const Button = ({ children, size, color, ...rest }) => {
  return (
    <Container size={size} color={color} {...rest}>
      {children}
    </Container>
  );
};

export { Button };
