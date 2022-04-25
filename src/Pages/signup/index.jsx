import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { Container, Content, AnimationContainer } from "./styles";

import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ImgLogo from "../../assets/kenzieHub.svg";
import { Redirect } from "react-router-dom";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório"),
    bio: yup.string().required("Campo obrigaório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFucntion = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    api
      .post("users", user)
      .then((response) => {
        toast.success("Registro efetuado, faça seu login");
        return history.push("/login");
      })
      .catch((err) => toast.error("Usuário já cadastrado com este email"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div className="header-form">
        <img src={ImgLogo} alt="Kenzie Hub Logo" className="" />
        <Link to="/login"> Voltar</Link>
      </div>

      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFucntion)}>
            <p>Crie sua conta</p>
            <h6>Rapido e grátis, vamos nessa</h6>
            <Input
              label="Nome"
              placeholder="Seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
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
            <Input
              label="Confirmar senha"
              placeholder="Confirmação da senha"
              type="password"
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />

            <Input
              label="Fale sobre você"
              placeholder="Gosto de esportes e tec.."
              register={register}
              name="bio"
              error={errors.bio?.message}
            />

            <Input
              label="Linkedin"
              placeholder="http://linkdin.in/seu-usuario"
              register={register}
              name="contact"
              error={errors.contact?.message}
            />

            <Input
              label="Módulo do Curso"
              placeholder="Qual módulo você está?"
              register={register}
              name="course_module"
              error={errors.course_module?.message}
            />

            <Button type="Submit">Enviar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
export default Signup;
