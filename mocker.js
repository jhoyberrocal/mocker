const express = require('express');
const router = express.Router();

const GET = {
    test: {'data': 'test'}
};
const POST = {
    test: {'data': 'test'}
};
const PUT = {
    test: {'data': 'test'}
};
const DELETE = {
    test: {'data': 'test'}
};

const mocks = {
    GET,
    POST,
    PUT,
    DELETE
}

router.get('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        res.json(mocks.GET[path]);
    } catch(e) {
        res.json({err: `Path doesn't exits`});
    }
});

router.post('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        res.json(mocks.POST[path]);
    } catch(e) {
        res.json({err: `Path doesn't exits`});
    }
});

router.put('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        res.json(mocks.PUT[path]);
    } catch(e) {
        res.json({err: `Path doesn't exits`});
    }
});

router.delete('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        res.json(mocks.DELETE[path]);
    } catch(e) {
        res.json({err: `Path doesn't exits`});
    }
});

router.post('/save-mock', (req, res) => {
    try {
        const {code, type, name} = req.body;
        mocks[type][name] = code;

        res.json({url:`/api/${name}`, mocks: mocks[type]});
    } catch(e) {
        res.json(e)
    }
});

router.get('/mocks', (req, res) => {
    res.render('mocks');
});

router.get('/get-mocks', (req, res) => {
   res.json(mocks);
});

module.exports = router;
