const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//   console.log("Data Getting........");
//   text.innerHTML = "Data Fetching...";
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   text.innerHTML = data[0].text;
// };

// addEventListener("click", getFacts);

function getFacts() {
  text.innerHTML = "Data Fetching...";
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      text.innerHTML = data[1].text;
    });
}
addEventListener("click", getFacts);
