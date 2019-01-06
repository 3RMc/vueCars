<template>
    <div class="car-item">
        <b-card :title="car.model"
                :img-src="car.image || carNotFoundImageLink"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
            <p class="card-text">
                {{ car.description }}
            </p>
            <div class="actions">
                <b-button class="btn btn-success"
                          :disabled="car.isSold"
                          @click="buyCar">
                    {{ car.isSold ? 'Куплено' : 'Купить'}}
                </b-button>
                <b-button class="btn btn-danger"
                          :disabled="car.isSold"
                          @click="deleteCar">
                    Удалить
                </b-button>
                <router-link class="btn btn-info"
                             :to="'/' + (isCarPage ? '' : car.id)"
                             tag="button">
                    {{ isCarPage ? 'Назад' : 'Перейти'}}
                </router-link>
            </div>
        </b-card>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Route} from "vue-router";
    import Car from "@/core/models/cars.model";
    import store from "@/store";

    @Component
    export default class CarItem extends Vue {
        // Inputs
        @Prop() car!: Car;

        // Properties
        public isCarPage!: boolean;
        public carNotFoundImageLink = 'https://i.ibb.co/N9T96BH/car-not-found.jpg';

        // Methods
        public buyCar() {
            store.dispatch("buyCar", this.car);
        }

        public deleteCar() {
            store.dispatch("deleteCar", this.car);
        }

        // LCHooks
        created() {
            this.isCarPage = !!this.$route.params.hasOwnProperty("carId");

        }
    }
</script>

<style scoped>

</style>
