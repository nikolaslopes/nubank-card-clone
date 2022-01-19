import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main).attrs(() => ({
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 1.5,
    type: 'spring',
  },
  whileHover: { scale: 1.1 },
}))`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1em;
  border-radius: 10px;
  width: 15em;
  height: 25em;
  box-shadow: 5px 8px 8px #000;
`;

export const InputContainer = styled(motion.div).attrs(() => ({
  initial: {
    x: -1000,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 2,
    type: 'spring',
  },
}))`
  padding: 20px 0px 80px 0px;

  input {
    width: 358px;
    height: 58px;

    border: 2px solid #FCFCFC;
    border-radius: 25px;
    color: #fff;
    padding: 0 16px;
    background: none;
    outline: none;
    appearance: none;
    transition: all 0.3s ease-in;
    font-size: 18px;

    ::placeholder {
      color: #BCBCBC;
    }

    &:focus {
      border-width: 4px;
      border-color: ${({ theme }) => theme.colors.primary.main};
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  height: 70%;

  .img-box {
    display: flex;
    align-items: flex-start;
  }

  img[alt=mastercard-logo] {
    width: 30%;
  }

  img[alt=chip-logo] {
    width: 40%;
    transform: rotate(90deg);
  }

`;

export const Footer = styled.footer`
  height: 30%;

  p {
    font-size: 15px;
    margin-left: 0.6em;
    display: flex;
  }

  img[alt=nubank-logo] {
    width: 35%;
  }
`;
