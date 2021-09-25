import { ONE_DAY, options, ValidString } from "./const.js";

//MENU CREATE
const menu = document.getElementById("menu");
// const h1 = document.createElement("h1");
// h1.innerHTML = "Chon chuong trinh : ";
// menu.appendChild(h1);
menu.innerHTML = "<h1>Chon chuong trinh : </h1>";

const select = document.createElement("select");

//Object.fromentries
Object.entries(options).forEach(arr => {
    // const option = document.createElement("option");
    // option.value = arr[0];
    // option.text = arr[1];
    // select.appendChild(option);
    select.innerHTML += `<option value=${arr[0]}>${arr[1]}</option>`;
})
menu.appendChild(select);

const CreateButton = (name, parentEl, func, color) => {
    const button = document.createElement("button");
    button.innerHTML = name;
    button.style.backgroundColor = color;
    button.addEventListener("click", func);
    parentEl.appendChild(button);
    return button;
}

function CreateInput(text, parentEl) {
    const input = document.createElement("input");
    input.placeholder = text;
    parentEl.appendChild(input);
    return input;
}

CreateButton("Confirm", menu, SelectTask);

//CHOICE TASK
function SelectTask() {
    let choice = select.options[select.options.selectedIndex].text;
    console.log(choice);
    if (choice == options.checkStringExist) {
        checkStringExist();
    } else if (choice == options.shortenString) {
        shortenString();
    }
}

// DEFINE PROGRAMMING
function checkStringExist() {
    const task = document.getElementById("task");
    if (task.childNodes.length == 1) {
        const inputC = CreateInput("Nhap chuoi con", task);
        const inputP = CreateInput("Nhap chuoi cha", task);
        CreateButton("Check !", task, CheckString, "red");

        function CheckString() {
            if (task.lastChild.nodeName == "P") {
                task.removeChild(task.lastChild);
            }
            const result = ValidString(inputP.value).includes(ValidString(inputC.value));
            const p = document.createElement("p");
            if (result) {
                p.innerText = `${inputC.value} la chuoi con cua ${inputP.value}`;
            } else {
                p.innerText = `${inputC.value} khong la chuoi con cua ${inputP.value}`;
            }
            task.appendChild(p);
            inputC.value = "";
            inputP.value = "";
        }
    }
}

function shortenString() {
    const task = document.getElementById("task");
    if (task.childNodes.length == 1) {
        const input = CreateInput("Nhap vao chuoi can chinh sua ", task);
        CreateButton("Edit !", task, EditString, "yellow");

        function EditString() {
            console.log(task.lastChild.nodeName)
            if (task.lastChild.nodeName == "P") {
                task.removeChild(task.lastChild);
            }
            const p = document.createElement("p");
            const result = `${input.value.substr(0, 8)}...`;
            p.innerHTML = result;
            task.appendChild(p);
            input.value = "";
        }
    }
}