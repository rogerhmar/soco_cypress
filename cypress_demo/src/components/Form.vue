<template>
  <form id='form'>
    <input type="text"  v-model="myname">
    <label >Name</label>
    <input type="submit" @click="handleSubmit">
    <span>{{ mystatus }}</span>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  private myname:string = ''
  private mystatus:string = ''

  handleSubmit() {
    if(!!this.myname) {
      this.mystatus = `${this.myname} Er registert`;
    } else {
      this.mystatus = 'Navn må fylles ut';
    }
  }
  data() {
    return {
      myname: this.myname,
      status: this.mystatus,
    };
  }
}
</script>
