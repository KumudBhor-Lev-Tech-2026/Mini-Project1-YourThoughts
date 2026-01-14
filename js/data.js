
function createText(text) {
    const texts = getTexts();
    texts.push(text);
    saveTexts(texts);
}

function updateText(updatedText) {
    const texts = getTexts().map(t =>
        t.id === updatedText.id ? updatedText : t
    );
    saveTexts(texts);
}

function deleteText(id) {
    const updated = getTexts().filter(t => t.id !== id);
    saveTexts(updated);
}
