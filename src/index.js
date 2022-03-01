import "./style.css";

const formValidation = (() => {
    const checkName = () => {
        let name = document.querySelector("#name-input");
        name.setCustomValidity("");
        if (name.value == "") {
            name.setCustomValidity("Please enter your name");
            name.reportValidity();
        }
    };
    const checkEmail = () => {
        let email = document.querySelector("#email-input");
        email.setCustomValidity("");
        let emRegex =
            /^[\w!#$%&’*+/=?`{|}~^-]+(?:\.[\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        if (!emRegex.test(email.value)) {
            email.setCustomValidity("Please enter a valid email address");
            email.reportValidity();
        }
    };
    const checkCountry = () => {
        let country = document.querySelector("#country-input");
        country.setCustomValidity("");
        if (country.value == "") {
            country.setCustomValidity("Please enter your country");
            country.reportValidity();
        }
    };
    const checkZip = () => {
        let zip = document.querySelector("#zip-input");
        zip.setCustomValidity("");
        let zipRegex = /^[0-9]{5}(-?[0-9]{4})?$/;
        if (!zipRegex.test(zip.value)) {
            zip.setCustomValidity("Please enter a valid zip code (5 digits or 5-4 digits)");
            zip.reportValidity();
        }
    };
    const checkPass = () => {
        let pass = document.querySelector("#password-input");
        pass.setCustomValidity("");
        let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!passRegex.test(pass.value)) {
            pass.setCustomValidity("Please enter a valid password");
            pass.reportValidity();
        }
    };
    const checkPassConf = () => {
        let passConf = document.querySelector("#password-conf-input");
        let pass = document.querySelector("#password-input");
        passConf.setCustomValidity("");
        if (passConf.value != pass.value) {
            passConf.setCustomValidity("Please re-enter your password");
            passConf.reportValidity();
        }
    };

    return { checkName, checkEmail, checkCountry, checkZip, checkPass, checkPassConf };
})();

// eslint-disable-next-line no-unused-vars
const initListeners = (() => {
    document.querySelector("#name-input").addEventListener("change", formValidation.checkName);
    document.querySelector("#email-input").addEventListener("change", formValidation.checkEmail);
    document.querySelector("#country-input").addEventListener("change", formValidation.checkCountry);
    document.querySelector("#zip-input").addEventListener("change", formValidation.checkZip);
    document.querySelector("#password-input").addEventListener("change", formValidation.checkPass);
    document.querySelector("#password-conf-input").addEventListener("change", formValidation.checkPassConf);

    // document.querySelector("#name-input").addEventListener("input", formValidation.checkName);
    // document.querySelector("#email-input").addEventListener("input", formValidation.checkEmail);
    // document.querySelector("#country-input").addEventListener("input", formValidation.checkCountry);
    // document.querySelector("#zip-input").addEventListener("input", formValidation.checkZip);
    // document.querySelector("#password-input").addEventListener("input", formValidation.checkPass);
    // document.querySelector("#password-conf-input").addEventListener("input", formValidation.checkPassConf);
})();
