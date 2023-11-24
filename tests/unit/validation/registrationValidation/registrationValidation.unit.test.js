import isINNValid from '../../../../src/utils/validation/isINNValid';
import isKPPValid from '../../../../src/utils/validation/isKPPValid';

//check organization INN validation
test('org INN should contains 10 numbers only', () => {
    expect(isINNValid('1161161161')).toBe(true); //good example
})

test('org INNs length shouldn`t be 10', () => {
    expect(isINNValid('116116116')).not.toBe(true); // condition 1 - inn length is 10
})

test('org INN shouldn`t contains 10 numbers only', () => {
    expect(isINNValid('116116116A')).not.toBe(true); // condition 1 - 10 numbers
})

// check organization KPP validation

test('org KPP should contains 10 numbers only', () => {
    expect(isKPPValid('116116116')).toBe(true); //good example
})

test('org KPPs length shouldn`t be 10', () => {
    expect(isKPPValid('11611611')).not.toBe(true); // condition 1 - kpp length is 10
})

test('org KPP shouldn`t contains 10 numbers only', () => {
    expect(isKPPValid('11611611A')).not.toBe(true); // condition 1 - 10 numbers
})
