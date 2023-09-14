const button = document.getElementById("btn_add_tech");
const button_add = document.getElementById("btn_add");
const dev = {};
const devs = [];

button.addEventListener("click", function tech(ev) {
  ev.preventDefault();

  const section = document.getElementById("form_years");

  const name_tech = document.createElement("label");
  name_tech.for = "tecnologia";
  name_tech.id = "name_techh";
  name_tech.innerText = "Nome da tecnologia: ";

  const inpt_tech = document.createElement("input");
  inpt_tech.type = "text";
  inpt_tech.name = "tecnologia";
  inpt_tech.id = "name_tech";

  const h3 = document.createElement("h7");
  h3.innerText = "Tempo de uso";
  h3.id = "h7_item";

  const radio02 = document.createElement("label");
  radio02.innerText = "0-2 anos";
  radio02.for = "0a2";
  radio02.id = "radio_item";

  const radio02_input = document.createElement("input");
  radio02_input.type = "radio";
  radio02_input.name = "year_experience";
  radio02_input.id = "0a2";
  radio02_input.value = "0 a 2 anos";

  const radio34 = document.createElement("label");
  radio34.innerText = "3-4 anos";
  radio34.for = "3a4";
  radio34.id = "radio_item";

  const radio34_input = document.createElement("input");
  radio34_input.type = "radio";
  radio34_input.name = "year_experience";
  radio34_input.id = "3a4";
  radio34_input.value = "3 a 4 anos";

  const radio5 = document.createElement("label");
  radio5.innerText = "5+ anos";
  radio5.for = "five";
  radio5.id = "radio_item";

  const radio5_input = document.createElement("input");
  radio5_input.type = "radio";
  radio5_input.name = "year_experience";
  radio5_input.id = "five";
  radio5_input.value = "5+ anos";

  const btn_removed = document.createElement("button");
  btn_removed.innerText = "Remover";
  btn_removed.addEventListener("click", function () {
    document.getElementById("form_years").removeChild();
  });
  section.append(
    name_tech,
    inpt_tech,
    h3,
    radio02,
    radio02_input,
    radio34,
    radio34_input,
    radio5,
    radio5_input,
    btn_removed
  );
});

button_add.addEventListener("click", function (ev) {
  ev.preventDefault();
  const name = document.getElementById("name_input").value;
  dev.name = name;
  const tecnologia = document.getElementById("name_tech").value;
  dev.tech = tecnologia;
  const experience = document.querySelector(
    "input[name='year_experience']:checked"
  ).value;
  dev.experience = experience;
  devs.push(dev);
  console.log(devs);

  document.getElementById("name_input").value = "";
  document.getElementById("name_tech").value = "";
});
