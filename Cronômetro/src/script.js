const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateTime(){
    let h = parseInt(hours.textContent);
    let m = parseInt(minutes.textContent);
    let s = parseInt(seconds.textContent);

    if(s < 59){
        s++;
    }else{
        s = 0;
        if(m < 59){
            m++;
        }else{
            m = 0;
            h++;
        };
    };
    hours.textContent = h.toString().padStart(2, '0') + " :";
    minutes.textContent = m.toString().padStart(2, '0') + " :";
    seconds.textContent = s.toString().padStart(2, '0');
};

window.addEventListener("DOMContentLoaded", () =>{
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    let timer;

    button1.addEventListener('click', () =>{
        button1.style.display = 'none';
        button2.style.display = 'inline-block';
        button4.style.display = 'inline-block';

        timer = setInterval(updateTime, 1000);
    });

    button2.addEventListener("click", () =>{
        button2.style.display = 'none';
        button3.style.display = 'inline-block';

        clearInterval(timer);
    });

    button3.addEventListener("click", () =>{
        button3.style.display = 'none';
        button2.style.display = 'inline-block';

        timer = setInterval(updateTime, 1000);
    });

    button4.addEventListener('click', () => {
        window.location.reload();
    });
});