<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Please enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Primary phone number:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.phone"
          type="Phone number"
          required
          placeholder="Please enter your phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Please enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Your birthday:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.birthday"
          required
          placeholder="Please enter your birthday"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-5"
        label="Emergency email address:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.email"
          type="email"
          required
          placeholder="Please enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Emergency contact phone number:"
        label-for="input-7"
      >
        <b-form-input
          id="input-7"
          v-model="form.phone"
          type="Phone number"
          required
          placeholder="Please enter your emergency contact's phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Emergency contact's Name:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.name"
          required
          placeholder="Please enter your emergency contact's name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Relation:" label-for="input-9">
        <b-form-select
          id="input-9"
          v-model="form.Relation"
          :options="Relations"
          required=false
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!--b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          phone: '',
          name: '',
          relations: null,
          birthday: null
        },
        relations: [{ text: 'Select One', value: null }, 'Mother', 'Father', 'Sibling', 'Other'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.phone = ''
        this.form.name = ''
        this.form.relations = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
#homeContainer {
  display: flex;
  flex-direction: row;
}

#rightContainer {
  flex-grow: 1
}

</style>