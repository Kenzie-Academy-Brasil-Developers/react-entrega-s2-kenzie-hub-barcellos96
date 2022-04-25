import { Container } from "./styles";
import { FiTrash2 } from "react-icons/fi";

function Card({ title, status, onClick }) {
  return (
    <>
      <Container>
        <p>{title}</p>
        <span>{status}</span>
        <p>
          <FiTrash2 onClick={onClick} />
        </p>
      </Container>
    </>
  );
}

export default Card;
