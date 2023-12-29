const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret  = dropdown.querySelector('.caret');
    const options = dropdown.querySelectorAll('.drop_menu li');
    const menu = dropdown.querySelector('.drop_menu');
    const btn = document.getElementById('btnSubmit');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        btn.style.display = menu.classList.contains('menu-open') ? 'none' : 'block';
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');    
            btn.style.display = 'block';
        });
    });
});

