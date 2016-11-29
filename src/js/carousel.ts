(function(){
    var Carousel = document.querySelector('#myCarousel');
    var Root = Carousel.getElementsByClassName('carousel-content')[0];
    Root.getElementsByClassName('item')[0].classList.add('active');
    Carousel.getElementsByClassName('carousel right')[0].addEventListener('click', function(){
        var Current = Root.getElementsByClassName('item active')[0];
        if(Current.nextElementSibling == null){
            var Next = Root.getElementsByClassName('item')[0];
        }else{
            var Next = Current.nextElementSibling;
        }
        Next.classList.add('next');
        Next.classList.add('left');
        Current.classList.add('left');
        setTimeout(function(){
            Current.classList.remove('left');
            Current.classList.remove('active');
            Next.classList.remove('left');
            Next.classList.add('active');
            Next.classList.remove('next');
        },510);
    });
    Carousel.getElementsByClassName('carousel left')[0].addEventListener('click', function(){
        var Current = Root.getElementsByClassName('item active')[0];
        if(Current.previousElementSibling == null){
            var Prev = Root.lastElementChild;
        }else{
            var Prev = Current.previousElementSibling;
        }
        Prev.classList.add('prev');
        Prev.classList.add('right');
        Current.classList.add('right');
        setTimeout(function(){
            Current.classList.remove('right');
            Current.classList.remove('active');
            Prev.classList.remove('right');
            Prev.classList.add('active');
            Prev.classList.remove('prev');
        },510);
    });
})();