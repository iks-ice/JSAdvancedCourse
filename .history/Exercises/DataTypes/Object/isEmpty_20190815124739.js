const isEmpty = obj => {
    for (const key in obj) {
        if (key) {
            return false;
        }
    }
    return true;
}
const user = {};

console.log(isEmpty(user));

user.name = 'John';

console.log(isEmpty(user));