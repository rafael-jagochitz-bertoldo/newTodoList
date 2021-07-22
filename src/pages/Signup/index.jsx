import "./style";
import { Background, Container, Content, AnimationContainer } from "./style";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export default function Signup() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome completo" />
            <Input icon={FiMail} label="Email" placeholder="Seu melhor Email" />
            <Input
              icon={FiLock}
              type="password"
              label="Senha"
              placeholder="Uma senha bem segura"
            />
            <Input
              icon={FiLock}
              type="password"
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
