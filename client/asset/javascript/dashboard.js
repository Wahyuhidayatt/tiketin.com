let dashboard = new Vue({
  el : '#dashboard',
  data : {
    name : '',
    token : ''
  },
  methods : {
    logout : function(){

    },
    checkAuth : function(){
      console.log('oke oce');
     if (localStorage.getItem("authToken") === null) {
        swal({
            title: "Error!",
            text: 'Maaf Kamu sebelumnya harus login terlebih dahulu',
            type: "error",
            confirmButtonText: "OK Saya paham"
          });
          setTimeout(function(){
            window.location="http://localhost:8080/login.html";
          }, 4000);

      }
    }
  },
  mounted : function(){
    this.checkAuth()
  }
})
