const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  fetch("https://randomuser.me/api/")
    .then(data => data.json())
    .then(data => showData(data))
    .catch(error => console.log(error));
});

function showData(data) {
  const {
    name: { first },
    dob: { age }
  } = data.results[0];

  document.getElementById("name").textContent = first;
  document.getElementById("age").textContent = age;
}
