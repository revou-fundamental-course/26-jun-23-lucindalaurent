var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);

}
function showDivs(n) {
    var i;
    //sebuah array berisi elemen image
    var imgList = document.getElementsByClassName("autoSlider");
    console.log(imgList.length);
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        if (imgList[i] != imgList[slideIndex - 1])
            imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}
setInterval(() => {
    plusDivs(1);
}, 3000);

const submitButton = document.getElementById("button");

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var messages = document.getElementById("message").value;


    if (name == "" || email == "" || number == "" || messages == "") {
        alert("Ups, ada field yang belum diisi. Yuk cek kembali sebelum dikirim :)");
        return false;
    }
    alert("Data Anda sudah terkirim, sales kami akan segera menghubungi Anda. Terima kasih :D");
    //form dikosongkan kembali
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    return false;
}