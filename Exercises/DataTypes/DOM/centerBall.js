const centerBall = () => {
    const field = document.querySelector('#field');
    const fieldWidth = field.clientWidth;
    const fieldHeight = field.clientHeight;
    const ball = document.querySelector('#ball');

    ball.addEventListener('load', () => {
        const ballWidth = ball.naturalWidth;
        const ballHeight = ball.clientHeight;
        ball.style.top = `${(fieldHeight - ballHeight) / 2}px`;
        ball.style.left = `${(fieldWidth - ballWidth) / 2}px`;
        console.log(ballWidth);
    })
}
centerBall();

// #field {
//     width: 200px;
//     border: 10px groove black;
//     background-color: #00FF00;
//     position: relative;
//   }

//   #ball {
//     position: absolute;
//   }

{/* <div id="field">
    <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . .
    </div> */}