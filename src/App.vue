<template>
  <div id="app">
    <Process :activeId="activeId" />
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
    <ValidationObserver v-slot="{ handleSubmit,reset }">
      <form @submit.prevent="handleSubmit(next)" @reset.prevent="reset">
        <Step1 v-if="activeId === 1" />
        <Step2 v-if="activeId === 2" />
        <Step3 v-if="activeId === 3" />
        <div
          class="btn-box flex items-center justify-around mx-auto w-full"
          v-if="activeId === 3"
        >
          <button class="btn btn-prev" @click="prev">Previous</button>
          <button @click="resetActive" class="btn btn-prev">Reset</button>
          <button
            v-show="$store.state.formGroup.statusCheck"
            class="btn btn-prev"
            
          >
            Finishing
          </button>
        </div>
        <div v-else class="btn-box flex items-center justify-between mx-auto">
          <button class="btn btn-prev" @click="prev" :disabled="disabled">
            Previous
          </button>
          <button class="btn btn-next" type="submit" @submit.self="next">Next</button>
        </div>
      </form>
    </ValidationObserver>
    <ul v-if="finish">
      <li>{{ $store.state.formGroup.email }}</li>
      <li>{{ $store.state.formGroup.fullName }}</li>
      <li>{{ $store.state.formGroup.number }}</li>
      <li>{{ $store.state.formGroup.info }}</li>
      <li>{{ $store.state.formGroup.company }}</li>
    </ul>
  </div>
</template>
<script>
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Process from "./components/Process";
export default {
  data() {
    return {
      activeId: 1,
      formGroup: {
        email: "",
        fullName: "",
        number: "",
        company: "",
        info: "",
      },
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
      finish: false,
      isSubmit: false,
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
    Process,
  },
  methods: {
    next() {
      if(this.activeId >= this.listStep.length){
        this.finish = true
        alert("submit success")
        return
      }
      this.activeId++ ;
      this.disabled = false;
      console.log(this.activeId);
    },
    prev() {
      if (this.activeId === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
        this.activeId = this.activeId - 2 ;
      }
      console.log(this.activeId);
    },
    resetActive() {
      this.activeId = 1;
      this.$store.state.formGroup.email = "";
      this.$store.state.formGroup.fullName = "";
      this.$store.state.formGroup.number = "";
      this.$store.state.formGroup.company = "";
      this.$store.state.formGroup.info = "";
      this.$store.state.formGroup.statusCheck = null;
      this.finish = false;
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
