export const POST = async () => {
  const storageKey = "productData";
  const expiration = 60 * 60 * 1000; // 1 hour in milliseconds

  // Check if data exists in localStorage and if it's not expired
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const data = JSON.parse(storedData);
    const now = Date.now();
    if (now < data.expiration) {
      console.log("Data from localStorage:", data.data);
      return;
    }
  }

  //seteo los valores de las variables
  const id = "0001";
  const colorCode = "1";
  const storageCode = "2";

  //setteo el Json.
  const body = {
    id: id,
    colorCode: colorCode,
    storageCode: storageCode,
  };

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
      console.log("Data from API:", data);
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data: data, expiration: Date.now() + expiration })
      );
    })
    .catch((e) => console.log(e));
};
