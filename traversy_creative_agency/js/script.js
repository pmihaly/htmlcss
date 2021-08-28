const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  // HTMLelem.classList.toggle(<osztály név>): ha nincs ilyen osztály attribútum: adjuk hozzá az osztályt, különben vegyük el
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});
