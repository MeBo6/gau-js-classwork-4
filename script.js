        const unorderedList = document.getElementById("unorderedList")
        const paragraph = document.getElementById("paragraph")
        const header = document.getElementById("header")
        const headerButton = document.getElementById("headerTextBtn")
        const colorButton = document.getElementById("paragraphColorBtn")
        const listItemButton = document.getElementById("newListItemBtn")
        
        headerButton.addEventListener("click", function(){
            header.textContent = "JavaScript-ით შეცვლილი სათაური!"
        })

        colorButton.addEventListener("click", function(){
            paragraph.style.color = "red"
        })

        listItemButton.addEventListener("click", function(){
            const newItem = document.createElement("li")
            newItem.textContent = "New Item"
            unorderedList.appendChild(newItem)
        })