$(document).ready(function(){

  function fixedHeader() {
    var header = $('.site-header');
    var topBackground = $('.main-header');
    var headerHeight = $('.site-header').height();

    window.addEventListener('scroll', function(e){
      var y = window.scrollY;

      if(headerHeight < y) {
        header.addClass('site-header--active');
        topBackground.addClass('main-header--active');
      } else {
        header.removeClass('site-header--active');
        topBackground.removeClass('main-header--active');
      }
    });
  }

  function scrollingMenu() {
    $(".main-header-menu").on("click","a", function (event) {
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top - 100}, 1500);
    });

  }

  function gallery() {
    var med = $('#about-med');
    var items = $('.about-med-items');
    var idMed = document.getElementById('about-med');

    items.on('click', function(e){
      for(var i = 0; i < this.children.length; i++) {
        this.children[i].classList.remove('item--active');
        if(e.target == this.children[i]) {
          this.children[i].classList.add('item--active');
          var className = "about-med-image_" + i;

          if(idMed.classList.length > 1) {
            idMed.classList.remove(idMed.classList[idMed.classList.length - 1]);
          }

          idMed.classList.add(className);
        }
      }
    });

  }


  gallery();
  scrollingMenu();
  fixedHeader();
});
