import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const CSSJS = () => {
    return (
        <div>
            <h1 style={{ color: "red" }}> Hello World </h1>
            <Title>Styled Components</Title>
        </div>
    );
};

export default CSSJS;
