
const Counter = {
  data() {
    return {
      counter: 0,


    }
  },
}
var app;

window.onload = () => {
  app = Vue.createApp(Counter);
  app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    props: ["titulo", "color"],

    template: `
      <h1>{{titulo}} {{color}}</h1>
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`

  })
  app.mount('#counter');
}
