import { Container, InputContaienr } from "./style";

export default function Input({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      <div>{label}</div>

      <InputContaienr>
        {Icon && <Icon />}
        <input {...rest} />
      </InputContaienr>
    </Container>
  );
}
