import PropTypes from 'prop-types';

import { Container, IconContainer } from './styles';

export function InfoTopItem({ title, description, icon }) {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <br />

      <span>{title}</span>
      <p>{description}</p>

      <a href="/">Saiba mais</a>
    </Container>
  );
}

InfoTopItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
