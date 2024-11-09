document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("grandparent clicked");
}, false)
document.querySelector("#parent")
.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("parent clicked");
}, false)
document.querySelector("#child")
.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("child clicked");
}, false)