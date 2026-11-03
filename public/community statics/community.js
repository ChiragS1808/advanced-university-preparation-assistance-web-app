
// here above summery section is showing student doubt on webpage so it should be replaced with student name.
let posts = [];
let savedPosts =
sessionStorage.getItem("posts");

if(savedPosts){
    posts =JSON.parse(savedPosts);

}



let textChip =document.getElementById("textChip");

let imageChip =
document.getElementById("imageChip");

let textSection =
document.getElementById("textSection");

let imageSection =
document.getElementById("imageSection");


textChip.addEventListener("click",function(){

    textSection.style.display="block";
    imageSection.style.display="none";

});


imageChip.addEventListener("click",function(){

    textSection.style.display="none";
    imageSection.style.display="block";

});

let uploadBtn =
document.getElementById("uploadBtn");

let count = 0;



uploadBtn.addEventListener("click",function(){

    let doubt =
    document.getElementById("doubtText").value;

    let imageFile =
    document.getElementById("imageInput").files[0];

// Nothing entered
if(doubt.trim() === "" && !imageFile)
{
    alert("Please enter content");
    return;
}

// Image selected but no description
if(doubt.trim() === "" && imageFile)
{
    alert("Add description in text");
    return;
}

    count++;

    let accordion =
    document.getElementById("communityPosts");

// TEXT REQUIRED

if(doubt.trim() === "")
{
    alert("Add description in text");
    return;
}

// TEXT ONLY POST

if(!imageFile)
{
    accordion.innerHTML += `

    <div class="accordion-item">

        <h2 class="accordion-header">

            <button
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#item${count}">

                ${sessionStorage.getItem("userName")}

            </button>

        </h2>

        <div
        id="item${count}"
        class="accordion-collapse collapse">

            <div class="accordion-body">

                ${doubt}

            </div>

        </div>

    </div>

    `;
}

// TEXT + IMAGE POST

else
{
    let reader = new FileReader();

    reader.onload = function(){

        accordion.innerHTML += `

        <div class="accordion-item">

            <h2 class="accordion-header">

                <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#item${count}">

                    ${sessionStorage.getItem("userName")}

                </button>

            </h2>

            <div
            id="item${count}"
            class="accordion-collapse collapse">

                <div class="accordion-body">

                    <p>${doubt}</p>

                    <img
                    src="${reader.result}"
                    class="img-fluid rounded mt-2">

                </div>

            </div>

        </div>

        `;
    };

    reader.readAsDataURL(imageFile);
}



// Clear form
document.getElementById("doubtText").value = "";
document.getElementById("imageInput").value = "";

// Reset UI
textSection.style.display = "none";
imageSection.style.display = "none";

//Close modal
// let modal =
// bootstrap.Modal.getInstance(
// document.getElementById("uploadModal")
// );

if(modal){
    modal.hide();
}


});

