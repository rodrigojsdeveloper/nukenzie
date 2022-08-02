import { Container, InputContainer } from "./style"


const Input = ({ label, register, name, error, size, ...rest }) => {

  return (
    <Container>
      <div>{ label } { !!error && <span> - {error}</span> }</div>

      <InputContainer size={ size } {...register(name)} {...rest} />
    </Container>
  )
}

export default Input
