   const navbarItems = document.querySelectorAll('.navbar-items li');
    navbarItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const activeItem = event.target.closest('li');
            alert(activeItem.dataset.page);
            toggleItemActiveNavbar(activeItem);
        });
    });

    function toggleItemActiveNavbar(activeItem) {
        navbarItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }