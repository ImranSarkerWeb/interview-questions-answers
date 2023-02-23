const accorditonContainerDiv = document.getElementById(
  "accordionPanelsStayOpenExample"
);

window.addEventListener("load", function () {
  for (const item of questionAndAnswers) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("accordion-item");
    itemDiv.innerHTML = `
    
    <h2 class="accordion-header" id="panelsStayOpen-heading${item.id}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapse${item.id}" aria-expanded="false"
        aria-controls="panelsStayOpen-collapse${item.id}">
       <h6> ${item.question}</h6>
    </button>
 </h2>
 <div id="panelsStayOpen-collapse${item.id}" class="accordion-collapse collapse"
    aria-labelledby="panelsStayOpen-heading${item.id}">
    <div class="accordion-body">
   <p>  ${item.answer}</p>
    </div>
 </div>
    `;
    accorditonContainerDiv.appendChild(itemDiv);
  }
});

