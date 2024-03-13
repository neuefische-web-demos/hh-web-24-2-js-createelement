console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

const searchResults = [
  {
    id: "0",
    text: "Mdn Web Docs",
    link: "https://mozilla.dev",
  },
  {
    id: "1",
    text: "Wikipedia - Mdn",
    link: "https://wikipedia.org",
  },
  {
    id: "2",
    text: "Mdn",
    link: "https://startpage.com",
  },
  {
    id: "3",
    text: "Test",
    link: "https://startpage.com",
  },
];

// new:
// document.createElement(type) -> generate a new html element
// element.append(newElement) -> add element to html page
// element.querySelector -> local search for elements

const firstResult = searchResults[2];

function createLink(resultData) {
  const newListElement = document.createElement("li");
  newListElement.classList.add("card");
  newListElement.setAttribute("data-js", "card");
  newListElement.id = resultData.id;

  // Dangerous - do not use with user generated data!
  newListElement.innerHTML = `
  <h2 class='card__title'>${resultData.text}</h2>
  <a href=${resultData.link} target="_blank">go to page</a>
  <button>click me!</button>
`;

  const firstButtonInDocument = newListElement.querySelector("button");
  console.log(firstButtonInDocument);
  firstButtonInDocument.addEventListener("click", function (event) {
    console.log(event); // -> event is an object with interesting data about the event provided by the browser

    console.log(resultData.link);
    newListElement.replaceWith("");
  });

  cardContainer.append(newListElement);
}

createLink(searchResults[0]);
createLink(searchResults[1]);
createLink(searchResults[2]);
createLink(searchResults[3]);

// To be continued...
// searchResults.forEach(createLink);
