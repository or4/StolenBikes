import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 40px;
    color: red;
`;

export const Error: React.FC = () => <Container>Ooops, something went wrong</Container>;
