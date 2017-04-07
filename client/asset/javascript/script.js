var app = new Vue({
  el: '#login',
  data: {
    user : {
      name : '',
      token : ''
    }
  },
  methods : {
    login : function(){
      let data = {
        username : this.user.name,
        password : this.user.password
      }
      axios.post('http://localhost:3000/api/login', {
        username: data.username,
        password: data.password
      })
      .then(function (response) {
        //jika sukses
        if (response.data.success){
            swal("Login Success", "Selamat datang di TIKETin ", "success")
            localStorage.setItem("authToken", response.data.token);
             window.location="http://localhost:8080/dashboard.html";
        }else {
          swal({
              title: "Error!",
              text: response.data.msg,
              type: "error",
              confirmButtonText: "OK Saya paham"
            });
            app.user.name = ''
            app.user.password = ''
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    register : function(){
      let data = {
        username : this.user.name,
        password : this.user.password
      }
      axios.post('http://localhost:3000/api/register', {
        username: data.username,
        password: data.password
      })
      .then(function (response) {
        //jika sukses
        if (response.data.success){
            swal("Login Success", "Selamat datang di TIKETin ", "success")
            localStorage.setItem("authToken", response.data.token);
            setTimeout(function(){
              window.location="http://localhost:8080/dashboard.html";
            }, 4000);

        }else {
          swal({
              title: "Error!",
              text: response.data.msg,
              type: "error",
              confirmButtonText: "OK Saya paham"
            });
            app.user.name = ''
            app.user.password = ''
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    checkAuth : function(){
      console.log('oke oce');
      if (localStorage.getItem("authToken") !== null) {
        swal({
            title: "Error!",
            text: 'Kamu sudah login, silahkan klik tombol logout terlebih dahulu',
            type: "error",
            confirmButtonText: "OK Saya paham"
          });
          setTimeout(function(){
            window.location="http://localhost:8080/dashboard.html";
          }, 4000);

      }
    }
  },
  mounted : function(){
    this.checkAuth()
  }
})
