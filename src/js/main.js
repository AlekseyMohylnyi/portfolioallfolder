const btnDark = document.querySelector(".dark__btn");

// Проверка на наличие тёмной темы на уровне системных настроек

if (window.matchMedia && window.matchMedia("(preferse-color-scheme: dark)").matches) {
    btnDark.classList.add('dark__btn--active');
    document.body.classList.add('dark');
}

// Проверка на наличие тёмной темы LocalStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDark.classList.add('dark__btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDark.classList.remove('dark__btn--active');
    document.body.classList.remove('dark');
}

// Смена цветовой схемы при смене системных настроек

window.matchMedia("(preferse-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDark.classList.add('dark__btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDark.classList.remove('dark__btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light')
    }
})

// Смена цветовой схемы по кнопке
btnDark.onclick = () => {
    btnDark.classList.toggle("dark__btn--active");
    const isDark = document.querySelector("body").classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }


}