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
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(next)">
        <Step1 v-if="activeId === 1" />
        <Step2 v-if="activeId === 2" />
        <Step3 v-if="activeId === 3" />
        <div
          class="btn-box flex items-center justify-around mx-auto w-full"
          v-if="activeId === 3"
        >
          <button class="btn btn-prev" @click="prev">Previous</button>
          <button @click="reset" class="btn btn-prev">Reset</button>
          <button
            v-show="$store.state.formGroup.statusCheck"
            class="btn btn-prev"
            @click="finishing"
          >
            Finishing
          </button>
        </div>
        <div v-else class="btn-box flex items-center justify-between mx-auto">
          <button class="btn btn-prev" @click="prev" :disabled="disabled">Previous</button>
          <button class="btn btn-next" @click.="next">Next</button>
        </div>
      </form>
    </ValidationObserver>
    {{ $store.state.formGroup }}
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
      console.log(this.activeId);
    },
    prev() {
      if (this.activeId === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
        this.activeId = this.activeId - 2;
      }
      console.log(this.activeId);
    },
    reset() {
      this.activeId = 1;
      this.$store.state.formGroup.email = "";
      this.$store.state.formGroup.fullName = "";
      this.$store.state.formGroup.number = "";
      this.$store.state.formGroup.company = "";
      this.$store.state.formGroup.info = "";
      this.$store.state.formGroup.statusCheck = null;
    },
    finishing() {
      alert("submit success");
      this.reset();
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
