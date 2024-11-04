/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import centralIAImage from '../../assets/loginImg.avif';
import { auth } from '../../firebase/firebaseConnect';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Button,
} from './styles';

export default function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (clientData) => {
    signInWithEmailAndPassword(clientData.email, clientData.password);
  };

  if (user) {
    navigate('/');
  }

  return (
    <Container>
      <LeftContainer>
        <img src={centralIAImage} alt="imagem Central IA" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo à <span>Central IA!</span>
          <br />
          Acesse com seu<span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta?{' '}
          <Link style={{ color: '#fff' }} to="/cadastro">
            {' '}
            Clique aqui.{' '}
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
