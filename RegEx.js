function validate(){
    let regex = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
     if(regex.test(user.value)){
        eturn value 
     }else{
        alert("email is invalid")
        return false
     }
}