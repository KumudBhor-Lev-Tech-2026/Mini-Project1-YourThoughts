function handleAddText() {
    const headingInput = document.getElementById("heading");
    const textInput = document.getElementById("text");

    const textObj = {
        id: Date.now(),
        heading: headingInput.value,
        text: textInput.value
    };

    if (!validateText(textObj)) return;

    createText(textObj);
    renderTexts();

    headingInput.value = "";
    textInput.value = "";
}
function removeText(id) {
    deleteText(id);
    renderTexts();
}
