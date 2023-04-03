
const fname= document.querySelector("#fname")
const lname=document.querySelector("#lname");
const email=document.querySelector("#email");
const btn7= document.querySelector("#btn7");
const btn8= document.querySelector("#btn8");

btn7.addEventListener("click", () =>{
setCookie("firstname", fname.value, 365);
setCookie("lastname", lname.value, 365);
setCookie("email", email.value, 365);
}
)
btn8.addEventListener("click", () =>{
fname.value= getCookie("firstname");
lname.value= getCookie("lastname");
email.value=getCookie("email");
}

)
function setCookie(name, value, daysToLive){
    const date=new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires="expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + "path=/" ;
}

function getCookie(name){
    const cDecoded= decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";");
    let result= null;

    cArray.forEach(element => {
        if(element.indexOf(name)==0){
result= element.substring(name.length+1)
        }
    })
    return result;
}

