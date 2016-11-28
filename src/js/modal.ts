(function(){
    var modalButton = document.querySelectorAll('[data-toggle="modal"]');
    console.log(modalButton.length);
    for(var i = 0; i < modalButton.length; i++){
        var element = modalButton[i];
        element.addEventListener('click', function(){
            if(this.getAttributeNode('data-target')){
                var target = this.getAttributeNode('data-target').value;
                target = document.querySelector(target);
                target.classList.toggle('fade');
            }
        });
    }
    window.onclick = function(e){
        if(e.target == document.querySelector('.modal-dialog')){
            document.querySelector('.modal-dialog').parentElement.classList.add('fade');
        }
    };
})();