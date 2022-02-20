import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ul {
    height: 350px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    li {
      transform-origin: 175px;
      position: absolute;
      left: 0;
      transition: all 0.75s ease-in-out;
      transition-delay: calc(0.02s * var(--i));
      transform: rotate(0) translateX(calc(175px - 50%));

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(calc(360deg / 8 * var(--i)));
        `};
    }

    .icon {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(calc(360deg / -8 * var(--i)));
    }

    .menu {
      z-index: 100;
      transition: all 0.75s ease-in-out;

      ${({ isOpen }) =>
        isOpen &&
        css`
          transform: rotate(315deg);
        `}
    }
  }
`;
