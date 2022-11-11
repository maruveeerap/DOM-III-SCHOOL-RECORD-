document.querySelector("form").addEventListener("submit", myForm)

function myForm(event) {
    event.preventDefault();
    let staffName = document.querySelector("#name").value
    let id = document.querySelector("#staffId").value
    let sub = document.querySelector("#dept").value
    let experience = document.querySelector("#exp").value
    let mail = document.querySelector("#email").value
    let mb = document.querySelector("#mbl").value


    console.log("staffName,id,sub,experience,mail,mb");

    let tRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = staffName;

    let td2 = document.createElement("td");
    td2.innerText = id;

    let td3 = document.createElement("td");
    td3.innerText = sub;

    let td4 = document.createElement("td");
    td4.innerText = experience;

    let td5 = document.createElement("td");
    td5.innerText = mail;

    let td6 = document.createElement("td");
    td6.innerText = mb;

    let td7 = document.createElement("td");
    if (td4 < "1") {
        td7.innerText = "Trainee"
    } else if (td4 >= "1" && td4 < "3") {
        td7.innerText = "Junior"
    } else {
        td7.innerText = "Senior"
    }



    let td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.addEventListener("click", deleteList)

    tRow.append(td1, td2, td3, td4, td5, td6, td7, td8)

    document.querySelector("tbody").append(tRow)

    document.querySelector("#name").value = " "
    document.querySelector("#staffId").value = " "
    document.querySelector("#dept").value = " "
    document.querySelector("#exp").value = " "
    document.querySelector("#email").value = " "
    document.querySelector("#mbl").value = " "

}
function deleteList(event) {
    event.target.parentNode.remove()
}
