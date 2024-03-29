/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { darken } from 'polished';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
    }
    /*opreaodr (>) para fazer referência ao strong
    de dentro do elemento se mão irá referenciar
    outros da aplicação*/
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        /* flex: 1 ocupa todo tamanho possível */
        flex: 1;
        text-align: center;
        font-weight: bold;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: #7159c1;
          &:hover {
            background: ${darken(0.03, '#7159c1')};
          }
        }
      }
    }
  }

  @media (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 652px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 400px;
      margin-bottom: 20px;
    }
  }
`;
