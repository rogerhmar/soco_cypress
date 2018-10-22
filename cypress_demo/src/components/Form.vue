<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="email"
                    label="Email address:"
                    label-for="emailInput"
                    >
        <b-form-input id="emailInput"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="navn"
                    label="Navn:"
                    label-for="navnInput">
        <b-form-input id="navnInput"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Navn">
        </b-form-input>
      </b-form-group>
      <b-form-group id="mat"
                    label="Favorittmat:"
                    label-for="matInput">
        <b-form-select id="matInput"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="ditt">Velg denne</b-form-checkbox>
          <b-form-checkbox value="datt">Og kanskje også denne</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Send</b-button>
      <b-button type="reset" variant="danger">Nullstill</b-button>
    </b-form>
    <span id="status">{{status}}</span>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      status: '',
      foods: [
        { text: 'Velg en', value: null },
        'Kjøttkaker', 'Bønnestuing', 'Brød', 'Havregryn',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.status = JSON.stringify(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      this.status = '';
    },
  },
};
</script>
