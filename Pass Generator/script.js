function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const numberss = "123456789";
    const symbols = "!@#$%^&*()=+_";

    let allowedChars = "";
    let password = "";

    if (includeUppercase) allowedChars += uppers;
    if (includeLowercase) allowedChars += lowers;
    if (includeNumbers) allowedChars += numberss;
    if (includeSymbols) allowedChars += symbols;

    if (length <= 0) {
        window.alert("Password length must be at least 1");
    }

    if (allowedChars.length === 0) {
        window.alert("Select at least one character type");
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function handleGenerate() {
    const length = parseInt(document.getElementById("length").value);
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, upper, lower, numbers, symbols);
    document.getElementById("result").value = password;
}
