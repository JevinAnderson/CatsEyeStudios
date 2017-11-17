export const postJSON = (url, data) =>
  new Promise((resolve, reject) => {
    const json = JSON.stringify(data);

    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    request.onload = () => {
      const { responseText, status } = request;

      if (status >= 200 && status < 400) {
        resolve(responseText);
      } else {
        reject({ status, data: responseText });
      }
    };

    request.onerror = reject;

    request.send(json);
  });
