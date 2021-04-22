<template>
  <div class="formStep1 bg-white rounded-2xl justify-center flex items-center">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
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
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="btn-box flex items-center justify-between mx-auto">
          <button class="btn btn-prev" @click="prevStep">Previous</button>
          <button class="btn btn-next" @submit="onSubmit" type="submit">
            Next
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  props: ["nextStep", "prevStep"],
  data() {
    return {
      formGroup: {
        company: "",
        number: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("222");
      this.nextStep();
      this.$emit('userInput',this.formGroup)
    },
  },
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 250px;
  width: 50vw;
  margin-top: 2vh;
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
