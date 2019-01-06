<template>
    <div class="form">
        <b-form @submit.prevent="onSubmitForm">
            <b-form-group label="Модель:"
                          label-for="model">
                <b-form-input id="model"
                              type="text"
                              name="model"
                              placeholder="Введите модель автомобиля"
                              v-model.trim="car.model"
                              required>
                </b-form-input>
            </b-form-group>
            <b-form-group label="Описание:"
                          label-for="description">
                <b-form-input id="description"
                              type="text"
                              name="description"
                              placeholder="Введите краткое описание автомобиля"
                              v-model.trim="car.description">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Изображение:"
                          label-for="image-link">
                <b-form-input id="image-link"
                              type="text"
                              name="image-link"
                              placeholder="Вставьте ссылку на изображение"
                              pattern="^(http://|https://).+\.[a-z]+$"
                              v-model.trim="car.image">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="warning">Создать</b-button>
        </b-form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import store from "@/store";
    import Car from "@/core/models/cars.model";

    @Component
    export default class Form extends Vue {
        public car: Car = new Car();

        public onSubmitForm() {
            if (this.car.model) {
                store.dispatch('addCar', this.car).then(() => this.car = new Car());
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
