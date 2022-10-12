import React from "react";
import styled from "styled-components";
import Content from "../content/Content";
// import Form from "../form/Form";

const ListBox = styled.div`
  border: 1px solid black;
  /* background-color: ; */
`;

// const H2Box = styled.div``;

const List = () => {
  return (
    <ListBox>
      <div>
        <h2>Working</h2>
        <div>
          <Content />
        </div>
      </div>
      <div>
        <h2>Done</h2>
        <Content />
      </div>
    </ListBox>
  );
};

export default List;
