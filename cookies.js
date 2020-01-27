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


