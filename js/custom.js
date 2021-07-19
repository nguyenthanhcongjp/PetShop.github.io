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

// Custom Slide TEAM Start
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
// Custom Slide TEAM End

// Custom Slide Product Start
const Dogs = [
    {
        linkImg: 'https://matpetfamily.com/wp-content/uploads/2021/07/200608429_1998800203601387_6953752218993812307_n-270x270.jpg',
        idProduct: 'SP00103',
        nameDog: 'GOLDEN',
        Price: '600000￥'
    },
    {
        linkImg: 'https://matpetfamily.com/wp-content/uploads/2020/08/118386672_1750039115144165_4180396166377054737_o-270x270.jpg',
        idProduct: 'SP00054',
        nameDog: 'CORGI',
        Price: '25000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80',
        idProduct: 'SP00055',
        nameDog: 'GOLDEN',
        Price: '800000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
        idProduct: 'SP00060',
        nameDog: 'PUG',
        Price: '120000￥'
    },
    {
        linkImg: 'https://matpetfamily.com/wp-content/uploads/2019/12/36993247_1082359718578778_3104054267334361088_n_960x780-270x270.jpg',
        idProduct: 'SP12020',
        nameDog: 'POODLE',
        Price: '15000￥'
    },
    {
        linkImg: 'https://matpetfamily.com/wp-content/uploads/2020/02/26.2b-270x270.jpg',
        idProduct: 'SP00011',
        nameDog: 'SAMOYED',
        Price: '120000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80',
        idProduct: 'SP00018',
        nameDog: 'DACHSHUND',
        Price: '400000￥'
    },
    {
        linkImg: 'https://c4.wallpaperflare.com/wallpaper/487/261/97/dogs-husky-animal-baby-animal-wallpaper-preview.jpg',
        idProduct: 'SP000214',
        nameDog: 'HUSKY',
        Price: '540000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80',
        idProduct: 'SP000219',
        nameDog: 'PUG',
        Price: '670000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        idProduct: 'SP000215',
        nameDog: 'TIBETAN MASTIFF',
        Price: '1000000￥'
    },
    {
        linkImg: 'https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80',
        idProduct: 'SP006145',
        nameDog: 'SAMOYED AND OWNER',
        Price: '7000000￥'
    },
    {
        linkImg: 'https://thucanh.net/wp-content/uploads/2021/04/anh-cho-becgie-duc142.jpg',
        idProduct: 'SP006256',
        nameDog: 'BECGIE',
        Price: '860000￥'
    },
]
Dogs.forEach( value => {
    $('#ElementDog').append('<div id="Dog__Slide" class="col-3"><div class="Dog__Slide--Item"><img style="object-fit: cover;" width="270px" height="270px" src="'+value.linkImg+'"><p class="Dog__Slide--ItemText">ID:'+value.idProduct+'</p><p>'+value.nameDog+'</p><p class="Dog__Slide--ItemText">'+value.Price+'</p></div></div>')
})
// Custom Slide Product End

