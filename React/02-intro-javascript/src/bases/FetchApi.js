console.log("Ola k ase");

const apiKey = "ajnuRcQxROl3QWN4u12musdIP1JONXmT";

const httpRequest = fetch(`http://api.giphy.com/v1/gifs/random?key=${apiKey}`);

httpRequest
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
  })
  .catch((err) => console.error(err));
