
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import {getProductDetail} from "./getFetch"


// const {id} = useParams()


// console.log(id)
// // useEffect(()=> {
//   getProductDetail(id)
//   .then(id)
//   .catch(error => {
//     console.log(error);
//   })
// },[id]);


export const POST = async (id) => {
  const storageKey = "productData";
  const expiration = 3600000; // 1 hour in milliseconds

  

  // Check if data exists in localStorage and if it's not expired
  // const storedData = localStorage.getItem(storageKey);
  // if (storedData) {
  //   const data = JSON.parse(storedData);
  //   const now = Date.now();
  //   if (now < data.expiration) {
  //     console.log(data.data);
  //     console.log("ESTOY RETURN")
  //     return;
  //   }
  // }


  // function addProductoToCart(){
  //   const cart = document.getElementById('cart')
  //   const quantity = parseInt(cart.textContent)
  //   cart.textContent = quantity+1 // Reemplazado por metodo POST a cart.TextConent
  // }
  
  // comprarbtn.addEventListener("click",()=>{ // comprarbtn reemplazar por boton de Add to cart
  //   addProductoToCart()
  //   const startTime = new Date
  //   const deltaTime = 3600000 //
  //   localStorage.setItem("startTime",startTime)
  
  
  
  //   setTimeout(() => {
  //     const started = new Date(localStorage.getItem("startTime"))
  //     const currentTime = new Date
  
  //     const t1 = started.getTime()
  //     const t2 = currentTime.getTime()
    
  //     if((t2-t1)>deltaTime){
  //     cart.textContent = 0 // Reemplazado por metodo POST a cart.TextConent
  //     }
  //   }, deltaTime)
  // })


  //setteo el Json.
  const body = {
    "id": id.id,
    "colorCode": id.colorCode.code,
    "storageCode": id.storageCode.code,
  };


  console.log("------------" )
  console.log(id.id)
  console.log(id.colorCode.code)
  console.log(id.storageCode.code)

  const domainAPI = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/";
  const endPoint = "api/cart";
  const url = domainAPI + endPoint;

  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(body),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("Data from API:", data);
  //     localStorage.setItem(
  //       JSON.stringify({ data: data})
  //       storageKey,
  //       JSON.stringify({ data: data, expiration: Date.now() + expiration })
  //     );
  //   })
  //   .catch((e) => console.log(e));


fetch(url,{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(data => {
    console.log("count: ", data.count);
  })
  .catch(e => console.log(e))
};
