// Write code related to Home page here 
let form = document.querySelector("form")
console.log(form)

form.addEventListener("submit",myfun);
let arr1=JSON.parse(localStorage.getItem("sign_up1"))||[];
let arr2=JSON.parse(localStorage.getItem("sign_up2")) ||[];

// console.log(arr1)
function myfun(e){
e.preventDefault();

let email =document.querySelector("#email").value ;
let pass =document.querySelector("#pass").value
if(email=="" && pass==""){
    alert("Please fill the details")
}else{
    arr1.push(pass)
    arr2.push(email)
    localStorage.setItem("pass",JSON.stringify(arr1))
    localStorage.setItem("email",JSON.stringify(arr2))
    alert("sign-up succesfully")
   
}

}
