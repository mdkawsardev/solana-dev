let body = document.body;
let preloader = document.querySelector('.preloader');
body.classList.add('overflow-hidden');
const preloading = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.classList.remove('overflow-hidden');
            preloader.classList.add('d-none');
            resolve;
        }, 2000);
    })
}
preloading();