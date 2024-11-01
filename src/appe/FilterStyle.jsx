import styled from "styled-components";

export const FilterStyle = styled.div`
  & body {
    background: green;
  }
  #div1, #div2 {
  float: left;
  width: 100px;
  height: 35px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
  & div {
    margin: 10px;

    & .pagination {
      display: flex;
      justify-content: center;
      & ul {
        display: flex;
        flex-wrap: wrap;
        margin: -10px;
        padding: 0;
        list-style: none;
        margin: 10px;
        & li {
          margin: 10px;
        }
      }
    }
  }
`;
