var employee_pay_rate = document.getElementById("employee_pay_rate")
var wsib_premium_rate = document.getElementById("wsib_premium_rate")
var employer_pay_rate_error = document.getElementById("employer_pay_rate_error")
var employer_pay_rate_button = document.getElementById("employer_pay_rate_button")
var employer_pay_rate_info = document.getElementById("employer_pay_rate_info")

var a, b, c

employer_pay_rate_button.addEventListener("click", () => {
    employer_pay_rate_error.innerHTML = ""
    employer_pay_rate_info.innerHTML = ""

    if (isNaN(employee_pay_rate.value.trim())) {
        employer_pay_rate_error.innerHTML = "Invalid Employee Pay Rate"
        return
    }

    if (employee_pay_rate.value.trim() === "") {
        employer_pay_rate_error.innerHTML = "Invalid Employee Pay Rate"
        return
    }

    if (Number(employee_pay_rate.value.trim()) < 10) {
        employer_pay_rate_error.innerHTML = "Employee Pay Rate should be greater than 10"
        return
    }

    if (isNaN(wsib_premium_rate.value.trim())) {
        employer_pay_rate_error.innerHTML = "Invalid WSIB Premium Rate"
        return
    }

    if (wsib_premium_rate.value.trim() === "") {
        employer_pay_rate_error.innerHTML = "Invalid WSIB Premium Rate"
        return
    }

    if (Number(employee_pay_rate.value.trim()) < 0) {
        employer_pay_rate_error.innerHTML = "WSIB Premium Rate should be greater than or equal to 0"
        return
    }

    a = Number(employee_pay_rate.value)
    b = Number(wsib_premium_rate.value)

    c = 0

    c = Number(1.14 * a) + Number((1.14 * a * b) / 100)
    c = c + Number(c / 20) + 2.25

    employer_pay_rate_info.innerHTML =
        "Employee Pay Rate : <div style='display:inline;color:rgb(45,113,192)'>$" +
        Number(a) +
        "</div><br>" +
        "WSIB Premium Rate : <div style='display:inline;color:rgb(45,113,192)'>" +
        Number(b) +
        "</div><br>" +
        "Employer Pay Rate : <div style='display:inline;color:rgb(45,113,192)'>$" +
        Number(c) +
        "</div><br><br>" +
        "Employer pay rate includes regular wage, vacation pay, employer ei, employer cpp, wsib insurance, public holiday pay, cost of oneengine operations and includes $0.75 cut for profit and growth.<br><br>" +
        "Overtime pay and premium pay will be 1.5 of <b>employer pay rate</b>"
})
