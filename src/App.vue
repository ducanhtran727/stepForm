<template>
  <div id="app">
    <Process :activeId="activeId" :length="listStep.length" />
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
    <ValidationObserver v-for="item in listStep" :key="item.id">
      <div>
        <Step1 v-if="activeId === item.id" :formItem="item.listField" />
      </div>
      <div
        class="btn-box flex items-center justify-around mx-auto w-full"
        v-if="activeId === listStep.length"
      >
        <button class="btn btn-prev" @click="prev">Previous</button>
        <button @click="resetActive" class="btn btn-prev" type="reset">
          Reset
        </button>
        <button
          class="btn btn-prev"
        >
          Finishing
        </button>
      </div>
      <div
        v-if="activeId < listStep.length"
        class="btn-box flex items-center justify-between mx-auto"
      >
        <button class="btn btn-prev" @click="prev" :disabled="disabled">
          Previous
        </button>
        <!-- <button class="btn btn-next" type="submit" @click="handleSubmit(next)">
          Next
        </button> -->
      </div>
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
          listField: [
            {
              name: "email",
              type: "text",
              msgVali: "email",
              id: 1,
            },
            {
              name: "full Name",
              type: "text",
              msgVali: "alpha_spaces",
              id: 2,
            },
          ],
        },
        {
          id: 2,
          text: "About Company",
          name: "step2",
          listField: [
            {
              name: "number employees",
              type: "number",
              msgVali: "numeric",
              id: 1,
            },
            {
              name: "company",
              type: "text",
              msgVali: "alpha_spaces",
              id: 2,
            },
          ],
        },
        {
          id: 3,
          text: "Finishing Up",
          name: "step3",
          listField: [
            {
              name: "infomation",
              type: "text",
              msgVali: "alpha_spaces",
              id: 1,
            },
            {
              name: "I accepet conditions",
              type: "checkbox",
              msgVali: "",
              id: 2,
            },
          ],
        },
      ],
      disabled: true,
      finish: false,
    };
  },
  components: {
    Step1,
    Process,
  },
  methods: {
    next() {
      if (this.activeId >= this.listStep.length) {
        this.finish = true;
        alert("submit success");
        return;
      }
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
