<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="info"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group flex">
            <label for="">Where did you hear about us </label>
            <input
              class="rounded-2xl w-3/5"
              v-model="formGroup.info"
              type="text"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="checkbox"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="flex justify-center mt-4 items-center">
            <input class="mr-4" type="checkbox" />
            <label for="">I accepet conditions</label>
          </div>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formGroup: {
        info: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("222");
    },
  },
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 200px;
  width: 50vw;
  margin-top: 2vh;
}
.form-group {
  flex-direction: column;
  align-items: center;
  width: 50vw;
  label {
    margin-bottom: 15px;
  }
  input {
    border: 3px solid lightcoral;
    margin-top: 10px;
    outline: none;
  }
  span {
    color: red;
  }
}
</style>
