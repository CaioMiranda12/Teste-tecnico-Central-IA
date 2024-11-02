import { FaCheck } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

import {
  Container,
  TitleCard,
  DescriptionCard,
  MoneyContainer,
  TextMoney,
  TextCredits,
  ListBenefics,
} from './styles';

export function TestCardItem() {
  return (
    <Container>
      <TitleCard>Teste Gratuito</TitleCard>
      <DescriptionCard>
        Explore o poder da nossa plataforma com 10 créditos gratuitos - Só paga
        se gostar
      </DescriptionCard>

      <MoneyContainer>
        <TextMoney>
          <MdOutlineAttachMoney style={{ marginBottom: 8 }} />
          <span>0</span>/primeira semana
        </TextMoney>
        <TextCredits>10 créditos gratuitos</TextCredits>
      </MoneyContainer>

      <ListBenefics>
        <li>
          <FaCheck size={15} />
          <p>Creditos: 10</p>
        </li>

        <li>
          <FaCheck size={15} />
          <p>Todos os ativos de IA Desbloqueados</p>
        </li>

        <li>
          <FaCheck size={15} />
          <p>10 Gerações de imagens</p>
        </li>

        <li>
          <FaCheck size={15} />
          <p>Geração de Textos</p>
        </li>
      </ListBenefics>

      <button type="button">Comece a trabalhar</button>
    </Container>
  );
}
