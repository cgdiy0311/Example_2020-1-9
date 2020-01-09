// 创建多个实例化vue对象
const demoOne = new Vue({
  //创建根元素，容器element
  el: '#app-one',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      title: 'this is app one',
      health: 100,
      ended: false,

      compPunch: false,
    };
  },
  //方法
  methods: {
    punch() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
      if (this.health > 0) {
        // this.$refs.hammer.style.animation = "turn .6s linear 1";
      }
      return {
        anm: this.metAnm,
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    },

  },
  computed: {}
});

const demoTwo = new Vue({
  //创建根元素，容器element
  el: '#app-two',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      title: 'this is app two',
    };
  },
  //方法
  methods: {
    changeAppOneTitle() {
      // demoOne是第一个实例的名字
      demoOne.title = '这是app-one的title';
    },
  },
  computed: {}
});