import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
`;

const StyledSpan = styled.span`
  margin-top: 5px;
`;

const iconStyle = {
  display: "flex",
  margin: "auto",
  paddingBottom: ".25em",
};

function File({ index, name, icon, itemSelection }) {
  return (
    <StyledItem onClick={() => itemSelection(index)} key={index} value={index}>
      <div style={iconStyle}>
        <img style={{ height: "4em" }} src="./icons/notepad.png"></img>
      </div>
      <StyledSpan>{name}</StyledSpan>
    </StyledItem>
  );
}

export default File;