import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background: transparent;

  .box-itens {
    position: relative;
    width: 120px;
    height: 120px;
  }

  .box-itens span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--item)));
  }

  .box-itens span::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    animation: animateVisibility 2s linear infinite;
    animation-delay: calc(0.1s * var(--item));
  }

  @keyframes animateVisibility {
    0% {
      transform: scale(1.2);
      background: var(--color);
      box-shadow: 0 0 10px var(--color), 0 0 20px var(--color),
        0 0 40px var(--color), 0 0 60px var(--color), 0 0 80px var(--color),
        0 0 100px var(--color);
    }

    75%,
    100% {
      transform: scale(0);
    }
  }
`;
