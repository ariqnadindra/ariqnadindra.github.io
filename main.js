//alert ('hello world')

//prompt ('masukan password')
//let password = null
//password = 123
console.log('benar passwordnya' + password)
alert(password)

if (password == false) {
    password = "password salah"
} else {
    password = "password benar"
}//
//var password 

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.addEventListener('scroll', function() {
    var navcontainer = document.querySelector('header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { // Ganti 100 dengan nilai scroll tertentu di mana Anda ingin mengubah warna header
      header.style.backgroundColor = 'black'; // Ganti 'black' dengan warna yang Anda inginkan
    } else {
      header.style.backgroundColor = 'transparent'; // Atur kembali ke transparan ketika scroll di atas nilai tertentu
    }
  });