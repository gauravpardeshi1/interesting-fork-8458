




form.addEventListener("submit",myfun);


// console.log(arr1)
function myfun(e){
e.preventDefault();

let email =document.querySelector("#email").value ;
let pass =document.querySelector("#pass").value
let email1=JSON.parse(localStorage.getItem("email"))
let pass1=JSON.parse(localStorage.getItem("pass"))

if(  email==email1 && pass==pass1){
       
    alert("sign-in succesfully")
    
}else if(email=="" && pass==""){
    alert("Please fill the details")

}
else if(  email!=email1 || pass!=pass1){
 
    alert("wrong information ")
    
}
}