let count = 1;
const container = document.querySelector('.container');

function createContent() {
    const content = document.createElement('section');
    content.textContent = count++;
    content.className = 'content';
    return content;
}

window.addEventListener('load', function() {
    const content = createContent();
    container.appendChild(content);
});

container.addEventListener('scroll', function() {
    if(container.offsetHeight + container.scrollTop + 50 >= container.scrollHeight) {
        const content = createContent();
        container.appendChild(content);
    }
})