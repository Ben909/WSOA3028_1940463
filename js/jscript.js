const menuData = [
    {title: 'Home', link: '/'},
    {title: 'Blog', link: './blog/index.html'},
    {title: 'About', link: '/about'},
    {title: 'WAT', link: '/wat'}
];


const startMenu = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement("ul");

    for (let item of menuData){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    };

    nav.appendChild(ul);
}

document.addEventListener('DOMContentLoaded' , () => startMenu());