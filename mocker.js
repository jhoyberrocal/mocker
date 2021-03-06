const express = require('express');
const router = express.Router();

const test = {data: {'data': 'test'}, status: 200};

const GET = {
    test
};
const POST = {
    test
};
const PUT = {
    test
};
const DELETE = {
    test
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
        const {data, status} = mocks.GET[path];
        res.status(status);
        res.json(data);
    } catch(e) {
        res.status(404);
        res.json({err: `Server reloaded, Path doesn't exits Anymore, please save Mock again`});
    }
});

router.post('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        const {data, status} = mocks.POST[path];
        res.status(status);
        res.json(data);
    } catch(e) {
        res.status(404);
        res.json({err: `Server reloaded, Path doesn't exits Anymore, please save Mock again`});
    }
});

router.put('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        const {data, status} = mocks.PUT[path];
        res.status(status);
        res.json(data);
    } catch(e) {
        res.status(404);
        res.json({err: `Server reloaded, Path doesn't exits Anymore, please save Mock again`});
    }
});

router.delete('/api/:url',(req, res) => {
    try {
        const path = req.params.url;
        const {data, status} = mocks.DELETE[path];
        res.status(status);
        res.json(data);
    } catch(e) {
        res.status(404);
        res.json({err: `Server reloaded, Path doesn't exits Anymore, please save Mock again`});
    }
});

router.post('/save-mock', (req, res) => {
    try {
        const {code, type, name, status} = req.body;
        mocks[type][name] = {data: code, status};

        res.json({url:`/api/${name}`, mocks: mocks[type]});
    } catch(e) {
        res.status(500);
        res.json({error: e});
    }
});

router.get('/mocks', (req, res) => {
    res.render('mocks');
});

router.get('/get-mocks', (req, res) => {
   res.json(mocks);
});

module.exports = router;
