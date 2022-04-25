import Modal from "react-modal";
import Button from "../../Button";

import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../Input";
import api from "../../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

function NewTecModal({ isOpen, onRequestClose }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string().required("Campo obrigatório!"),
  });
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (tec) => {
    console.log(tec);
    api
      .post(
        "/users/techs",
        {
          title: tec.title,
          status: tec.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Registro efetuado, faça seu login"));
  };

  //estou entregando, mas nao tive tempo de finalizar o cadastro de uma Tecnologia

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          X
        </button>
        <h2>Cadastrar tecnologia</h2>

        <Input
          label="Nome"
          placeholder="Ex.:ReactJs"
          register={register}
          name="title"
          className="input"
        />
        <Input
          label="Tecnologia"
          placeholder="Ex.:Avançado"
          register={register}
          name="status"
        />

        <Button type="Submit">Cadastrar Tecnologia</Button>
      </Container>
    </Modal>
  );
}

export default NewTecModal;
