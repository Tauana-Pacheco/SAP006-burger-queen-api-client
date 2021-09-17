import UseForm from "./UseForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
// import { Link } from 'react-router-dom';

const Register = () => {
  const { handleChange, handleSubmit, errors } = UseForm(ErrorsMessage);

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <Input
          name="name"
          type="text"
          onChange={handleChange}
        />
        <p className="errorMessage"> {errors.name && errors.name}</p>

        <label htmlFor="email">Email</label>
        <Input
          name="email"
          type="email"
          onChange={handleChange}
        />
        <p className="errorMessage"> {errors.email && errors.email}</p>

        <label htmlFor="password">Senha</label>
        <Input
          name="password"
          type="password"
          onChange={handleChange}
        />
        <p className="errorMessage"> {errors.password && errors.password}</p>

        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <Input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
        />
        <p className="errorMessage"> {errors.password && errors.password}</p>

        <label htmlFor="role">Selecione sua função</label>
        <Input
          name="role"
          type="radio"
          onChange={handleChange}
          value="atendente"
        />
        <Input
          name="role"
          type="radio"
          onChange={handleChange}
          value="cozinheiro"
        />
        <Button onClick={handleSubmit}>Cadastre-se</Button>
      </form>
    </section>
  )
}

export default Register;