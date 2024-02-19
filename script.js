// the output element

const output_year = document.querySelector ('.output-year')
const output_month = document.querySelector ('.output-month')
const output_day = document.querySelector ('.output-day')
const submit_btn = document.querySelector ('.submit-btn')

// select the input element
let isValid = false
const input_year = document.querySelector ('#year')
const input_month = document.querySelector ('#month')
const input_day = document.querySelector ('#day')

// error element 
const error_year = document.querySelector ('.error-year')
const error_month = document.querySelector ('.error-month')
const error_day = document.querySelector ('.error-day')


// Add event listeners
submit_btn.addEventListener ('click', calculateDate)

input_day.addEventListener ('input', (e) => {
    if (+input_day.value > 31) {
        error_day.textContent = 'must be a valid day'
        isValid = false
        return
    }   else {
        isValid = true
        error_day.textContent =''
    }
    if (+input_day.value === 0) {
        isValid = false
        error_day.textContent = 'this field is required'
        isValid = false
        return
    }   else {
        error_day.textContent =''
    }
});

input_month.addEventListener ('input', (e) => {
    if (+input_month.value > 12) {
        error_month.textContent = 'must be a valid month'
        isValid = false
        return
    }   else {
        isValid = true
        error_month.textContent =''
    }
    if (+input_month.value === 0) {
        isValid = false
        error_month.textContent = 'this field is required'
        isValid = false
        return
    }   else {
        error_month.textContent =''
    }
})

input_year.addEventListener ('input', (e) => {
    if (+input_year.value > 2024) {
        error_year.textContent = 'must be a valid year'   
        isValid = false
        return
    }   else {
        isValid = true
        error_year.textContent =''
    }
    if (+input_year.value === 0) {
        isValid = false
        error_year.textContent = 'this field is required'
        isValid = false
        return
    }   else {
        error_year.textContent =''
    }
})

// we called the function calculatedate
function calculateDate () {
    if (isValid) {
        let birthday = `${input_day.value}/${input_month.value}/${input_year.value}`
        console.log(birthday)
        let birthdayObj = new Date(birthday)
        let ageDiffmill = Date.now() - birthdayObj
        let todayDate = Date.now()
        console.log(todayDate)
        let ageDate = new Date (ageDiffmill)
        let ageYears = ageDate.getUTCFullYear() -1970
        let ageDays = ageDate.getUTCDay() - 1
        let ageMonths = ageDate.getUTCMonth()

        // displaying everything
        output_year.textContent = ageYears
        output_month.textContent = ageMonths
        output_day.textContent = ageDays
    }   else {
        alert ('error')
    }
}