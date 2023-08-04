
let name1 = document.querySelector("#name")
let age = document.querySelector("#age")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let btn =document.querySelector("button")
let select =document.querySelector("select")
let addres = document.querySelector("textarea")
console.log(addres)

btn.onclick =()=>{
    if(name1.value==""){
    alert("fill the name")
        // return false;
    }
    if(age.value.length=="")
    {
        alert("fill the age");
            return false;
        }

        if(email.value.length=="")
        {
            alert("fill the email");
                return false;
            }

            if(phone.value.length=="")
        {
            alert("fill the phone number");
                return false;
            }

            var gender=document.getElementsByName("gender")
            var gflag=0;
            for(let i=0; i<gender.length; i++){
                if(gender[i].checked ==true){
                    gflag=1;
                    break;
                }
            }
            if(!gflag){
                alert("gender filed empty");
                return false;
            }

            if(select.value.length=="")
            {
                alert("fill the hometown");
                    return false;
                }

                if(addres.value.length=="")
                {
                    alert("fill the addres");
                        return false;
                    }
            
}

