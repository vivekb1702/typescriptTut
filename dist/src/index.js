"use strict";
const addition = (num1, num2) => {
    return num1 + num2;
};
console.log(addition(5, 6));
const addNumberOrText = (input1, input2) => {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
};
console.log(addNumberOrText(2, '5'));
const userData = [{ id: 1, name: 'Vivek', lastName: 'B', age: 27, role: 'admin', address: 'tvm' }];
const enterUserData = (data) => {
    const entry = { id: data.id, name: data.name, lastName: data.lasName, age: data.age, role: data.role, address: data.address === undefined ? '' : data.address };
    userData.push(entry);
    return entry;
};
console.log(enterUserData({
    id: userData.length + 1,
    name: 'Kevin',
    lasName: 'T',
    age: 26,
    role: 'developer'
}));
const getUserName = (id) => {
    const index = userData.findIndex((item) => item.id = id);
    return userData[index].name;
};
console.log(getUserName(1));
const calucations = (num1, num2, cb) => {
    return cb(num1, num2);
};
console.log(calucations(6, 7, addition));
//# sourceMappingURL=index.js.map