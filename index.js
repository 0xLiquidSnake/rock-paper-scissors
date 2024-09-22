const buttons = document.querySelectorAll("button")

buttons.forEach(buttons => {
buttons.addEventListener('click', () => {
    console.log('You clickedme!', button.id);
});

})