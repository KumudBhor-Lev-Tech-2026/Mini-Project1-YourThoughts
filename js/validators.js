function validateText(textObj) {
    if (!textObj.heading || textObj.heading.trim() === "") {
        alert("Please enter a heading");
        return false;
    }

    if (!textObj.text || textObj.text.trim() === "") {
        alert("Please write some text");
        return false;
    }

    return true;
}