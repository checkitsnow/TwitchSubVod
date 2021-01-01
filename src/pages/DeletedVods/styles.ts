import styled, { keyframes } from 'styled-components';
import { appearFromTop } from '../../components/Footer/styles';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const spin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromBottom} 0.5s;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .input-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: var(--light-background);
    height: 2rem;
    max-width: 20rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      flex: 1;
      background: var(--light-background);
      color: var(--text);
      text-align: center;
      appearance: textfield;
    }
  }

  .quality-selection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    select {
      width: 50%;
      background-color: var(--light-background);
      color: var(--text);
      border: none;
      padding: 0.25rem;
    }
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);
    height: 2rem;
    width: 20rem;
    border: 2px solid var(--purple);
    color: var(--text);

    & svg {
      margin-right: 0.5rem;
    }
  }

  .video-container {
    max-width: 60rem;
    margin: 2rem 0;

    animation: ${appearFromTop} 0.5s ease-out;
  }

  span {
    margin-top: 2rem;

    & svg {
      animation: ${spin} 4s linear infinite;
    }
  }
`;
