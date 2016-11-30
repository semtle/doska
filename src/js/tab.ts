(function(){
    var Tabs = document.querySelectorAll('.panel.panel-tab');
    for(var i = 0; i < Tabs.length; i++){
        let el = Tabs[i];
        let togglers = el.querySelector('.panel-header').querySelectorAll('.tab');
        el.querySelector('.panel-content').getElementsByClassName('tab-container')[0].classList.add('active');
        togglers[0].classList.add('active');
        el.addEventListener('click', function(e){
            for(var k = 0; k < togglers.length; k++){
                if(e.target == togglers[k]){
                    el.querySelector('.panel-header').querySelector('.tab.active').classList.remove('active');
                    togglers[k].classList.add('active');
                    el.querySelector('.panel-content').querySelector('.tab-container.active').classList.remove('active');
                    el.querySelector('.panel-content').querySelectorAll('.tab-container')[k].classList.add('active');
                }
            }
        });
    }
})();