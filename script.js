window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let task = input.value;

        if (!task) {
            alert("fill the task");
            return;
        }

        let task_el = document.createElement("div");
        task_el.classList.add("task");

        let task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        let taks_input_el = document.createElement("input");
        taks_input_el.classList.add("text");
        taks_input_el.type = "text";
        taks_input_el.value = task;
        taks_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(taks_input_el);

        let task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        let task_actions_edit_el = document.createElement("button");
        task_actions_edit_el.classList.add("edit");
        task_actions_edit_el.innerHTML = "EDIT";

        let task_actions_delete_el = document.createElement("button");
        task_actions_delete_el.classList.add("delete");
        task_actions_delete_el.innerHTML = "DELETE";

        task_actions_el.appendChild(task_actions_edit_el);
        task_actions_el.appendChild(task_actions_delete_el);
        task_el.appendChild(task_content_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value = "";

        task_actions_edit_el.addEventListener('click', () => {
            if (task_actions_edit_el.textContent.toLowerCase() == "edit") {
                taks_input_el.removeAttribute("readonly");
                taks_input_el.focus();
                task_actions_edit_el.textContent = "SAVE";
            }
            else {
                taks_input_el.setAttribute("readonly", "readonly");
                task_actions_edit_el.textContent = "EDIT";
            }
        })

        task_actions_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        });
    });
});