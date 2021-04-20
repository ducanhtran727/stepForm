<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="E-mail" rules="required" v-slot="{ errors }">
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
        <div class="flex justify-center mt-4 items-center">
          <input class="mr-4" type="checkbox" />
          <label for="">I accepet conditions</label>
        </div>
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
  input {
    border: 3px solid lightyellow;
    margin-top: 10px;
  }
  span {
    color: red;
  }
}
</style>
