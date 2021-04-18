import styled from 'styled-components';
import { appearFromBottom } from '@/utils/animations/appearFromBottom';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  a {
    margin-top: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AnimationContainer = styled.div`
  height: 100%;
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

  input {
    background: var(--light-background);
    height: 2rem;
    width: 20rem;
    padding: 0;
    color: var(--text);
    text-align: center;
    margin-bottom: 0.5rem;
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);
    height: 2rem;
    width: 20rem;
    border: 2px solid var(--purple);
    color: var(--button-text);

    & svg {
      margin-right: 0.5rem;
    }
  }

  a {
    margin-top: 0.5rem;
  }
`;
