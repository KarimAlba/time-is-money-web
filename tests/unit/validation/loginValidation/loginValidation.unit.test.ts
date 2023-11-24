import isEmailValid from '../../../../src/utils/validation/isEmailValid';
import isPasswordValid from '../../../../src/utils/validation/isPasswordValid';

//Checking email validation work
test('Email should contains "@" symbol', () => {
    expect(isEmailValid('karim_skiy@mail.ru')).toBe(true); // good example
})

test('Email isn`t validate email beacause without "@"', () => {
    expect(isEmailValid('karim_skiymail.ru')).not.toBe(true); // condition1 - '@' symbol
})

//Checking password validation work
test('Should correctly validate password', () => {
    expect(isPasswordValid('Karim@2023')).toBe(true); // good example
})

test('shouldn`t validate password because it hasn`t cap letter', () => {
    expect(isPasswordValid('karim@2023')).not.toBe(true); // condition1 - capital letter
})

test('shouldn`t validate password because it hasn`t any symbols', () => {
    expect(isPasswordValid('Karim_2023')).not.toBe(true); // condition2 - symbol
})

test('shouldn`t validate password because passwords length less than 8', () => {
    expect(isPasswordValid('K@2023')).not.toBe(true); // condition3 - length must to be more than 8
})

test('shouldn`t validate password because it hasn`t any numbers', () => {
    expect(isPasswordValid('Karim@')).not.toBe(true); // condition3 - number
})