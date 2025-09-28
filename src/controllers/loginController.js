const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) {
    req.flash('errors', 'Você já está logado.');    
    return res.redirect('/');
}
    res.render('login');
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);

    if(login.errors.length > 0) {
        res.render('login', { errors: login.errors });
        return;
    }
    await login.register();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => res.redirect('/login/index'));
        return;
    }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.user = login.user;
        req.session.save(() => res.redirect('/'));

        } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => res.redirect('/login/index'));
        return;
    }

        req.flash('success', 'Seu usuário foi logado com sucesso.');
        req.session.user = login.user;
        req.session.save(() => res.redirect('/'));

    } catch(e) {
    console.log(e);
    return res.render('404');
    }
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};