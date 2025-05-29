let btn = document.querySelector('button');
let tbox= document.querySelector('textarea');
let h1 = document.querySelector('h1');

btn.onclick = () => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    tbox.style.backgroundColor = (`rgb(${red}, ${green}, ${blue})`);
    h1.innerText = (`rgb(${red}, ${green}, ${blue})`);   
}