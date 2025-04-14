import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    subscribe() {
        const handler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', handler);
        this.handler = handler;
    },
    unsubscribe() {
        EventEmitter.off('click', this.handler);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
