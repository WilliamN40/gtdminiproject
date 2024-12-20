var count, warning

document.addEventListener("DOMContentLoaded", () => {
    count = document.getElementById("count")
    warning = document.getElementById("warning")
})

const increase = () => {
    warning.innerHTML = ""
    count.innerHTML = parseInt(count.innerHTML) + 1
}

const decrease = () => {
    warning.innerHTML = ""
    if (count.innerHTML == 0)
    {
        warning.innerHTML = "Counter cannot be less than zero!"
    } else
    {
        count.innerHTML = parseInt(count.innerHTML) - 1
    }
}

const reset = () => {
    warning.innerHTML = ""
    count.innerHTML = 0
}