const container = document.querySelector('.container');
const text = document.querySelector('#text');
const count = document.querySelector('#count');

const totalTime = 7500;
const breatheTime = (totalTime / 5 ) * 2;
const holdTime = (totalTime / 5);

breatheAnimation()

function breatheAnimation(){
    text.innerHTML = 'Breathe in!';
    container.className = 'container grow';

    setTimeout(()=> {
        text.innerText = 'Hold'

        setTimeout(()=>{
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
            // count.innerHTML = count++;
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)


incrementCycle()

function incrementCycle(){
    count.innerText++
    return count
}

setInterval(incrementCycle, totalTime)
