import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HeaderTextContainer } from 'components';
import logo from 'components/assets/logo.png';
import { media } from 'ui/media';

const Container = styled(Link)`
    display: flex;
    align-items: center;
	cursor: pointer;

	${media.mobile`
    	height: 60px;
  	`}

	${media.tablet`
    	height: 100px;
	`}

    ${media.desktop`
    	height: 140px;
	`}
`;

const Logo = styled.img`
    width: 64px;
    height: 64px;

    ${media.tabletNDesktop`
		padding: 0 18px;
	`}
`;

export const Header = () => (
    <Container to={'/'}>
        <Logo src={logo} />
        <HeaderTextContainer />
    </Container>
);
