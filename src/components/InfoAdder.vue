<template>
  <div>
    <h1>Class Setup</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Course Number:"
        label-for="input-1"
      >
       <b-form-input
          id="input-1"
          v-model="form.crn"
          type="crn"
          required
          placeholder="Enter course number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Course Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.courseName"
          type="name"
          required
          placeholder="Enter course name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Professor Name:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.profName"
          :options="profNames"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Student Name:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.studentName"
          :options="studentNames"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          crn: '',
          courseName: '',
          profName: null,
          studentName: null,
        },
        profNames: [{ text: 'Select One', value: null }, 'Vineyard', 'Huggins', 'Wang', 'Kanchi'],
        studentNames: [{ text: 'Select One', value: null}, 'Connor Powers', 'Conner Wallace', 'Timo Budiono', 'Noah Cousin', 'Evan Casey', 'Cameron Craik'],
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
        this.form.crn = ''
        this.form.courseName = ''
        this.form.profName = null
        this.form.studentName = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>