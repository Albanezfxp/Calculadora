const button = document.getElementById("btn_add_tech");

button.addEventListener("click", function tech(ev) {
  ev.preventDefault();

  const section = document.getElementById("form_years");

  const name_tech = document.createElement("label");
  name_tech.for = "tecnologia";
  name_tech.innerText = "Nome da tecnologia: ";

  const inpt_tech = document.createElement("input");
  inpt_tech.type = "text";
  inpt_tech.name = "tecnologia";
  inpt_tech.id = "name_tech";

  const radio02 = document.createElement("label");
  radio02.innerText = "0-2 anos";
  radio02.for = "0a2";
  radio02.id = "radio02";

  const radio02_input = document.createElement("input");
  radio02_input.type = "radio";
  radio02_input.name = "year_experience";
  radio02_input.id = "0a2";

  const radio34 = document.createElement("label");
  radio34.innerText = "3-4 anos";
  radio34.for = "3a4";
  radio34.id = "radio02";

  const radio34_input = document.createElement("input");
  radio34_input.type = "radio";
  radio34_input.name = "year_experience";
  radio34_input.id = "3a4";

  const radio5 = document.createElement("label");
  radio5.innerText = "5+ anos";
  radio5.for = "five";
  radio5.id = "radio_five";

  const radio5_input = document.createElement("input");
  radio5_input.type = "radio";
  radio5_input.name = "year_experience";
  radio5_input.id = "five";

  const btn_removed = document.createElement("button");
  btn_removed.innerText = "Remover";
  btn_removed.addEventListener("click", function () {
    document.getElementById("form_years").removeChild();
  });
  section.append(
    name_tech,
    inpt_tech,
    radio02,
    radio02_input,
    radio34,
    radio34_input,
    radio5,
    radio5_input,
    btn_removed
  );
});
