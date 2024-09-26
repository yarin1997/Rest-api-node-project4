export const initialData = {
    "users": [
        {
            "name": {
                "first": "regular",
                "last": "user"
            },
            "email": "regular@gmail.com",
            "password": "Aa123456!",
            "phoneNumber": "050-0000000",
            "isBusiness": false,
            "isAdmin": false,
            "address": {
                "state": "middleEast", // Optional, can be filled
                "country": "israel",
                "city": "tel-aviv",
                "street": "magnive",
                "houseNumber": "5",
                "zip": "123456" // Optional, can be filled
            },
            "image": {
                "url": "https://example.com/images/user3.jpg",
                "alt": "Profile image of Charlie Brown"
            }
        },
        {
            "name": {
                "first": "business",
                "last": "user"
            },
            "email": "business@gmail.com",
            "password": "Aa123456!",
            "phoneNumber": "050-0000000",
            "isBusiness": true,
            "isAdmin": false,
            "address": {
                "state": "Jerusalem", // Optional, can be filled
                "country": "israel",
                "city": "tel-aviv",
                "street": "magnive",
                "houseNumber": "5",
                "zip": "54321" // Optional, can be filled
            },
            "image": {
                "url": "https://example.com/images/user6.jpg",
                "alt": "Profile image of Fiona White"
            }
        },
        {
            "name": {
                "first": "admin",
                "last": "user"
            },
            "email": "admin@gmail.com",
            "password": "Abc!123Abc",
            "phoneNumber": "050-0000000",
            "isBusiness": true,
            "isAdmin": true,
            "address": {
                "state": "Israel", // Optional, can be filled
                "country": "israel",
                "city": "tel-aviv",
                "street": "magnive",
                "houseNumber": "5",
                "zip": "13579" // Optional, can be filled
            },
            "image": {
                "url": "https://example.com/images/user5.jpg",
                 "alt": "Profile image of Edward King"
            }
        }
    ],
    "cards": [
        {
            "title": "first card",
            "subtitle": "this is the first card",
            "description": "this is the first card in the database",
            "phone": "050-0000000",
            "email": "firstCard@gmail.com",
            "web": "https://www.test.co.il",
            "image": {
                "url": "https://example.com/images/user4.jpg",
                 "alt": "Profile image of Dana Lee"
            },
            "address": {
                "state": "Israel", // Optional, can be filled
                "country": "test",
                "city": "test",
                "street": "test",
                "houseNumber": 3,
                "zip": "012345"
            }
        },
        {
            "title": "second card",
            "subtitle": "this is the second card",
            "description": "this is the second card in the database",
            "phone": "050-0000000",
            "email": "secondCard@gmail.com",
            "web": "https://www.test.co.il",
            "image": {
                 "url": "https://example.com/images/user3.jpg",
                 "alt": "Profile image of Charlie Brown"
            },
            "address": {
                "state": "Israel", // Optional, can be filled
                "country": "test",
                "city": "test",
                "street": "test",
                "houseNumber": 3,
                "zip": "12345"
            }
        },
        {
            "title": "third card",
            "subtitle": "this is the third card",
            "description": "this is the third card in the database",
            "phone": "050-0000000",
            "email": "thirdCard@gmail.com",
            "web": "https://www.test.co.il",
            "image": {
                 "url": "https://example.com/images/user1.jpg",
                 "alt": "Profile image of Alice Smith"
            },
            "address": {
                "state": "world", // Optional, can be filled
                "country": "test",
                "city": "test",
                "street": "test",
                "houseNumber": 3,
                "zip": "011111"
            }
        }
    ]
};
