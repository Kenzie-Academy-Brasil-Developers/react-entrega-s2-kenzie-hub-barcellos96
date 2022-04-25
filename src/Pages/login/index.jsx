import { AnimationContainer, Container, Content } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ImgLogo from "../../assets/kenzieHub.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";

import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFucntion = (data) => {
    console.log("data ", data);

    api
      .post("sessions", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div className="header-form">
        <img src={ImgLogo} alt="Kenzie Hub Logo" className="" />
      </div>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFucntion)}>
            <p>Login</p>

            <Input
              label="Email"
              placeholder="Seu melhor email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Uma senha bem segura"
              register={register}
              name="password"
              error={errors.password?.message}
            />

            <Button type="Submit">Enviar</Button>
            <span>Ainda não possuí uma conta?</span>
            <Button onClick={() => history.push("/")}>Cadastre-se</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Login;
