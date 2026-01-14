const STORAGE_KEY = "Your_Thoughts";

function getTexts(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveTexts(texts){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(texts));
}