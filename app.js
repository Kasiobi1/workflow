const Submit = document.getElementById("submit")

const errName  =document.querySelector("#demo")
const incorrectErr = document.querySelector("#incorrect")
const errPass  =document.querySelector("#code")

 Submit.addEventListener("click", (e)=> {
  e.preventDefault()
  const confirms = document.getElementById("confirm").value
     const userName = document.getElementById("username").value
      const passWord = document.getElementById("password").value
    
    if(userName.includes("@gmail.com") && userName.indexOf(" ") === -1){
    if(passWord.length > 5 && passWord.indexOf( " ") ===-1){
      if(confirms === passWord){
         alert("Valid credentials")
        window.location.href = "banner.html";

      }
      else{
          incorrectErr.textContent = "incorrect password"
          incorrectErr.classList.add("checker")
       //  console.log("incorrect");
      }
      
    }
    else{
       errPass.textContent = "Password too short or include gap"
       errPass.classList.add("checker")
    }
   }
   else{
   errName.textContent = "Username must end with @gmail.com or include gap"
   errName.classList.add("checker")
 }
 })
