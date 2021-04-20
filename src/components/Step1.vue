<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" class="">
        <ValidationProvider name="E-mail" rules="required" v-slot="{ errors }">
          <div class="form-group flex">
            <label for="">Email</label>
            <input class="rounded-2xl w-3/5" v-model="formGroup.email" type="text" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="E-mail" rules="required" v-slot="{ errors }">
          <div class="form-group flex">
            <label for="">Full Name</label>
            <input class="rounded-2xl w-3/5" v-model="formGroup.name" type="text" />
            <span>{{ errors[0] }}</span>
          </div>
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
        name: "",
        email: "",
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
    border: 3px solid lightblue;
    margin-top: 10px;
  }
  span{
      color:red;
  }
}
</style>
