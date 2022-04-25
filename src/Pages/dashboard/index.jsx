import { Container, Content, ListContainer } from "./styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import ImgLogo from "../../assets/kenzieHub.svg";
import api from "../../services/api";
import Card from "../../components/Cards";
import NewTecModal from "../../components/Modal/ModalAdd";

function Dashboard({ authenticated }) {
  const [tecnologia, setTecnologia] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [modalAdd, setModalAdd] = useState(false);

  function handleOpenModal() {
    setModalAdd(true);
  }

  function handleCloseModal() {
    setModalAdd(false);
  }

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

  function logout() {
    localStorage.clear();
    return window.location.reload();
  }

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <div className="header">
        <img src={ImgLogo} alt="Kenzie Hub Logo" />
        <Link onClick={() => logout()} to="/login">
          Sair
        </Link>
      </div>
      <div className="header-two">
        <p>Ola, Felipe!</p>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </div>
      <Content>
        <NewTecModal isOpen={modalAdd} onRequestClose={handleCloseModal} />
        <div className="header-contet">
          <h3>Tecnologias</h3>
          <button type="button" onClick={handleOpenModal}>
            +
          </button>
        </div>
        <ListContainer>
          {tecnologia.map((tec) => {
            return <Card key={tec.id} title={tec.title} status={tec.status} />;
          })}
        </ListContainer>
      </Content>
    </Container>
  );
}

export default Dashboard;
