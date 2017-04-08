
  var app = new Vue({
    el: '#login',
    data: {
      user : {
        name : '',
        token : ''
      },
      register : {
        username : '',
        password : '',
        email: '',
        address : ''
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
               window.location="http://localhost:8080/index.html";
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
      registerUser : function(){
        let data = {
          username : this.register.username,
          password : this.register.password,
          email : this.register.email,
          address : this.register.address
        }
        axios.post('http://localhost:3000/api/register', {
          username: data.username,
          email : data.email,
          address : data.address,
          password: data.password
        })
        .then(function (response) {
          //jika sukses
          if (response.data.success){
              swal("register Success", "Selamat datang di TIKETin ", "success")
              app.closeModalRegister()
              localStorage.setItem("authToken", response.data.token);
              setTimeout(function(){
                window.location="http://localhost:8080/index.html";
              }, 4000);
          }else {
            swal({
                title: "Error!",
                text: response.data.msg,
                type: "error",
                confirmButtonText: "OK Saya paham"
              });
              console.log(data.email);
          }
        })
        .catch(function (error) {
          console.log(data.email);
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
              window.location="http://localhost:8080/index.html";
            }, 4000);

        }
      },
      showModalRegister : function(){
        $('#modal-register').addClass('is-active')
      },
      closeModalRegister : function(){
        console.log('oke oce');
        app.register.username =''
        app.register.password =''
        app.register.address = ''
        app.register.email = ''
        $('#modal-register').removeClass('is-active')
      },
      showForget(){
        swal({
          title: "Forget Account ?",
          text: "Please insert your email ? ",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "slide-from-top",
          inputPlaceholder: "Write something"
        },
        function(inputValue){
          if (inputValue === false) return false;

          if (inputValue === "") {
            swal.showInputError("Masukkan email!");
            return false
          }

          swal("Nice!", "Cek email anda sekarang " + inputValue, "success");
        });
      },
      forgetAccount : function(){

      }
    },
    mounted : function(){
      this.checkAuth()
    }
  })
