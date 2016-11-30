(function(){
    var Toggles = document.querySelectorAll('[data-toggle="lightbox"]');
    for(var i = 0; i < Toggles.length; i++){
        Toggles[i].addEventListener('click', function(){
            console.log('lightbox click');
            if(this.getAttributeNode('data-target') && this.getAttribute('data-target') != null){
                console.log(this.getAttribute('data-target'));
                document.querySelector(this.getAttribute('data-target')).classList.toggle('fade');
                document.body.style.overflowY = 'hidden';
            }
        });
    }
    var Lightboxes = document.getElementsByClassName('lightbox');
    for(var i = 0; i < Lightboxes.length; i++){
        // init
        var Box = Lightboxes[i];
        Box.querySelector('.lightbox-viewport').querySelector('.image').classList.add('active');
        var List = Box.getElementsByClassName('lightbox-list')[0].querySelectorAll('li');
        for(var j = 0; j < List.length; j++){
            var Attr = document.createAttribute('capture');
            Attr.value = String(j);
            List[j].setAttributeNode(Attr);
            List[j].addEventListener('click', function(){
                Box.querySelector('.lightbox-viewport').getElementsByClassName('active')[0].classList.remove('active');
                Box.querySelector('.lightbox-viewport').getElementsByClassName('image')[Number(this.getAttribute('capture'))].classList.add('active');
            });
        }
        var ListBox = Box.getElementsByClassName('lightbox-list')[0];
        let translate = 0;
        ListBox.addEventListener('wheel', function(e){
            // var wDelta = e.deltaY > 0 ? 'down' : 'up';
            var delta = e.deltaY || e.detail || e.wheelDelta;
            // console.log(ListBox.querySelector('ul').scrollWidth);
            // console.log(ListBox.clientWidth);
            var Max = ListBox.querySelector('ul').scrollWidth - ListBox.clientWidth;

            // delta = delta < 0 ? 0 : delta;
            translate = translate + delta;
            translate = translate < 0 ? 0 : translate;
            translate = translate > Max ? Max : translate;
            Box.getElementsByClassName('lightbox-list')[0].querySelector('ul').style.transform = 'translateX(-'+translate+'px)';
        });
        // close button
        Box.querySelector('.lightbox-close').addEventListener('click', function(){
            Box.classList.add('fade');
            document.body.style.overflowY = 'auto';
        });
        // Left & Right Buttons
        Box.querySelector('.lightbox-right').addEventListener('click',function(){
            var Current = Box.querySelector('.image.active');
            if(Current.nextElementSibling == null){
                var Next = Box.getElementsByClassName('image')[0];
            }else{
                var Next = Current.nextElementSibling;
            }
            Current.classList.remove('active');
            Next.classList.add('active');
        });
        Box.querySelector('.lightbox-left').addEventListener('click',function(){
            var Current = Box.querySelector('.image.active');
            if(Current.previousElementSibling == null){
                var Prev = Current.parentElement.lastElementChild;
                while(!Prev.classList.contains('image')){
                    Prev = Prev.previousElementSibling;
                }
            }else{
                var Prev = Current.previousElementSibling;
            }
            Current.classList.remove('active');
            Prev.classList.add('active');
        });
    }
    // window.onclick = function(e){
    //     var LightBox = document.querySelectorAll('.lightbox');
    //     for(var i = 0; i < LightBox.length; i++){
    //         if(e.target == LightBox[i]){
    //             LightBox[i].classList.add('fade');
    //             document.body.style.overflowY = 'auto';
    //         }    
    //     }
    // };
    window.addEventListener('click', function(e){
        var LightBox = document.querySelectorAll('.lightbox');
        for(var i = 0; i < LightBox.length; i++){
            if(e.target == LightBox[i]){
                LightBox[i].classList.add('fade');
                document.body.style.overflowY = 'auto';
            }    
        }
    });
})();