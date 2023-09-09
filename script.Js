let menu_housing = document.getElementById("menu_housing");
let note_field = document.getElementById("note_field");
const menu = () => {
  menu_housing.innerHTML +=
    '<div onclick="w_close()" id="menu_window" class="container-fluid text-center"><div class="row"><div id="menu_panel" class="flex-column"><p style="font-weight: bold">New note</p><div class="input-group mb-3"><span class="input-group-text" id="inputGroup-sizing-default">Note name</span><input id="note_name"type="text"class="form-control"aria-label="Sizing example input"aria-describedby="inputGroup-sizing-default"/></div><div class="input-group"><span class="input-group-text">Content</span><textarea id="note_content"style="height: 300px"class="form-control"aria-label="With textarea"></textarea></div><button style="margin-top: 5px"type="button"class="btn btn-dark"onclick="add_note()">Create</button></div></div></div>';
};

const add_note = () => {
  let note_name = document.getElementById("note_name").value;
  let note_content = document.getElementById("note_content").value;

  note_field.innerHTML += ` <div id="${note_name}" class="card" style="width: 18rem"><button type="button"class="btn btn-dark"onclick="remove_note('${note_name}')">𝕏</button><div class="card-body"><h5 class="card-title">${note_name}</h5><p class="card-text">${note_content}</p></div></div></div></div>`;

  menu_housing.innerHTML = "";
};

const remove_note = (x) => {
  let rm_element = document.getElementById(x);

  rm_element.remove();
};

const w_close = () => {
  menu_housing.innerHTML = "";
};
