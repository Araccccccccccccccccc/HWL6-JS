function validate(e){
    e.preventDefault();
    const m= document.getElementById("email").value;
    const p = document.getElementById("password").value;
    const a = document.getElementById("age").value;
    const mbox = document.getElementById("msg").value;
    let msg='';
    if (m===''){
        msg='Enter mail';
    }
    else if(p==''){
        msg='Enter password';
    }
    else if(a==''){
        msg='Enter age';
    }
    else{
        msq ='Form submitted successfully';
    }
    mbox.innerHTML=msg;
}

