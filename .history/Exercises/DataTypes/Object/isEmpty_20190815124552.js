const isEmpty = obj => {
    for (const key in obj) {
        if (object.hasOwnProperty(key)) {
            return true;
        }
    }
    return false;
}
const user = {};
console.log(isEmpty(user));
user.name = 'John';
console.log(isEmpty(user));