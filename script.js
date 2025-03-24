const hours= document.getElementById('hourId');
const mins= document.getElementById('minId');
const secs= document.getElementById('secId');

document.addEventListener("DOMContentLoaded", (event)=>{
    const updateTime= ()=>{
        const now= new Date();

        let h= now.getHours();
        let m= now.getMinutes();
        let s= now.getSeconds();

        if(h < 10) {
            h= "0"+h;
        }
        if(m < 10) {
            m= "0"+m;
        }
        if(s < 10) {
            s= "0"+s;
        }
    
        hours.innerHTML= h;
        mins.innerHTML= m;
        secs.innerHTML= s;
    }

    setInterval(updateTime, 1000);

    updateTime();
})