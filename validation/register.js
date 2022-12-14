const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required...!";
    }
    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required...!";
    } 
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required...!";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password is required...!";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords don't match...!";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
