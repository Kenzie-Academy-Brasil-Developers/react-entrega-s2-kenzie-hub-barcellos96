// import Modal from "react-modal";
// import Button from "../../Button";

// import { Container } from "./styles";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// import Input from "../../Input";
// import api from "../../../services/api";
// import { useState } from "react";
// import { toast } from "react-toastify";

// function NewTecModal({ isOpen, onRequestClose, setTecnologia }) {
//   const schema = yup.object().shape({
//     title: yup.string().required("Campo obrigatório!"),
//     status: yup.string().required("Campo obrigatório!"),
//   });
//   const [token] = useState(
//     JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
//   );
//   const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmitFunction = ({ title, status }) => {
//     const tecnologias = { title, status };
//     console.log(tecnologias);
//     api
//       .post("/users/techs", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setTecnologia(tecnologias);
//         toast.success("Tecnologia registrada com sucesso");
//       })
//       .catch((err) => toast.error("Erro ao cadastrar tecnologia"));
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className="react-modal-content"
//     >
//       <Container>
//         <button
//           type="button"
//           onClick={onRequestClose}
//           className="react-modal-close"
//         >
//           X
//         </button>
//         <h2>Cadastrar tecnologia</h2>

//         <form onSubmit={handleSubmit(onSubmitFunction)}>
//           <Input
//             label="Nome"
//             placeholder="Ex.:ReactJs"
//             register={register}
//             name="title"
//             className="input"
//           />
//           <Input
//             label="Tecnologia"
//             placeholder="Ex.:Avançado"
//             register={register}
//             name="status"
//           />

//           <Button type="Submit" className="btn-confirm">
//             Cadastrar
//           </Button>
//         </form>
//       </Container>
//     </Modal>
//   );
// }

// export default NewTecModal;
