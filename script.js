var para = document.querySelector("p");
var btn = document.querySelector("button");
var check = 0;

btn.addEventListener("click", e=> {
  if (check == 0) {
    btn.innerHTML = "Unfollow";
    para.innerHTML = "Thanks for following";
    btn.style.backgroundColor = "black";

    check = 1;
  } else {
    btn.innerHTML = "Follow";
    para.innerHTML = "Follow Me";
    btn.style.backgroundColor = "rgb(62, 62, 206)";
    check = 0;
  }
});
