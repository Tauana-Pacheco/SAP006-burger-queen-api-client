import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { LoginWithEmailPassword } from '../../services/auth';

const useForm = (validation) => {
  localStorage.clear();
  const [messageError, setMessageError] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedValue = {
      ...values,
      [name]: value,
    }
    setValues(updatedValue);

    const validations = validation(updatedValue)
    setErrors(validations);
    
  };

  const history = useHistory()

  const routerHall = () => {
    history.push('/hall')
  }
  const routerKitchen = () => {
    history.push('/kitchen')
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const validations = validation(values)
    setErrors(validations);

    if(validations.ok) {
      LoginWithEmailPassword(values.email, values.password)
        .then((response) => {
          
          if (response.code && (response.code === 400 || response.code === 403)) {
            alert(response.message)
          } else {
            localStorage.setItem('token', response.token);
            localStorage.setItem("id", response.id);

            if (response.role === "atendente") {
              routerHall();
               
            } 
            else if (response.role === "cozinheiro") {
              routerKitchen();
              
            }
            else {
              alert('função/role desconhecida '+response.role);
            }
          }

        })
        .catch((error) => {
          setMessageError('Erro na requisição. [' + error.message + ']');
          console.log(messageError)
        })
      }
  };

  return { handleChange, handleSubmit, errors };
}

export default useForm;