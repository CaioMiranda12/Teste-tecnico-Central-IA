import { IoSearchSharp } from 'react-icons/io5';

import {
  Container,
  TopContainer,
  BottomContainer,
  TopLeftContainer,
  TopRightContainer,
} from './styles';

export function Header() {
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
          <div>
            <IoSearchSharp />
            <input placeholder="Buscar IA" />
          </div>
          <a href="/">Cadastrar</a>
          <button type="button">Entrar</button>
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
