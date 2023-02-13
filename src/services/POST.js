export const POST = async (id) => {
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
        const currentProduct = JSON.parse(localStorage.getItem(productKey));
        if (currentProduct) {
          body.count = currentProduct.count + data.count;
        } else {
          body.count = data.count;
        }
        localStorage.setItem(productKey, JSON.stringify(body));
      }
    })
    .catch((e) => console.log(e));
};
