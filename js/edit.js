let activeId = null;

const edit = document.getElementById("edit");
const editHeading = document.getElementById("editHeading");
const editText = document.getElementById("editDescription");

function openEdit(id) {
    const textObj = getTexts().find(t => t.id === id);
    activeId = id;

    editHeading.value = textObj.heading;
    editText.value = textObj.text;

    edit.style.display = "block";
}

function saveEdit() {
    updateText({
        id: activeId,
        heading: editHeading.value,
        text: editText.value
    });

    closeEdit();
    renderTexts();
}
function closeEdit() {
    edit.style.display = "none";
    activeId = null;
}
