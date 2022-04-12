import FetchApi from "./fetchApi.js";
export default function ApiData() {
  const url = "https://opentdb.com/api.php?amount=10";
  const results = FetchApi(url);
console.log(results);

const maiN = document.createElement('section');

function convertOurData(results) {
  results.forEach(({ question }) => {
    
  const articlE = document.createElement('article');
  articlE.innerHTML = `
    <p>${question} </p>
    `
    maiN.append(articlE);

  }
  convertOurData(results);

  console.log(maiN)

  return<p>asdf</p>
}
