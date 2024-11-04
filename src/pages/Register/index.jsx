/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfile } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import centralIAImage from '../../assets/loginImg.avif';
import { auth } from '../../firebase/firebaseConnect';
import { createUser } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Button,
} from './styles';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O seu nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      const firebaseUid = userCredential.user.uid;

      console.log('Tentando criar usuário no Supabase:', {
        name: data.name,
        email: data.email,
        firebaseUid,
      });
      const supabaseResponse = await createUser(
        data.name,
        data.email,
        firebaseUid,
      );
      console.log('Resposta do Supabase:', supabaseResponse);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: data.name });
      }
    } catch (err) {
      console.error('Erro ao registrar usuário:', err);
    }
  };

  if (loading) {
    return <p>Carregando</p>;
  }

  return (
    <Container>
      <LeftContainer>
        <img src={centralIAImage} alt="imagem Central IA" />
      </LeftContainer>

      <RightContainer>
        <Title>
          <span>Criar Conta</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              {...register('name')}
              error={errors?.name?.message}
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Confirmar Cadastro</Button>
        </Form>
        <p>
          Já possui conta?{' '}
          <Link style={{ color: '#fff' }} to="/login">
            {' '}
            Clique aqui.{' '}
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
