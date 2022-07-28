import { Container, InputContainer } from "./style"


const Input = ({ label, register, name, error, tamanho, ...rest }) => {

  return (
    <Container>
      <div>{ label } { !!error && <span> - {error}</span> }</div>

      <InputContainer tamanho={ tamanho } {...register(name)} {...rest} />
    </Container>
  )
}

export default Input
