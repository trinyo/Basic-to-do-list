let menu_housing = document.getElementById("menu_housing");

const menu = () => {
  menu_housing.innerHTML +=
    '<div id="menu_window" class="container-fluid text-center"><div class="row"><div id="menu_panel" class="flex-column"><p style="font-weight: bold">New note</p><div class="input-group mb-3"><span class="input-group-text" id="inputGroup-sizing-default">Note name</span><input id="note_name"type="text"class="form-control"aria-label="Sizing example input"aria-describedby="inputGroup-sizing-default"/></div><div class="input-group"><span class="input-group-text">Content</span><textarea id="textarea"style="height: 300px"class="form-control"aria-label="With textarea"></textarea></div><button style="margin-top: 5px"type="button"class="btn btn-dark"onclick="">Create</button></div></div></div>';
};

const add_note = () => {};
