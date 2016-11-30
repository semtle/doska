function menuToggle(element: string){
    document.querySelector(element).classList.toggle('active');
}
(function(){
    var Collapse = document.querySelectorAll('.collapse');
    for(var i = 0; i < Collapse.length; i++){
        var element = Collapse[i];
        element.querySelector('.collapse-header').addEventListener('click', function(){
            element.querySelector('.collapse-content').classList.toggle('in');
        });
    }
})();