function submitForm(){
    let nama = document.getElementById(`input-name`).value;
    let email = document.getElementById(`input-email`).value;
    let phone = document.getElementById(`input-phone-number`).value;
    let subject = document.getElementById(`select-option`).value;
    let message = document.getElementById(`input-msg`).value;


    if (nama == ``) {
        alert("Nama nya di isi dong guys");
    } else if (email == ``) {
        alert("Email nya dong diisi");
    } else if (phone == ``) {
        alert("Nomoe HP nya jangan lupa");
    } else if (subject == ``) {
        alert("Subject nya juga diisi ya");
    } else if (message == ``) {
        alert("Jangan lupa tinggalkan pesan");
    }

    console.log(nama);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let receiveMail = '25salsa05@gmail.com';

    let a = document.createElement('a');

    a.href = 'mailto:' + '?subject=' + subject + '&body=Hallo nama saya ' + nama + ', ' + message;

    a.click();
}