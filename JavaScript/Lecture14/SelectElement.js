const el = document.getElementById("username");
el.style.color = "red";
el.innerText = "Alex ";

const blocks = document.querySelector(".block");
blocks.style.color = "green";
blocks.style.backgroundColor = "yellow";
blocks.style.display = "inline";
blocks.children.style.color = "blue";

blocks.classList.add("active");
blocks.classList.remove("block");

// blocks.remove();
