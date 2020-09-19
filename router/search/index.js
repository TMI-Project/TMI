const express = require('express');
const cookies = require('../../lib/cookie');
const Account = require('../../models/account');


const search = express.Router();

search.get('/', (req, res) =>
    res.render('search', {
        posts: [{
                category: 'TMI',
                title: '타닥이를 안아프게 맞는 발명품5',
                description: '아잉 기모찌해',
                Publisher: 'ICT',
            },
            {
                category: 'TMI',
                title: '타닥이를 안아프게 맞는 발명품4',
                description: '아잉 기모찌해',
                Publisher: 'ICT',
            },
            {
                category: 'TMI',
                title: '타닥이를 안아프게 맞는 발명품3',
                description: '아잉 기모찌해',
                Publisher: 'ICT',
            }, {
                category: 'TMI',
                title: '타닥이를 안아프게 맞는 발명품2',
                description: '아잉 기모찌해',
                Publisher: 'ICT',
            },
            {
                category: 'TMI',
                title: '타닥이를 안아프게 맞는 발명품1',
                description: '아잉 기모찌해',
                Publisher: 'ICT',
            },
        ],
        page: parseInt(req.query.page || 1),
        postCnt: 121
    })
);

module.exports = search;