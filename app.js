const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    name(value) {
      if (value == "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "Lacatis";
      }
    },
  },
  computed: {
    // fullName() {
    //   if (this.name == "") {
    //     return "";
    //   }
    //   return this.name + " " + "Lacais";
    // },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
