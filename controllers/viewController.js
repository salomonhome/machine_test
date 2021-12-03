const Users = require(__basedir + '/Models/usersModel');
exports.index = (req, res) => {
    res.render('index', {
        title: 'Home',
    });
};
exports.form = async (req, res, next) => {
    try
    {
        const body = { ...req.body, createdAt: new Date() };
        const user = await Users.create(body)
        if (user)
            res.render('index', {
                title: 'Home', message: 'User Data saved'
            });
        else
            res.render('index', {
                title: 'Home', message: 'Failed to save data'
            });


    } catch (error)
    {
        res.render('index', {
            title: 'Home', message: error.message
        });
    }
};
exports.users = async (req, res, next) => {
    try
    {
        const users = await Users.find({})
        // res.send(users)
        res.render('list', {
            title: 'List',
            users: users,
            message: ''
        });

    } catch (error)
    {
        res.render('list', {
            title: 'List',
            users: [],
            message: error.message
        });

    }
};
exports.user = async (req, res, next) => {
    try
    {
        const user = await Users.findById(req.params.id)
        // res.send(users)
        res.render('details', {
            title: 'List',
            user: user,
            message: ''
        });

    } catch (error)
    {
        res.render('details', {
            title: 'List',
            user: [],
            message: error.message
        });

    }
};