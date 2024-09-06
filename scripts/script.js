function show() {
    fetch('../utils/data.json')
        .then(response => response.json())
        .then(datas => {
            const cont_ = document.querySelector("#results");

            cont_.innerHTML = '';

            const backgroundColors = [
                "bg-lightRed",  
                "bg-orangeyYellow", 
                "bg-greenTeal",
                "bg-cobaltBlue"    
            ];

            const textColors = [
                "text-lightRed",  
                "text-orangeyYellow", 
                "text-greenTeal",
                "text-cobaltBlue"   
            ];

            datas.forEach((data, index) => {
                const card = document.createElement("div");
                card.classList.add("flex", "items-center", "justify-around", "w-80", "h-14", "rounded-xl", "bg-opacity-10");
                card.classList.add(backgroundColors[index % backgroundColors.length]);

                const icon = document.createElement("img");
                icon.src = data.icon;
                icon.alt = "Icon";
                icon.classList.add("h-5", "w-5", "mx-4"); 

                const category = document.createElement("p");
                category.textContent = data.category + ((index === 2 || index === 3) ? '\u00A0\u00A0\u00A0' : '');
                category.classList.add("font-bold", "text-lg", "text-cobaltBlue", "mr-28",);
                category.classList.add(textColors[index % textColors.length]); 

                const score = document.createElement("p");
                score.textContent = data.score;
                score.classList.add("font-bold",); 

                const total = document.createElement("p");
                total.textContent = '/ 100';
                total.classList.add("text-gray-400", "font-semibold", "mr-4", "ml-2");

                card.appendChild(icon);
                card.appendChild(category);
                card.appendChild(score);
                card.appendChild(total);

                cont_.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}

show();
