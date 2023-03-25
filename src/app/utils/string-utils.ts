export default class StringUtils {
    static removeEmptyStrings(arr: string[]) {
        return arr.filter((str) => str !== '');
    }

    static removeBlankSpaces(arr: string[]) {
        return arr.map((str) => str.trim());
    }

    static removeLeftNumbers(arr: string[]) {
        arr = StringUtils.removeBlankSpaces(arr);
        return arr.map((str) => str.replace(/^\d+\s/, ''));
    }

    static removeSpecialCharacters(str: string[]) {
        const specialCharacters = [
            '.',
            ',',
            '!',
            '?',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            ':',
            ';',
            '"',
            "'",
            '-',
            '_',
            '=',
            '+',
        ];
        return str.map((str) => {
            specialCharacters.forEach((char) => {
                str = str.replace(char, '');
            });
            return str;
        });
    }

    static removeDuplicates(arr: string[]) {
        return arr.filter(
            (value, index, self) => self.indexOf(value) === index
        );
    }
}