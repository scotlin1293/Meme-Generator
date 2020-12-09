document.addEventListener("DOMContentLoaded", function(){
    let memeForm = document.getElementById("meme-form");
    let listGallery = document.querySelector(".gallery");

memeForm.addEventListener("submit", function(event){
     event.preventDefault();

        // creating the li element

    let memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");



    
    // creating the canvas element to put our img background
let topText = document.getElementById("text-top");
let urlInput = document.getElementById('uploaded-img').value,
src =  urlInput,
img = document.createElement('img');
img.src = src;
img.width = "500";


let topTextDiv = document.createElement('div');
topTextDiv.classList.add("text", "top");
topTextDiv.innerText = document.getElementById("text-top").value;


let bottomTextDiv = document.createElement('div');
bottomTextDiv.classList.add("text", "bottom");
bottomTextDiv.innerText = document.getElementById("text-bottom").value;

let removeDiv = document.createElement('div');
removeDiv.classList.add("red-cross");
removeDiv.innerText = "XX";
removeDiv.style.color = "red";
    


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);
memeLi.appendChild(removeButton);

memeForm.reset();


    });





function remove(event){
  event.target.parentNode.remove();
}


listGallery.addEventListener('click', remove, false);

});