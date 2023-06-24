window.onload = ()=>{
    let myform = document.getElementById('myform');
    myform.addEventListener('submit' ,function(e){
        let email = document.getElementById('email');
        if(email.value == ''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le Champ ne doit pas etre vide';
            invalid.style.color = 'red';
        }
        else {
            e.preventDefault();
            document.getElementById('popupbox').style.display = 'block';
        }
    }); 
}

