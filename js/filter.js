function searchTexts(query) {
    const texts = getTexts();

    if (!query.trim()) {
        renderTexts(texts);
        return;
    }

    const filtered = texts.filter(t =>
        t.heading &&
        t.heading.toLowerCase().includes(query.toLowerCase())
    );

    renderTexts(filtered);
}
