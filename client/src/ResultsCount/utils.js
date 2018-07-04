// @flow
class utils {
    static formatCount(number) {
        return `${number} movie${number !== 1 ? 's' : ''}`;
    }
}

export default utils;
