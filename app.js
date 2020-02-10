const textAreaActive = document.querySelector(".post");
const submitButton = document.querySelector("#button");
const item = document.querySelector(".items");
const deletePost = document.querySelectorAll("span");
const defaultText = document.querySelector(".defaultText");

textAreaActive.addEventListener("click", function() {
  textAreaActive.classList.add("active");

  let postData = (textAreaActive.value = "");
});

deletePost.forEach(post => {
  post.addEventListener("click", function() {
    console.log(post);
    const delPost = post.parentElement;
    delPost.parentElement.removeChild(delPost);
  });
});

submitButton.addEventListener("click", function(e) {
  e.preventDefault();

  const printValue = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");

  let postData = textAreaActive.value;

  printValue.innerHTML = postData;
  span.innerHTML = "Delete post";
  div.appendChild(printValue);
  div.appendChild(span);
  item.appendChild(div);

  postData = textAreaActive.value = "";

  span.addEventListener("click", function() {
    const newDel = span.parentElement;
    newDel.parentElement.removeChild(newDel);
  });
});
