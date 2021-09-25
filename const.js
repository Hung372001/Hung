export const ONE_DAY = 24 * 60 * 60 * 1000;

export function ValidString(str) {
    if (typeof(str) == "string") {
        if (str.trim().length == 0) {
            alert("khong duoc de chuoi rong")
        } else {
            return str;
        }
    }
    throw new Error(`${str} not string`);
}

export const options = {
    checkStringExist : "Kiem tra chuoi con co ton tai",
    shortenString : "Cat chuoi them dau 3 cham",
    capitalizeString : "In hoa chu cai dau",
    repeatString : "Sao chep chuoi n lan"
}

