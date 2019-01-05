<template>
    <div class="form">
        <form v-on:submit.prevent="onSubmitForm">
            <div class="model">
                <label for="model">Модель:</label>
                <input id="model" type="text" name="model" v-model="car.model">
            </div>
            <div class="description">
                <label for="description">Описание:</label>
                <input id="description" type="text" name="description" v-model="car.description">
            </div>
            <button type="submit">Создать</button>
        </form>
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
            if (this.car.model && this.car.description) {
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
