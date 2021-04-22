<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" class="">
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group flex">
            <label for="">Email</label>
            <input
              class="rounded-2xl w-3/5"
              v-model="formGroup.email"
              type="text"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group flex">
            <label for="">Full Name</label>
            <input
              class="rounded-2xl w-3/5"
              v-model="formGroup.name"
              type="text"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="w-100 flex justify-center">
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
  props: ["nextStep"],
  data() {
    return {
      formGroup: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("222");
      this.nextStep();
    },
  },
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 300px;
  width: 50vw;
  margin-top: 2vh;
}
.form-group {
  flex-direction: column;
  align-items: center;
  width: 50vw;
  input {
    border: 3px solid lightblue;
    margin-top: 10px;
    outline: none;
    padding-left: 10px;
  }
  label {
    margin-top: 15px;
  }
  span {
    color: red;
  }
}
.btn {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-top: 20px;
}

.btn-next {
  background-color: lightgreen;
}
</style>
