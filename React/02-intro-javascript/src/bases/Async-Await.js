console.log("Ola k ase");

const apiKey = "ajnuRcQxROl3QWN4u12musdIP1JONXmT";

const apiURL = `http://api.giphy.com/v1/gifs/random?key=${apiKey}`;

const apiCall = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Dentro del apiCall", data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

console.log("Fuera del apiCall", apiCall(apiURL));
