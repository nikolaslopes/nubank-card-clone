import styled from 'styled-components';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transisition: {
      duration: 2,
      type: 'spring',
      ease: 'easOut',
      bounce: 1,
    },
  },
};

const inputContainerVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transisition: {
      duration: 2,
      type: 'spring',
      ease: 'easOut',
      bounce: 1,
    },
  },
};

export const Container = styled(motion.main).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1em;
  border-radius: 10px;
  width: 15em;
  height: 25em;
  box-shadow: 5px 8px 8px #000;
`;

export const InputContainer = styled(motion.div).attrs(() => ({
  variants: inputContainerVariants,
  initial: 'hidden',
  animate: 'visible',
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
    margin-left: 0.6em;
    display: flex;
  }

  img[alt=nubank-logo] {
    width: 35%;
  }
`;
