<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
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
          @input="setEmail"
        />
        <span>{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
    <ValidationProvider name="name" rules="required|alpha" v-slot="{ errors }">
      <div class="form-group flex">
        <label for="">Full Name</label>
        <input
          class="rounded-2xl w-3/5"
          v-model="formGroup.fullName"
          type="text"
          @input="setName"
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
        fullName: "",
        email: "",
      },
    };
  },
  methods: {
    setEmail() {
      this.$store.state.formGroup.email = this.formGroup.email;
    },
    setName() {
      this.$store.state.formGroup.fullName = this.formGroup.fullName;
    },
  },
  created() {
    const { email, fullName } = this.$store.state.formGroup;
    this.formGroup.email = email;
    this.formGroup.fullName = fullName;
  },
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 300px;
  width: 50vw;
  margin-top: 2vh;
  flex-direction: column;
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
