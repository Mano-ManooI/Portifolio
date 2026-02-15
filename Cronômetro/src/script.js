const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function config(){
    const disactiveClass = 'disactive';
    const activeClass = 'active';

    const hoursValue = parseInt(hours.textContent);
    const minutesValue = parseInt(minutes.textContent);
    const secondsValue = parseInt(seconds.textContent);

    if(hoursValue !== "00"){
        hours.classList.remove(disactiveClass);
        hours.classList.add(activeClass);
    };
    
    if(minutesValue !== "00"){
        minutes.classList.remove(disactiveClass);
        minutes.classList.add(activeClass);
    };
    if(secondsValue !== "00"){
        seconds.classList.remove(disactiveClass);
        seconds.classList.add(activeClass);
    };
};

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
    hours.textContent = h.toString().padStart(2, '0');
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
};

function resetTime(){
    window.location.reload();
};

window.addEventListener("DOMContentLoaded", () =>{
    const startButton = document.getElementById('button1');
    startButton.addEventListener('click', () =>{
        config();
        updateTime();
        const timer = setInterval(updateTime, 1000);

        const button2 = document.getElementById('button2');
        button2.addEventListener('click', () => {
            clearInterval(timer);
        });

        const resetButton = document.getElementById('button3');
        resetButton.addEventListener('click', () => {
            resetTime();
        });
    });
});