<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg=""/>
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Form from '@/components/Form.vue';

@Component({
  components: {
  HelloWorld,
  Form
  },
  })
export default class Home extends Vue {}
</script>
