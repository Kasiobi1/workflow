const Submit = document.getElementById("submit")
const errName  =document.querySelector("#demo")
const errPass  =document.querySelector("#code")

 Submit.addEventListener("click", (e)=> {
  e.preventDefault()
     const userName = document.getElementById("username").value
      const passWord = document.getElementById("password").value
    
    if(userName.length > 3 && userName.indexOf(" ") === -1){
    if(passWord.length > 5 && passWord.indexOf( " ") ===-1){ 
        alert("Valid credentials")
        window.location.href = "banner.html";
    }
    else{
       errPass.textContent = "Password too short or include gap"
       errPass.classList.add("checker")
    }
   }
   else{
   errName.textContent = "Username too short or include gap"
   errName.classList.add("checker")
 }
 })
