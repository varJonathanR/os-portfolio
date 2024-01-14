const today = new Date();

export function getCurrentTime() {
    const hours = today.getHours();
    const minutes = today.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

export function getCurrentDate() {
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
}