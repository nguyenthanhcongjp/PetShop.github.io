// Contact Start
$(() => {
    $('#form__contact').submit(e => {
        // e.preventDefault();
        var name__contact = $('#name__contact').val().trim();
        var email__contact = $('#email__contact').val().trim();
        var fontnumber__contact = $('#fontnumber__contact').val().trim();

        if (name__contact === '') {
            showError('名前を記入してください')
            e.preventDefault();
        } else if (name__contact.length  < 7) {
            showError('名前は6文字以上である必要があります。正確に名前を記入してください')
            e.preventDefault();
        } else if (email__contact.length === 0) {
            showError('メールアドレスを記入してください')
            e.preventDefault();
        } else if (email__contact.length < 6) {
            showError('メールアドレスは6文字以上である必要があります')
            e.preventDefault();
        } else if (!email__contact.includes('@')) {
            showError('メールアドレスが無効です')
            e.preventDefault();
        } else if (fontnumber__contact === '') {
            showError('電話番号を記入してください')
            e.preventDefault();
        } else if (fontnumber__contact.length > 14) {
            showError('電話番号は14文字以下である必要があります')
            e.preventDefault();
        }
    })
})

function showError(message) {
    $('.errorMessage').html(message)
    $('.errorMessage').show()

}
$("#resetForm").click(function() {
    document.getElementById("name__contact").reset();
    document.getElementById("email__contact").reset();
    document.getElementById("fontnumber__contact").reset();
});
// Contact End

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Team__Slide--Container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
