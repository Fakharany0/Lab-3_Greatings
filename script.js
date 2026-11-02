
const heading = document.getElementById('head-text');
const nameInput = document.getElementById('name');
const greetBtn = document.getElementById('great');
const nameList = document.getElementById('list');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;
    heading.textContent = `Hello, ${name}!`;


    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
    nameInput.value = '';
});


nameList.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'LI') {
        const clickedName = e.target.textContent;
        heading.textContent = `Goodbye, ${clickedName}!`;
        e.target.remove();
    }
});
