function show() {
    fetch('../utils/data.json')
        .then(response => response.json())
        .then(datas => {
            const cont_ = document.querySelector("#results");

            datas.forEach(data => {
                const card = document.createElement("div");
                card.classList.add("bg-white", "p-4", "rounded-lg", "shadow-lg", "m-4", "flex", "items-center", "space-y-2");

                const category = document.createElement("p");
                category.textContent = data.category; 
                category.classList.add("text-lg", "font-semibold", "text-gray-800");

                const score = document.createElement("p");
                score.textContent = data.score; 
                score.classList.add("text-sm", "text-gray-600");

                const icon = document.createElement("img");
                icon.src = data.icon;
                icon.alt = "Icon";
                icon.classList.add("w-12", "h-12", "object-cover");

                card.appendChild(category);
                card.appendChild(score);
                card.appendChild(icon);

                cont_.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}

show();
