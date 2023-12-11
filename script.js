// Получаем все элементы с классом leader
let leaders = document.querySelectorAll(".leader");

// Для каждого элемента добавляем обработчик события click
leaders.forEach(function(leader) {
    leader.addEventListener("click", function() {
        // Получаем элемент с классом leader-info внутри текущего элемента
        let info = leader.querySelector(".leader-info");
        // Переключаем видимость элемента с классом leader-info
        info.classList.toggle("show");
    });
});


