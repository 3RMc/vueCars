<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <b-btn v-b-toggle.collapse1 variant="primary">Добавить автомобиль</b-btn>
          <b-collapse id="collapse1" class="mt-2">
            <Form/>
          </b-collapse>
        </div>
      </div>
      <hr>
      <div class="row mt-4">
        <CarItem v-for="(car, index) of cars" :car="car" :key="car.id" class="col-4">{{index + 1}}</CarItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '@/components/Form.vue';
import CarItem from '@/components/CarItem.vue';
import Car from '@/core/models/cars.model';
import store from '@/store'; // @ is an alias to /src

@Component({
  components: {
    CarItem,
    Form,
  },
})
export default class Home extends Vue {
  public cars = store.state.cars;
  private currentSearchCarsValue = ''

  created() {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'findCars') {
        this.currentSearchCarsValue = mutation.payload;
        this.cars = store.getters.findCars(mutation.payload);
      } else if (this.currentSearchCarsValue && (mutation.type === 'addCar' || mutation.type === 'deleteCar')) {
        store.dispatch('findCars', this.currentSearchCarsValue);
      }
    })
  }
}
</script>
