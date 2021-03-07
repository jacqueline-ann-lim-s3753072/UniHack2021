changeTemp();

function changeTemp() {
    let elements = document.getElementsByClassName("days-left");

    if (Number(document.querySelector("#temperature-input").value) > 4) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = Math.max(0, elements[i].innerHTML - 1);
            if (Number(elements[i].innerHTML) == 0) {
                document.querySelectorAll(".days-left")[i].style.border =
                    "2px solid red";
            } else {
                document.querySelectorAll(".days-left")[i].style.border =
                    "2px solid green";
            }
        }
    } else if (Number(document.querySelector("#temperature-input").value) < 4) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = Number(elements[i].innerHTML) + 1;
            document.querySelectorAll(".days-left")[i].style.border =
                "2px solid green";
        }
    }
}

function checkUpperFridge() {
    document.querySelector("#food-check-subcategory").style.display =
        "inline-block";
}