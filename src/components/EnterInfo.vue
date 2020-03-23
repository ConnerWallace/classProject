<template>
  <div>
    <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Your Information"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Email:"
        label-align-sm="right"
        label-for="nested-email"
      >
        <b-form-input
          id="nested-email"
          type="email"
          required
          placeholder="Please enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Phone Number:"
        label-align-sm="right"
        label-for="nested-phone"
      >
        <b-form-input
        id="nested-phone"
        v-model="form.phone"
        type="phone"
        required
        placeholder="Please enter your phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Name:"
        label-align-sm="right"
        label-for="nested-name"
      >
        <b-form-input
        id="nested-name"
        v-model="form.name"
        type="name"
        required
        placeholder="Please enter your name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Birthday:"
        label-align-sm="right"
        label-for="nested-birthday"
      >
        <b-form-input
        id="nested-birthday"
        v-model="form.birthday"
        type="birthday"
        required
        placeholder="Please enter your birthday"
        ></b-form-input>
      </b-form-group>
    </b-form-group>
  </b-card>

  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Emergency Contact Information"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Emergency Contact's Email:"
        label-align-sm="right"
        label-for="nested-email-EM"
      >
        <b-form-input
        id="nested-email-EM"
        type="email-EM"
        required
        placeholder="Please enter emergency contact's email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Contact's Phone Number:"
        label-align-sm="right"
        label-for="nested-phone-EM"
      >
        <b-form-input
        id="nested-phone-EM"
        type="phone"
        required
        placeholder="Please enter contact's phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Contact's Name:"
        label-align-sm="right"
        label-for="nested-name-EM"
      >
        <b-form-input
        id="nested-name-EM"
        type="name"
        required
        placeholder="Please enter contact's name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Relationship to You:"
        label-align-sm="right"
        label-for="nested-relationship-EM"
      >
        <b-form-select v-model="relations" :options="options" id="nested-relationship-EM"></b-form-select>
      </b-form-group>
    </b-form-group>
  </b-card>

      <b-button type="submit" pill variant="primary">Submit</b-button>
      <b-button type="reset" pill variant="danger">Reset</b-button>
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
        },
        email: '',
        phone: '',
        name: '',
        relations: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Mother' },
          { value: 'b', text: 'Father' },
          { value: 'c', text: 'Sibling' },
          { value: 'd', text: 'Other'}
        ],
        birthday: '',
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
        this.form.relations = ''
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