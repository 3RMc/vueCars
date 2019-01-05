<template>
  <div class="home">
    <Form/>
    <CarItem v-for="(car, index) of store.state.cars" :car="car" :key="car.id">{{index + 1}}</CarItem>
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
  public store = store;
}
</script>
