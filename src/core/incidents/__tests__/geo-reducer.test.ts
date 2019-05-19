import { DEFAULT_PROXIMITY } from 'core/constants';
import { Geo } from 'types';

import { GeoRequest, GeoRequestSuccess, GeoRequestFail } from '../../geo/actions';
import { incidents, Incidents } from '../reducer';
import { incidentsOnePageObject } from '../__mocks__/incidentsOnePageObject';
import { geoMock, incidentsOnePageObjectWithGeo } from 'core/geo/__mocks__/geo';

const options = {
    proximity: DEFAULT_PROXIMITY,
    occurredAfter: 1532152800,
    occurredBefore: 1532152800,
};

describe('incidents reducer', () => {
    it('should handle GeoRequest', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as Incidents,
            requesting: false,
            error: false,
            currentPage: 1,
        };
        const stateAfter = {
            // @ts-ignore
            incidents: incidentsOnePageObject as Incidents,
            requesting: true,
            error: false,
            currentPage: 1,
        };
        const action = new GeoRequest(options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle GeoRequestSuccess', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as Incidents,
            requesting: true,
            error: false,
            currentPage: 1,
        };
        const stateAfter = {
            incidents: incidentsOnePageObjectWithGeo,
            requesting: false,
            error: false,
            currentPage: 1,
        };
        // @ts-ignore
        const action = new GeoRequestSuccess(geoMock as Geo, options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle GeoRequestFail', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as Incidents,
            requesting: true,
            error: false,
            currentPage: 1,
        };
        const error = {
            status: 403,
            data: null,
        };
        const stateAfter = {
            // @ts-ignore
            incidents: incidentsOnePageObject as Incidents,
            requesting: false,
            error,
            currentPage: 1,
        };
        const action = new GeoRequestFail(error);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });
});