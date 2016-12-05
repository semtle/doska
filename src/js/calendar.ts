(function(){
    var Calendar = document.querySelectorAll('.calendar');
    for(var i = 0; i < Calendar.length; i++){
        let element = Calendar[i];
        element.addEventListener('click', function(e){
            let day = element.querySelector('.calendar-body').querySelectorAll('td');
            for(var j = 0; j < day.length; j++){
                if(e.target == day[j] && !day[j].classList.contains('booked') && !day[j].classList.contains('past')){
                    day[j].classList.toggle('active');
                    document.getElementById('order-button').style.display = 'block';
                }
            }
        });
    }
})();