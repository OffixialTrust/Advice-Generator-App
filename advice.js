
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


id("dice-holder").addEventListener("click", () => {
    id("advice").textContent = "Loading...";

    // Fetching the advice API       
    fetchApi("https://api.adviceslip.com/advice").then((response) => {
    //Changing the content of the texts
         id("number").textContent = response.slip.id;
         id("advice").textContent = `“${response.slip.advice}”`;

    }).catch((err) => {
        id("advice").textContent = `An Error Occurred: ${err.message}`;
        id("advice").style.color = "red";
        id("header").style.color = "red";
        id("container").style.backgroundColor = "#eee";
    });
});

setTimeout(() => alert("Wait a few seconds before generating a new advice"), 800);



/*

// Without using async/await

fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then(result => data = result.slip);
*/