<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
    <ValidationProvider name="info" rules="required|alpha" v-slot="{ errors }">
      <div class="form-group flex">
        <label for="">Where did you hear about us </label>
        <input
          class="rounded-2xl w-3/5"
          v-model="formGroup.info"
          type="text"
          @input="setInfo"
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
        <input class="mr-4" type="checkbox" ref="userCheck" @input="setStatus" />
        <label for="">I accepet conditions</label>
      </div>
      <span style="color:red;">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formGroup: {
        info: "",
        statusCheck: null,
      },
    };
  },
  methods: {
    setInfo() {
      this.$store.state.formGroup.info = this.formGroup.info;
    },
    setStatus(){
      this.$store.state.formGroup.statusCheck = this.$refs.userCheck.checked
    }
  },
  created(){
    const {info} = this.$store.state.formGroup
    this.formGroup.info = info
  }
};
</script>
<style lang="scss" scoped>
.formStep1 {
  height: 200px;
  width: 50vw;
  margin-top: 2vh;
  flex-direction: column;
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
    padding-left: 10px;
  }
  span {
    color: red;
  }

}
</style>
