let btns = document.querySelectorAll('.btn');
let products = document.querySelectorAll('.products');
let rot = document.querySelectorAll('.rot');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => {
            btn.classList.remove('active')
        })
        let btnId = btn.getAttribute('id');
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'none'
            rot[i].classList.remove('product-animation')
            btn.classList.add('active');
            if (btnId === 'all') {
                setTimeout(() => {
                    products[i].style.display = 'flex'
                    rot[i].classList.add('product-animation')
                }, 50)
            } else if (btnId === products[i].getAttribute('filteration')) {
                btn.classList.add('active')
                setTimeout(() => {
                    products[i].style.display = 'flex'
                    rot[i].classList.add('product-animation')
                }, 50)
            }
        }
    })
})