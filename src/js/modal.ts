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
                return;
            }
            if(this.getAttributeNode('data-target')){
                var target = this.getAttributeNode('data-target').value;
                target = document.querySelector(target);
                target.classList.toggle('fade');
            }
        });
    }
    var ModalClose = document.querySelectorAll('.modal-close');
    console.log(ModalClose.length);
    for(var i = 0; i < ModalClose.length; i++){
        var Button = ModalClose[i];
        Button.addEventListener('click', function(){
            let el = <HTMLElement> this;
            while(!el.classList.contains('modal')){
                el = el.parentElement;
            }
            el.classList.add('fade');
        });
    }
    window.onclick = function(e){
        var ModalDialog = document.querySelectorAll('.modal-dialog');
        for(var i = 0; i < ModalDialog.length; i++){
            if(e.target == ModalDialog[i]){
                ModalDialog[i].parentElement.classList.add('fade');
            }    
        }
    };
})();