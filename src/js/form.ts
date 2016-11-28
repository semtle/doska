window.onload = function(){
    var Inputs = document.getElementsByTagName('input');
    for(var i = 0; i < Inputs.length; i++){
        var element = Inputs[i];
        try{
            var type = Inputs[i].getAttributeNode('type').value;
        }catch(error){
            console.log(error);
            var type = 'none';
        }
        switch(type){
            case 'checkbox':
                if(element.classList.contains('list-control') && element.parentElement.classList.contains('list-check')){
                    var InputLabel = document.createElement('span');
                    InputLabel.className = "list-label";
                    InputLabel.innerHTML = element.getAttributeNode('label').value;
                    element.parentNode.appendChild(InputLabel);
                }
                if(element.classList.contains('form-control') && element.parentElement.classList.contains('form-check')){
                    var Checked = document.createElement('i');
                    Checked.className = 'material-icons checked';
                    Checked.innerHTML = '&#xE834;';
                    element.parentNode.appendChild(Checked);
                    var Unchecked = document.createElement('i');
                    Unchecked.className = 'material-icons unchecked';
                    Unchecked.innerHTML = '&#xE835;';
                    element.parentNode.appendChild(Unchecked);
                    var InputLabel = document.createElement('span');
                    InputLabel.className = "form-label";
                    InputLabel.innerHTML = element.getAttributeNode('label').value;
                    element.parentNode.appendChild(InputLabel);
                }
                break;
            case 'text':
                if(element.classList.contains('form-control') && element.parentElement.classList.contains('form-input')){
                    var InputLabel = document.createElement('span');
                    InputLabel.className = "form-label";
                    InputLabel.innerHTML = element.getAttributeNode('label').value;
                    element.parentNode.appendChild(InputLabel);
                    if(element.value.length == 0){
                        element.parentElement.classList.add('empty');
                    }
                    element.addEventListener('keyup', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                        // check error
                        if(this.checkValidity() || this.value.length < 1){
                            this.parentElement.classList.remove('error');
                        }else{
                            this.parentElement.classList.add('error');
                        }
                    });
                    element.addEventListener('change', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                    });
                    element.addEventListener('focus', function(){
                        this.parentElement.classList.add('focus');
                    });
                    element.addEventListener('focusout', function(){
                        this.parentElement.classList.remove('focus');
                    });
                }
                break;
            case 'email':
                if(element.classList.contains('form-control') && element.parentElement.classList.contains('form-input')){
                    var InputLabel = document.createElement('span');
                    InputLabel.className = "form-label";
                    InputLabel.innerHTML = element.getAttributeNode('label').value;
                    element.parentNode.appendChild(InputLabel);
                    if(element.value.length == 0){
                        element.parentElement.classList.add('empty');
                    }
                    element.addEventListener('keyup', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                        // check error
                        if(this.checkValidity() || this.value.length < 1){
                            this.parentElement.classList.remove('error');
                        }else{
                            this.parentElement.classList.add('error');
                        }
                    });
                    element.addEventListener('change', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                    });
                    element.addEventListener('focus', function(){
                        this.parentElement.classList.add('focus');
                    });
                    element.addEventListener('focusout', function(){
                        this.parentElement.classList.remove('focus');
                    });
                }
                break;
            case 'password':
                if(element.classList.contains('form-control') && element.parentElement.classList.contains('form-input')){
                    var InputLabel = document.createElement('span');
                    InputLabel.className = "form-label";
                    InputLabel.innerHTML = element.getAttributeNode('label').value;
                    element.parentNode.appendChild(InputLabel);
                    if(element.value.length == 0){
                        element.parentElement.classList.add('empty');
                    }
                    element.addEventListener('keyup', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                        // check error
                        if(this.checkValidity() || this.value.length < 1){
                            this.parentElement.classList.remove('error');
                        }else{
                            this.parentElement.classList.add('error');
                        }
                    });
                    element.addEventListener('change', function(){
                        if(this.value.length > 0){
                            this.parentElement.classList.remove('empty');
                        }else{
                            this.parentElement.classList.add('empty');
                        }
                    });
                    element.addEventListener('focus', function(){
                        this.parentElement.classList.add('focus');
                    });
                    element.addEventListener('focusout', function(){
                        this.parentElement.classList.remove('focus');
                    });
                }
                break;
            case 'file':
                if(element.classList.contains('file-control') && element.parentElement.classList.contains('form-file')){
                    var InputLabel = document.createElement('span');
                    var Label = document.createElement('label');
                    Label.innerHTML = element.getAttributeNode('label').value;
                    Label.className = "form-label"
                    InputLabel.className = "form-trigger";
                    InputLabel.innerHTML = 'Select File'
                    element.parentNode.appendChild(Label);
                    element.parentNode.appendChild(InputLabel);
                    element.onchange = function(){
                        this.parentElement.getElementsByClassName('form-trigger')[0].innerHTML = String(this.value.match(/[^\/\\]+$/));
                    };
                }
                break;
            default:
                console.log(type);
                break;
        }
    }
};
