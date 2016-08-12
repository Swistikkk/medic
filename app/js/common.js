$(document).ready(function(){

  $('.js-number').inputmask("8 (999) 999-99-99");

  $('.parallax').parallax({imageSrc: 'img/third_screen.png'});

  function fixedHeader() {
    var header = $('.site-header');
    var topBackground = $('.main-header');
    var headerHeight = $('.site-header').height();

    window.addEventListener('scroll', function(e){
      var y = window.scrollY;

      if(headerHeight < y) {
        header.addClass('site-header--active');
      } else {
        header.removeClass('site-header--active');
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

  function flyPopup() {
    var flyPopup = $('.cost-popup');
    var forPopup = flyPopup.offset().top - flyPopup.height();
    var items = $('.cost-items');

    window.addEventListener('scroll', function(e){
      var y = window.scrollY;
      console.info(y);
      console.log(items.offset().top)

      if(y > forPopup && y < (items.offset().top + items.height() - 500)) {
        flyPopup.css('top', (y - forPopup) + 'px');
      } else if(y > (items.offset().top + items.height() - 500)) {
        flyPopup.css('top', y < (items.offset().top + items.height() - 499) + 'px');
      } else {
        flyPopup.css('top', 0 + 'px');
      }
    });
  }

  function activePopup(){

    // открытие попапа

    $('.js-button').on('click', function(){
      $('.main-popup .title').text('Записаться на прием');
      $('.main-popup').addClass('main-popup--active');
      $('.main-popup-background').addClass('main-popup-background--active');
    });

    $('.js-call').on('click', function(){
      $('.main-popup .title').text('Перезвоните мне');
      $('.main-popup').addClass('main-popup--active');
      $('.main-popup-background').addClass('main-popup-background--active');
    });

    // закрытие попапа

    $('.main-popup-background').on('click', function(){
      $('.main-popup').removeClass('main-popup--active');
      document.querySelector('.main-form').children[1].classList.remove('error');
      document.querySelector('.main-form').children[2].classList.remove('error');
      $('.main-popup-background').removeClass('main-popup-background--active');
    });
  };

  function sliderTechnic() {
    var block = document.querySelector('.photos-items');
    var imageBlock = document.querySelector('.machine-content .image');
    console.log(imageBlock);

    block.addEventListener('click', function(e){

      if(e.target != this) {
        for(var i = 0; i < block.children.length; i++) {
          block.children[i].classList.remove('item--active');
        }
      }

      if(e.target.parentElement == this.children[0]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-1');
        this.children[0].classList.add('item--active');
      } else if (e.target.parentElement == this.children[1]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-2');
        this.children[1].classList.add('item--active');
      } else if (e.target.parentElement == this.children[2]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-3');
        this.children[2].classList.add('item--active');
      }

    });
  };

  function validationForms() {
    var mainForm = document.querySelector('.main-form');
    var costForm = document.querySelector('.cost-form');

    mainForm.addEventListener('submit', function(e) {

      this.children[1].classList.remove('error');
      this.children[2].classList.remove('error');

      if(this.children[1].value.length < 3) {
        e.preventDefault();
        this.children[1].classList.add('error');
      } else if(this.children[2].value.length < 11) {
        e.preventDefault();
        this.children[2].classList.add('error');
      }
    });

    costForm.addEventListener('submit', function(e) {

      this.children[1].classList.remove('error');
      this.children[2].classList.remove('error');

      if(this.children[1].value.length < 3) {
        e.preventDefault();
        this.children[1].classList.add('error');
      } else if(this.children[2].value.length < 11) {
        e.preventDefault();
        this.children[2].classList.add('error');
      }
    });
  }

  validationForms();
  sliderTechnic();
  activePopup();
  flyPopup();
  gallery();
  scrollingMenu();
  fixedHeader();
});
