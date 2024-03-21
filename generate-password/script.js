const passwordBox = document.getElementById('password');
function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = "";
    for (let i = 0; i < 12; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
        password += str.charAt(char)
    }
    passwordBox.value = password;
}
function copyPassword(e) {
    passwordBox.select()
    document.execCommand('copy');
    alert("Copied")
}