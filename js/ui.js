function renderTexts(texts = getTexts()) {
    textlist.innerHTML = "";

    if (!texts.length) {
        textlist.innerHTML = "<p>No text yet</p>";
        return;
    }

    texts.forEach(text => {
        const div = document.createElement("div");
        div.className = "text-card";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => removeText(text.id));

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => openEdit(text.id));

        div.innerHTML = `
            <h3>${text.heading}</h3>
            <p>${text.text}</p>
        `;

        const actions = document.createElement("div");
        actions.append(editBtn, deleteBtn);

        div.appendChild(actions);
        textlist.appendChild(div);
    });
}
