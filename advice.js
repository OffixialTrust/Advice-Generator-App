
function id(id) {
    return document.getElementById(id);
}

async function fetchApi(url) {  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("An error occured while fetching the advice API");
      }  
    const result = await response.json();
    return result
}

let data;
id("dice").addEventListener("click", () => {
    // Fetching the advice API       
    fetchApi("https://api.adviceslip.com/advice")
.then((response) => data = response.slip);

    //Changing the content of the texts
    id("number").textContent = data.id;
    id("advice").textContent = `“${data.advice}”`;
});

// keeping the alert message down so the page can start loading, then the alert pops, buying time to fetch the Api
alert("After generating an advice, wait a few seconds before generating a new advice");


/*

// Without using async/await

fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then(result => data = result.slip);
*/