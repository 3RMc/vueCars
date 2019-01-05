import {ICar} from '@/core/interfaces/cars.interface';
import store from '@/store';

export default class Car implements ICar {

    constructor(
        public id: number = store.state.cars.length + 1,
        public image: string = '',
        public model: string = '',
        public description: string = '',
        public isSold = false,
    ) {}
}
