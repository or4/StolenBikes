import { createStore, applyMiddleware, compose, Action, Middleware, Dispatch } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { reducers, appInitialState, sagas } from 'core';

export const history = createHashHistory();
const navMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable-next-line @typescript-eslint/no-use-before-define */
const devTools = getDevTools();

const actionToPlainObject: Middleware = () => (next: Dispatch<void>) => <A extends Action>(action: A) => {
    return next(Object.assign({}, action));
};

const enhancer = compose(
    applyMiddleware(sagaMiddleware, navMiddleware, actionToPlainObject),
    devTools(),
);

export const store = createStore(reducers, appInitialState, enhancer);

sagaMiddleware.run(sagas);

function getDevTools(): Function {
    // @ts-ignore
    if (window !== undefined && window.devToolsExtension !== undefined) {
        // @ts-ignore
        return window.devToolsExtension;
    }

    // @ts-ignore
    return () => x => x;
}
