let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
 
document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
    
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
    
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
   breakpoints: {
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },

   },
    
  });

  function saveData(){
  var name=document.getElementById("name").value;
  var phone=document.getElementById("phone").value;
  var email=document.getElementById("email").value;
  var address=document.getElementById("address").value;
  sessionStorage.name=name;
  sessionStorage.phone=phone;
  sessionStorage.email=email;
  sessionStorage.address=address;
  var eroo="";
  if (name.match("^[A-Z a-z]{1,30}$") == null) {
    alert("Tên của bạn không hợp lệ và không được để trống vui lòng nhập lại");
    eroo+="àinjasn";
    
  }
  if (phone.match("^((/+84)|0)[0-9]{9,10}$") == null) {
   alert("Số điện thoại của bạn không hợp lệ  và không được để trống vui lòng nhập lại");
     eroo+="àinjasn";
 }
 if(email.match("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")==null){
  alert("Email của bạn không hợp lệ  và không được để trống vui lòng nhập lại");
    eroo+="àinjasn";
 }
 if(address.match("^[#.0-9 a-z A-Z,-]+$") == null){
  alert("Địa chỉ của bạn không hợp lệ và không được để trống vui lòng nhập lại");
    eroo+="àinjasn";
 }
 
if(eroo==""){
  alert("Chúng tôi đã xác nhập thông tin của bạn chúng tôi sẽ gọi lại cho bạn sớm nhất để xác nhận");
  return true;
 
}
  }




  function init() {
    var regForm = document.getElementById("comfirm");
    regForm.onsubmit = saveData;
     
  
  }
  
  window.onload = init;
  
  