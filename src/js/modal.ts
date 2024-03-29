(function(){
    var modalButton = document.querySelectorAll('[data-toggle="modal"]');
    for(var i = 0; i < modalButton.length; i++){
        var element = modalButton[i];
        element.addEventListener('click', function(){
            if(this.getAttribute('data-trigger')){
                let el = <HTMLElement> this;
                while(!el.classList.contains('modal')){
                    el = el.parentElement;
                }
                el.classList.add('fade');
                document.body.style.overflowY = 'auto';
                return;
            }
            if(this.getAttributeNode('data-target')){
                var target = this.getAttributeNode('data-target').value;
                target = document.querySelector(target);
                target.classList.toggle('fade');
                document.body.style.overflowY = 'hidden';
                return;
            }
        });
    }
    var ModalClose = document.querySelectorAll('.modal-close');
    // console.log(ModalClose.length);
    for(var i = 0; i < ModalClose.length; i++){
        var Button = ModalClose[i];
        Button.addEventListener('click', function(){
            let el = <HTMLElement> this;
            while(!el.classList.contains('modal')){
                el = el.parentElement;
            }
            el.classList.add('fade');
            document.body.style.overflowY = 'auto';
        });
    }
    // window.onclick = function(e){
    //     console.log('click');
    //     var ModalDialog = document.querySelectorAll('.modal-dialog');
    //     for(var i = 0; i < ModalDialog.length; i++){
    //         if(e.target == ModalDialog[i]){
    //             ModalDialog[i].parentElement.classList.add('fade');
    //             document.body.style.overflowY = 'auto';
    //         }    
    //     }
    // };
    window.addEventListener('click', function(e){
        var ModalDialog = document.querySelectorAll('.modal-dialog');
        for(var i = 0; i < ModalDialog.length; i++){
            if(e.target == ModalDialog[i]){
                ModalDialog[i].parentElement.classList.add('fade');
                document.body.style.overflowY = 'auto';
            }    
        }
    });
})();