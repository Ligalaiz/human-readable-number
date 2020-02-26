module.exports = function toReadable(number) {
    let num = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        hund: "hundred"
    };
    let str = "" + number;
    let hundred = `${num[str[0]]} ${num["hund"]}`;

    if (str in num) return num[str];

    if (str.length == 2) {
        return `${num[str[0] + "0"]} ${num[str[1]]}`;
    }

    if (str.length == 3) {
        if (str[1] == "0" && str[2] == "0") return hundred;

        if (str[1] == "0") return `${hundred} ${num[str[2]]}`;

        if (str[1] + str[2] in num) return `${hundred} ${num[str[1] + str[2]]}`;

        return `${hundred} ${num[str[1] + "0"]} ${num[str[2]]}`;
    }
};
