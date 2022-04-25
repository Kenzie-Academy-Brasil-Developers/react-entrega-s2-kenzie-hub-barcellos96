import { Container } from "./styles";

function Card({ title, status }) {
  return (
    <>
      <Container>
        <p>{title}</p>
        <span>{status}</span>
      </Container>
    </>
  );
}

export default Card;
