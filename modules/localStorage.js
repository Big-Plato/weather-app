

export function saveToLocalStorage(curr, nextDays) {
    localStorage.setItem("City", JSON.stringify(curr));
    localStorage.setItem("Next", JSON.stringify(nextDays));
}

export function retrieveLocalStorage() {
    const getDay = JSON.parse(localStorage.getItem("City"));
    const getNextDays = JSON.parse(localStorage.getItem("Next"));

    return [ getDay, getNextDays ];
}