import styled from 'styled-components';

export const TableStyle = styled.div`

  .header {
    background: #252525;

    & [role="columnheader"] {
      padding: 10px;
      line-height: 14px;
      display: inline-flex !important;
      justify-content: flex-start;
      align-items: center;

      span {
        color: #f3f3f3;
        font-weight: bold;
        font-size: 12px;
      }
    }
  }

  .body {

    & [role="row"]:nth-child(2n) {
      background: #f8f8f8;
    }

    & [role="cell"] {
      border: 1px solid #dee2e6;
      padding: 3px 5px;
      margin: 0px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      font-weight: 400;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  div.tr + section {
    animation: fadebackground 300ms;
    animation-iteration-count: 1;
  }

  .resizer {
    display: inline-block;
    background: #ddd;
    width: 5px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    touch-action: none;
    transition: all ease 100ms;

    &:hover {
      width: 7.5px;
      transform: translateX(50%) scale(1.1);
    }
    &:active {
      background: #4db064;
    }
  }

  .toolbar {
    text-align: right;
    margin: 0 2.5em 10px 0;

    button.reset-table-cols {
      background-color: #ff7043;
      color: #fff;
      border: 0;
      border-radius: 0.125rem;

      i {
        transition: 100ms ease;
      }
      &:hover i {
        transform: rotate(90deg);
      }
    }
  }

  @keyframes fadebackground {
    from {
      opacity: 0;
      transform: translateY(5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/**
 * Sub Table Styles
 */
export const SubTableStyle = styled.section`

  border-radius: 5px;

  & > div {

    &.container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      margin: 0 auto !important;
    }

    &.toolbar {
      text-align: center;
      margin: 0 0 30px;
    }
  }
`;

/**
 * Sub Table Cell Styles
 */
export const SubTableCellStyle = styled.div`

  padding: 5px 0;
  flex: 1 1 25%;
  flex-wrap: wrap;

  & > div.key {
    & h4 {
      font-weight: bold;
      text-transform: capitalize;
      font-size: 1.1em;
      margin: 0;
    }
  }

  & > div.val {
    position: relative;
    display: inline-block;

    &:hover button {
      opacity: 1;
      right: -30px;
      outline: 0;
    }

    & span {
      font-family: 'Lato',sans-serif;
      font-size: .9em;
      user-select: none;
      display: inline-block;
      background: transparent;
      transition: all 200ms ease;
      padding: 1px 2px;

      &:not(.null) {
        cursor: pointer;

        &:hover {
          background: #e7e7e7;
        }
      }
    }

    & button {
      right: -15px;
      left: auto;
      font-size: 1.175em;
      opacity: 0;
      position: absolute;
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      background-color: transparent;
      padding: 5px 5px 5px 20px;
      margin: 0;
      border: 0;
      transition: all 300ms ease;

      &:hover {
        color: #3e3e3e
      }

      &:hover, &:focus {
        opacity: 1;
        right: -30px;
        outline: 0;
      }
    }
  }
`;

/**
 * Pagination component styles
 */
export const PaginationStyles = styled.div`

& .pagination-container {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      margin: 0 .25em;
    }
  }

  .pagination-buttons button {
    font-size: 16px;
    padding: 3px;
    width: 30px;
  }
`;

/**
 * Pagination "Go to page" component styles
 */
export const PaginationPageJumpStyle = styled.span`

  display: inline-block;
  margin: 0 5px;
  font-family: 'Roboto', sans-serif;

  input {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: center;
    display: inline-block;
    margin: 0 5px;
    font-family: inherit;

    &:focus {
      outline: 0
    }
  }
`;

/**
 * Pagination "Show 10/num" component styles
 */
export const PaginationPageSizeStyle = styled.span`

  display: inline-block;
  margin: 0 5px;
  font-family: 'Roboto', sans-serif;

  select {
    border: 1px solid #ddd;
    padding: 6px 5px 7px;

    &:focus {
      outline: 0
    }

    option {
      font-size: .9em;
    }
  }

`;

/**
 * Pagination "Page 1 of XX" component styles
 */
export const PaginationPageCountStyle = styled.span`

  display: inline-block;
  margin: 0 0 0 3px;
  font-family: 'Roboto', sans-serif;

  strong {
    display: inline-block;
    margin: 0 0 0 3px;
  }
`;

export const GlobalFilterStyle = styled.div`

margin: 0 0 1em;

  input {
    border: 1px solid #dddddd;
    padding: .25em 1em;
    min-width: 20vw;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 0%);

    &:focus {
      outline: 0;
      box-shadow: inset 0 0 1px 2px #252525;
    }

    &::placeholder {
      color: #252525;
      opacity: .75;
    }
  }
`;
