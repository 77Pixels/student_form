let fname = document.querySelector("#name");
let age = document.querySelector("#age");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let course = document.querySelector("#course");
let submit = document.querySelector("#submit");
let container = document.querySelector(".container");

submit.addEventListener("click", function () {
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  td1.textContent = fname.value;
  container.append(td1);
  td2.textContent = age.value;
  container.append(td2);
  if (male.checked == true) {
    td3.textContent = male.value;
    container.append(td3);
  } else {
    td4.textContent = female.value;
    container.append(td4);
  }
});
