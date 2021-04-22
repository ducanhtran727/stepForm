<template>
  <div id="app">
    <div class="topBox bg-white items-center flex justify-around rounded-2xl">
      <div
        :class="[
          activeId === item.id ? item.name : '',
          'step flex items-center justify-center rounded-2xl w-1/5 bg-gray-300',
        ]"
        v-for="item of listStep"
        :key="item.id"
      >
        <span>{{ item.id }}</span>
        <div>{{ item.text }}</div>
      </div>
    </div>
    <Step1 @userInput="formGroup = $event" :nextStep="next" v-if="activeId === 1" />
    <Step2 :number="formGroup.number" :company="formGroup.company" :prevStep="prev" :nextStep="next" v-if="activeId === 2" />
    <Step3 :info="formGroup.info" v-if="activeId === 3" />
    <div
      class="btn-box flex items-center justify-center mx-auto"
      v-if="activeId === 3"
    >
      <button @click="reset" class="btn btn-prev">Reset</button>
    </div>
  </div>
</template>
<script>
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
export default {
  data() {
    return {
      activeId: 1,
      listStep: [
        {
          id: 1,
          text: "About You",
          name: "step1",
        },
        {
          id: 2,
          text: "About Company",
          name: "step2",
        },
        {
          id: 3,
          text: "Finishing Up",
          name: "step3",
        },
      ],
      disabled: true,
      formGroup:{
        email:"",
        fullName:"",
        number:"",
        company: "",
        info: "",
      }
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
  },
  methods: {
    next() {
      this.activeId++;
      this.disabled = false;
      console.log(this.disabled);
    },
    prev() {
      if (this.activeId === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
        this.activeId--;
      }
      console.log(this.disabled);
    },
    reset() {
      this.activeId = 1;
    },
  },
};
</script>
<style lang="scss">
body {
  background-color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topBox {
  height: 100px;
  width: 50vw;
  .step {
    height: 40px;
    span {
      border-radius: 50%;
      height: 30px;
      width: 30px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }
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
  background-color: lightcoral;
}
.step1 {
  border: 2px solid blue;
}
.step2 {
  border: 2px solid green;
}
.step3 {
  border: 2px solid yellow;
}
</style>
