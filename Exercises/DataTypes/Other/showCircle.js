const showCircle = (cx, cy, radius, callback = () => {}) => {

    const circle = document.querySelector('#circle');
    circle.style.width = `0px`;
    circle.style.height = `0px`;
    circle.style.top = `0px`;
    circle.style.left = `0px`;
    setTimeout(() => {
        circle.style.left = `${cx}px`;
        circle.style.top = `${cy}px`;
        circle.style.width = `${radius}px`;
        circle.style.height = `${radius}px`;
        circle.classList.add('circle')
    });
    circle.addEventListener('transitionend', function hand () {
        circle.removeEventListener('transitionend', hand);
        callback(circle);
    });
}
(function foo () {console.log(foo)})()

const fn = (circle) => {
    console.log('circle');
    const div = document.createElement('div');
    div.innerText = `hello, world`;
    circle.append(div);
}


const btn = document.querySelector('#btn');
const handler = () => showCircle(300, 400, 150, fn);
btn.addEventListener('click', handler);


