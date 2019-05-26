import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

import { IGeoCoordinates } from 'types';
import { media } from 'ui/media';

interface IProps {
    coordinates: IGeoCoordinates;
}

const Container = styled.div`
    ${media.mobile`
		> div {
			padding-top: 100% !important;
		}
  	`}

    ${media.tabletNDesktop`
		> div {
			padding-top: 50% !important;
		}
	`}
`;

const Marker = styled.div`
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    width: 20px;
    height: 20px;
`;

export const Map: React.FC<IProps> = ({ coordinates }: IProps) => {
    // @ts-ignore
    const marker = <Marker {...coordinates} text="" />;

    return (
        <Container>
            <GoogleMap
                defaultZoom={15}
                bootstrapURLKeys={{
                    key: 'AIzaSyDaxTbb824BrjJMUfBeCc5Cxv6sbuwYnhs',
                }}
                center={coordinates}
            >
                {marker}
            </GoogleMap>
        </Container>
    );
};
