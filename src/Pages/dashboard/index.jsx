import { Container, Content, ListContainer, InputContainer } from "./styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import ImgLogo from "../../assets/kenzieHub.svg";
import api from "../../services/api";
import Card from "../../components/Cards";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import NewTecModal from "../../components/Modal/ModalAdd";

function Dashboard({ authenticated }) {
  const [tecnologia, setTecnologia] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  //   const [modalAdd, setModalAdd] = useState(false);

  //   function handleOpenModal() {
  //     setModalAdd(true);
  //   }

  //   function handleCloseModal() {
  //     setModalAdd(false);
  //   }
  const { register, handleSubmit } = useForm();

  function loadTec() {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTecnologia(response.data.techs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadTec();
  }, []);

  const onSubmit = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTec())
      .catch((err) => toast.error("Tecnologia já está cadastrada"));
  };

  function handleLogout() {
    localStorage.clear();
    return window.location.reload();
  }

  const handleTrash = (id) => {
    const Tec = tecnologia.filter((tec) => tec.id !== id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTecnologia(Tec));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <div className="header">
        <img src={ImgLogo} alt="Kenzie Hub Logo" />
        <Link onClick={() => handleLogout()} to="/login">
          Sair
        </Link>
      </div>
      <div className="header-two">
        <p>Ola, Felipe!</p>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </div>
      <Content>
        {/* <NewTecModal
          isOpen={modalAdd}
          onRequestClose={handleCloseModal}
          setTecnologia={setTecnologia}
        /> */}
        <div className="header-contet">
          <h3>Adicionar Tecnologias</h3>
        </div>
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <section className="section-input">
            <Input
              label="Tecnologia"
              className="input"
              placeholder="Ex.:ReactJS"
              register={register}
              name="title"
            />
            <Input
              label="Nível"
              className="input"
              placeholder="Ex.:Avançado, Intermediário ou Básico"
              register={register}
              name="status"
            />
          </section>
          <section className="section-btn">
            <Button className="btn-confirm" type="submit">
              Adicionar Tecnologia
            </Button>
          </section>
        </InputContainer>
        <ListContainer>
          {tecnologia.map((tec) => (
            <Card
              key={tec.id}
              title={tec.title}
              status={tec.status}
              onClick={() => handleTrash(tec.id)}
            />
          ))}
        </ListContainer>
      </Content>
    </Container>
  );
}

export default Dashboard;
