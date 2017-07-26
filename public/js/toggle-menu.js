var app = new Vue({
  el: '#navbar',
  data: {
    isActive: false
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive
    }
  }
})
