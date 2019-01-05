<template>
  <div class="car-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <CarItem :car="car"></CarItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import { Route } from "vue-router"
  import store from '../store';
  import Car from "../core/models/cars.model";
  import CarItem from '@/components/CarItem.vue';
  @Component({
    components: {CarItem}
  })
  export default class CarPage extends Vue {

    public car: Car = new Car();

    created() {
      this.car = store.getters.getCar(this.$route.params["carId"]);
    }

  }
</script>
