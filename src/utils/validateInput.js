
const validateInput = (input, regex) => {
    if(input === '' || regex.test(input)){
        return true
    } else {
        return false
    }
}

export default validateInput