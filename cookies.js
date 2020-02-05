console.info("cookie script running");

const getRandomValue = () => Math.random().toString(32).substr(2);

const getCookieValue = (name) => {
  let value;
  document.cookie.split(';').filter((cookie) => {
    const key = cookie.split('=').map(c => c.trim());
    if (key[0] === name) {
     console.info('encontrado: ', key[1]);
     value = key[1];
    }
  });
 return value;
}

const setCookieValue = (name, value) => {
  document.cookie = `${name}=${value}; max-age=3600; path=/`;
}

const cookieName = "tsvLocalCookie";


const sendNewCookieToServer = (cookieValue) => {
  const myHeaders = new Headers();

  const myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

  const myRequest = new Request(`/newcookie?value=${cookieValue}`, myInit);

  fetch(myRequest)
  .then(function(response) {
    return response.json();
  })
  .then((myJson) => {
   console.info("response: ", myJson);
  });

};


const actualHash = getCookieValue(cookieName); 
if (actualHash) {
  console.info("Ya existe!!! ", actualHash);
} else {
  const hash = `${getRandomValue()}${getRandomValue()}`;
  sendNewCookieToServer(hash);
  console.info("Generando valor: ", hash);
  setCookieValue(cookieName, hash);
}