<template>
    <div class="car-item">
        <div class="title">
            <slot></slot>{{isCarPage ? '' : '.'}}{{car.model}}
        </div>
        <div class="description">{{ car.description }}</div>
        <div class="actions">
            <button type="button" :disabled="car.isSold" @click="buyCar">{{ car.isSold ? 'Куплено' : 'Купить'}}</button>
            <button type="button" :disabled="car.isSold" @click="deleteCar">Удалить</button>
            <router-link :to="'/' + (isCarPage ? '' : car.id)" tag="button">{{ isCarPage ? 'Назад' : 'Перейти'}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Route} from "vue-router";
    import Car from '@/core/models/cars.model';
    import store from '@/store';

    @Component
    export default class CarItem extends Vue {
        @Prop() car!: Car;
        public isCarPage: boolean = false;

        public buyCar() {
            store.dispatch('buyCar', this.car)
        }

        public deleteCar() {
            store.dispatch('deleteCar', this.car)
        }

        created() {
            this.isCarPage = !!this.$route.params.hasOwnProperty('carId')

        }
    }
</script>

<style scoped lang="scss">
    .class {
        background: red;
    }

</style>
