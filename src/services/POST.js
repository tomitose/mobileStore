export const POST = async (id) => {
  // const  componentDidMount()=> {
  //   const keys = Object.keys(localStorage);
  //   keys.forEach(key => {
  //     if (key.includes("-expirationTime")) {
  //       const expirationTime = localStorage.getItem(key);
  //       if (expirationTime < new Date().getTime()) {
  //         const productKey = key.split("-expirationTime")[0];
  //         localStorage.removeItem(productKey);
  //         localStorage.removeItem(key);
  //       }
  //     }
  //   });

  const body = {
    id: id.id,
    colorCode: id.colorCode.code,
    storageCode: id.storageCode.code,
  };

  console.log("------------");
  console.log(id.id);
  console.log(id.colorCode.code);
  console.log(id.storageCode.code);

  const domainAPI = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/";
  const endPoint = "api/cart";
  const url = domainAPI + endPoint;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("count: ", data.count);
      if (data.count) {
        const productKey = `product-${id.id}`;
        localStorage.setItem(productKey, JSON.stringify(body));
        localStorage.setItem(
          `${productKey}-expirationTime`,
          new Date().getTime() + 20000
        );

        const checkExpiration = setInterval(() => {
          const expirationTime = localStorage.getItem(
            `${productKey}-expirationTime`
          );
          if (expirationTime && new Date().getTime() > expirationTime) {
            localStorage.removeItem(productKey);
            localStorage.removeItem(`${productKey}-expirationTime`);
            clearInterval(checkExpiration);
          }
        }, 1000);
      }
    })
    .catch((e) => console.log(e));
};
