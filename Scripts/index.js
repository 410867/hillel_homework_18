let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

const phonesNumberArray = users
    .filter((item) => {
        return balanceTransformationStringToNumber(item.balance)[0] >= 2000
    })
    .map((item) => {
        return item.phone;
    })
    .join(', ');

const sumBalance = users.reduce((Acc, item) => {    //Знаходження сум цілої частини балансу та його залишку
    const balance = balanceTransformationStringToNumber(item.balance)
    return [(Acc[0] + balance[0]), (Acc[1] + balance[1])];
}, [0, 0]);

console.log(`Масив телефонних номерів користувачів, у яких баланс більше 2000 доларів: ${phonesNumberArray}.`);
console.log(`Сума всіх балансів користувачів: ${balanceTransformationNumberToString(sumBalance[0], sumBalance[1])}`);


function balanceTransformationStringToNumber(strBalance) {    //Переведення балансу із типу даних String в Number
    let integerBalance = 0;
    let remainderBalance = 0;

    integerBalance = Number(strBalance.slice(1, strBalance.indexOf(','))
        + strBalance.slice((strBalance.indexOf(',') + 1), strBalance.indexOf('.')));

    remainderBalance = Number(strBalance.slice((strBalance.indexOf('.') + 1), strBalance.length));

    return [integerBalance, remainderBalance];
}

function balanceTransformationNumberToString(integerBalance, remainderBalance) {    //Переведення балансу із типу даних Number в String
    let strBalance = '';

    while(true) {
        if (remainderBalance >= 100) {
            integerBalance++;
            remainderBalance -= 100
        } else {
            break;
        }
    }
    integerBalance = String(integerBalance);
    remainderBalance = String(remainderBalance);

    strBalance = `$${integerBalance}.${remainderBalance}`;
    return strBalance;
}
