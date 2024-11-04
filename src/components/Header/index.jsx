import { IoSearchSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/authContext';
import { SignOut } from '../SignOut';
import {
  Container,
  TopContainer,
  BottomContainer,
  TopLeftContainer,
  TopRightContainer,
  TopInputContainer,
  InputSearch,
  InfoUser,
} from './styles';

export function Header() {
  const { user, loading, error } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  return (
    <Container>
      <TopContainer>
        <TopLeftContainer>
          <h1>Central IA</h1>

          <div>
            <a href="/">Ferramentas</a>
            <a href="/">Blog</a>
            <a href="/">Preços</a>
          </div>
        </TopLeftContainer>

        <TopRightContainer>
          <TopInputContainer>
            <IoSearchSharp />
            <InputSearch placeholder="Buscar IA" />
          </TopInputContainer>
          {!user && <Link to="/cadastro">Cadastrar</Link>}
          <InfoUser>
            {user ? (
              <SignOut />
            ) : (
              <button onClick={() => navigate('/login')} type="button">
                Entrar
              </button>
            )}
          </InfoUser>
        </TopRightContainer>
      </TopContainer>

      <BottomContainer>
        <div>
          <a href="/">Inicio</a>
          <a href="/">Em Alta</a>
          <a href="/">Novos</a>
          <a href="/">Top</a>
        </div>

        <div>
          <a href="/">ChatGPT</a>
          <a href="/">MidJourney</a>
          <a href="/">Stable Diffusion</a>
          <a href="/">Openjourney</a>
          <a href="/">Jasper</a>
        </div>

        <div>
          <a href="/">Gerar Imagem</a>
          <a href="/">Marketing</a>
          <a href="/">Revisão de texto</a>
          <a href="/">ChatBots</a>
        </div>
      </BottomContainer>
    </Container>
  );
}
