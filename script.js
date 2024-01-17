
function getApi() {
let apiUrl = `https://api.adviceslip.com/advice`;
console.log(apiUrl)

axios.get(apiUrl)
.then(response => {
    displayAdvice(response.data.slip.advice);
    displayAdviceId(response.data.slip.id)
})
.catch(error => {
    console.error("Error fetching advice:", error);
});
}

function displayAdviceId(id) {
    let adviceTitle = document.querySelector("#advice-title");
    adviceTitle.innerHTML = `advice #${id}`;
}

function displayAdvice(advice) {
   
    let adviceContent = document.querySelector("#advice-content");
    adviceContent.textContent = `"${advice}"`;
}

function getAdvice() {
    getApi();
   
    let adviceDice = document.querySelector("#advice-dice");
adviceDice.addEventListener("click", getApi);
}
getAdvice();



