import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const hi = (name) => {
    console.log('Creating h1 target');
    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${name}!!!`;
    document.body.append(h1);
    //Img
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}