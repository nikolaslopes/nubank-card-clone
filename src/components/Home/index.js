import { useState } from 'react';

import {
  Container, InputContainer, Content, Header, Footer,
} from './styles';

import masterCardLogo from '../../assets/images/mc-logo.svg';
import chipLogo from '../../assets/images/chip.png';
import nubankLogo from '../../assets/images/nubank-logo.svg';

import { formatName } from '../../utils/formatName';

export function Home() {
  const [name, setName] = useState('');

  function handleNameChange(event) {
    setName(formatName(event.target.value));
  }

  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="Digite seu nome aqui"
          maxLength={20}
          value={name}
          onChange={handleNameChange}
        />
      </InputContainer>
      <Container>
        <Content>
          <Header>
            <div className="img-box">
              <img src={masterCardLogo} alt="mastercard-logo" />
              <img src={chipLogo} alt="chip-logo" />
            </div>
          </Header>
          <Footer>
            <p>{name || 'Seu nome'}</p>
            <img src={nubankLogo} alt="nubank-logo" />
          </Footer>
        </Content>
      </Container>
    </>
  );
}
