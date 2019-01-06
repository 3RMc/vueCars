import Vue from 'vue';
import Vuex from 'vuex';
import Car from '@/core/models/cars.model';

Vue.use(Vuex);

const initialState: Car[] = [
    {
        id: 0,
        model: 'BMW-X5',
        image: 'https://i.ytimg.com/vi/_j50FirRvnk/hqdefault.jpg',
        description: 'Тачила',
        isSold: false,
    },
    {
        id: 1,
        model: 'Ford Focus',
        image: 'http://avtodvigateli.com/wp-content/uploads/2017/10/ford-fokus-2-1-8_03.jpg',
        description: 'Бюджетная машина для экономных людей',
        isSold: true,
    },
];

export default new Vuex.Store({
    state: {
        cars: initialState,
    },
    mutations: {
        addCar(state, car: Car) {
            state.cars = [...state.cars, car];
        },
        buyCar(state, car: Car) {
            car.isSold = true;
        },
        deleteCar(state, car: Car) {
            state.cars = state.cars.filter(c => c.id !== car.id);
        },
        findCars(state, input: string) {
            return state.cars;
        }
    },
    actions: {
        addCar({commit}, car: Car) {
            commit('addCar', car);
        },
        buyCar({commit}, car: Car) {
            commit('buyCar', car)
        },
        deleteCar({commit}, car: Car) {
            commit('deleteCar', car)
        },
        findCars({commit}, input: string) {
            commit('findCars', input)
        }
    },
    getters: {
        getCar: (state) => (id: number) => {
            return state.cars.find(car => car.id === Number(id));
        },
        findCars: (state) => (input: string) => {
            return state.cars.filter(c => new RegExp(input.toLowerCase()).test(c.model.toLowerCase()));
        }
    },
});
