let userInput= document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result=document.getElementById("difference");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let db=birthDate.getDate();
    let mb=birthDate.getMonth() +1;
    let yb=birthDate.getFullYear();

    let todayDate = new Date();
    let dt=todayDate.getDate();
    let mt=todayDate.getMonth() +1;
    let yt=todayDate.getFullYear();

    let dd,md,yd;
    yd=yt-yb;
    if(mt>=mb){
        md=mt-mb;
    }
    else{
        yd--;
        md=12+mt-mb;
    }
    if(dt>=db){
        dd=dt-db;
    }else{
        md--;
        dd=getDaysInMonth(yb,mb)+dt-db;
    }
    if(md<0){
        md=11;
        yd--;
    }
    console.log(yd,md,dd);
    result.innerHTML=`You are <span>${yd}</span> years, <span>${md}</span> months and <span>${dd}</span> days old.`;
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}