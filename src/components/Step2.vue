<template>
  <div class="formStep1 bg-white rounded-2xl justify-center flex items-center">
    <ValidationProvider
      name="employees"
      rules="required|numeric"
      v-slot="{ errors }"
    >
      <div class="form-group flex">
        <label for="">Number Employees</label>
        <input
          class="rounded-2xl w-3/5"
          v-model="formGroup.number"
          type="text"
          @input="setNumber"
        />
        <span>{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
    <ValidationProvider
      name="company"
      rules="required|alpha"
      v-slot="{ errors }"
    >
      <div class="form-group flex">
        <label for="">Your Company</label>
        <input
          class="rounded-2xl w-3/5"
          v-model="formGroup.company"
          type="text"
          @input="setCompany"
        />
        <span>{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formGroup: {
        company: "",
        number: "",
      },
    };
  },
  methods: {
    setCompany() {
      this.$store.state.formGroup.company = this.formGroup.company;
    },
    setNumber() {
      this.$store.state.formGroup.number = this.formGroup.number;
    },
  },
  created() {
    const { company, number } = this.$store.state.formGroup;
    this.formGroup.number = number;
    this.formGroup.company = company;
  },
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 250px;
  width: 50vw;
  margin-top: 2vh;
  flex-direction: column;
}
.form-group {
  flex-direction: column;
  align-items: center;
  width: 50vw;
  label {
    margin-top: 15px;
  }
  input {
    border: 3px solid lightgreen;
    margin-top: 10px;
    outline: none;
    padding-left: 10px;
  }
  span {
    color: red;
  }
}
.btn-box {
  width: 20vw;
  height: 100px;
}
.btn {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
}
.btn-prev {
  background-color: lightblue;
}
.btn-next {
  background-color: lightgreen;
}
</style>
