<template>
  <div class="formStep1 bg-white rounded-2xl flex justify-center items-center">
      <ValidationProvider
        v-for="item in formItem"
        :key="item.id"
        :name="item.name"
        :rules="item.msgVali"
        v-slot="{ errors }"
      >
        <div class="form-group flex">
          <label for="">{{ item.name }}</label>
          <input
            class="rounded-2xl w-3/5"
            v-model="item.value"
            :type="item.type"
          />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
  </div>
</template>
<script>
export default {
  props: ["formItem"],
  data() {
    return {
    };
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
