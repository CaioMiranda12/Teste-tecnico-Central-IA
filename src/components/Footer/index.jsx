import { FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';

import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <a href="/">Política de Privacidade</a>
      <a href="/">Termos de Uso</a>
      <a href="/">Contato</a>
      <a href="/">Suporte</a>

      <div>
        <a href="/">
          <TiSocialInstagram color="#fff" size={40} />
        </a>
        <a href="/">
          <FaSquareXTwitter color="#fff" size={40} />
        </a>
        <a href="/">
          <FaYoutube color="#fff" size={40} />
        </a>
        <a href="/">
          <FaFacebookSquare color="#fff" size={40} />
        </a>
      </div>
    </Container>
  );
}
