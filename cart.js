const product = [
  {
      id: 0,
      image: 'image4.jpg',
      title: 'iPhone 15',
      price: 23000000,
      
  },
  {
      id: 1,
      image: 'image5.jpg',
      title: 'iPhone 15 Pro',
      price: 32000000,
     
  },
  {
      id: 2,
      image: 'image6.jpg',
      title: 'iphone 11',
      price: 10000000,
     
  },
  {
      id: 3,
      image: 'image7.jpg',
      title: 'iPhone 11 Pro max',
      price: 18000000,
     
  },
  {
    id: 4,
    image: 'image8.jpg',
    title: 'iPhone X',
    price: 5000000,
    
},
{
  id: 5,
  image: 'image9.jpg',
  title: 'iPhone XS',
  price: 6000000,
  
},
{
  id: 6,
  image: 'image10.jpg',
  title: 'iPhone 14 Pro',
  price: 24000000,
  
},
{
  id: 7,
  image: 'image11.jpg',
  title: 'iPhone 14',
  price: 18000000,
  

},
{
  id: 8,
  image: 'image12.jpg',
  title: 'iPhone 11 Pro',
  price: 13000000,
  
},
{
  id: 9,
  image: 'image13.jpg',
  title: 'Xiaomi Redmi Note 11 Pro',
  price: 4900000,
 
},
{
  id: 10,
  image: 'image14.jpg',
  title: 'Oppo Reno6 5G',
  price: 9490000,
 
},
{
  id: 11,
  image: 'image15.jpg',
  title: 'Oppo Reno 5G',
  price: 6990000,
 
},
{
  id: 12,
  image: 'samsung2.jpg',
  title: 'Samsung Awesome',
  price: 23999999,
 
},
{
  id: 13,
  image: 'samsung.jpg',
  title: 'Samsung Galaxy S23',
  price: 30000000,
 
},
{
  id: 14,
  image: 'ip1.jpg',
  title: 'Iphone XS Max',
  price: 10999999,
 
},
{
  id: 15,
  image: 'ip2.jpg',
  title: 'Iphone 12 Promax',
  price:15999999,
 
},
{
  id: 16,
  image: 'samsung3.jpg',
  title: 'Samsung Galaxy Zlip',
  price:25678910,
 
},
{
  id: 17,
  image: 'ip4.jpg',
  title: 'Iphone XS',
  price: 9999999,
 
},
{
  id: 18,
  image: 'ip5.jpg',
  title: 'iPhone 15 Promax',
  price: 33000000,
 
},
{
  id: 19,
  image: 'oppo.jpg',
  title: 'Oppo A58',
  price: 6999999,
 
},
{
  id: 20,
  image: 'opp1.jpg',
  title: 'OPPO AK17',
  price: 5000000,
 
}



  
  
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2> ${price} VND</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Thêm vào giỏ hàng</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Không Có Đơn Hàng nào";
      document.getElementById("total").innerHTML = " "+0+" VND";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price,price1} = items;
          total=total+price;
          document.getElementById("total").innerHTML = " "+total+" VND";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'> ${price} VND</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }

  
}
function saveData(){
  alert("Vui lòng chọn sản phẩm bạn muốn muốn mua và chúng tôi sẽ sớm giao hàng cho bạn");
}
function init() {
  var regForm = document.getElementById("comfirm");
  regForm.onsubmit = saveData;
   

}

window.onload = init;