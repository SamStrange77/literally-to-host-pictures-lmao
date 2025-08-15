let limit = 6000000

let timer = setInterval
(
    () => 
    {   
        let seconds = Math.floor(new Date("08-24-2025")/1000 - new Date()/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        console.log(seconds);
        document.body.style.setProperty('background-color', `rgb(${Math.ceil((Math.abs(limit-seconds)/limit) * 200)}, ${Math.floor((seconds/limit) * 200)}, 18)`)
        console.log(`rgb(${Math.ceil((Math.abs(limit-seconds)/limit) * 200)}, ${Math.floor((seconds/limit) * 200)}, 0)`);
        document.getElementById('seconds').innerHTML =
        `
            <div class = "value">
                ${Math.ceil(seconds/10)}
            </div>
            <div>
                More Ten-Seconds!
            </div>
        `;
        document.getElementById('minutes').innerHTML =
        `
            <div class = "value">
                ${minutes+':'+(seconds%60)}
            </div>
            <div>
                More Minutes!
            </div>
        `;
        document.getElementById('hours').innerHTML =
        `
            <div class = "value">
                ${hours+':'+(minutes%60)+':'+(seconds%60)}
            </div>
            <div>
                More Hours!
            </div>
        `;
        document.getElementById('days').innerHTML =
        `
            <div class = "value">
                ${days+':'+(hours%24)+':'+(minutes%60)+':'+(seconds%60)}
            </div>
            <div>
                More Days!
            </div>
        `;
        
    }, 
    1000
);

let timer_two = setInterval
(
    () => 
    {   
        let seconds = Math.floor(new Date("09-18-2025")/1000 - new Date()/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        document.getElementById('bad_seconds').innerHTML =
        `
            <div class = "value">
                ${seconds}
            </div>
            <div>
                More Seconds!
            </div>
        `;
        document.getElementById('bad_minutes').innerHTML =
        `
            <div class = "value">
                ${minutes+':'+(seconds%60)}
            </div>
            <div>
                More Minutes!
            </div>
        `;
        document.getElementById('bad_hours').innerHTML =
        `
            <div class = "value">
                ${hours+':'+(minutes%60)+':'+(seconds%60)}
            </div>
            <div>
                More Hours!
            </div>
        `;
        document.getElementById('bad_days').innerHTML =
        `
            <div class = "value">
                ${days+':'+(hours%24)+':'+(minutes%60)+':'+(seconds%60)}
            </div>
            <div>
                More Days!
            </div>
        `;
        
    }, 
    1000
);