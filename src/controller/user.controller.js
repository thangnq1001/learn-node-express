const User = require('../model/user');
const httpStatus = require('http-status');

module.exports.createUser = (req, res) => {
    User.create(req.body, (err, savedUser) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(httpStatus.OK).send(savedUser);
    });
};

module.exports.findAllUsers = (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        res.status(httpStatus.OK).send(foundUsers);
    })
};

module.exports.findUserById = (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        if (!foundUser) {
            return res.status(httpStatus.NOT_FOUND).send('No such user found');
        }
        res.status(httpStatus.OK).send(foundUser);
    });
};

module.exports.deleteUserById = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        if (!deletedUser) {
            return res.status(httpStatus.BAD_REQUEST).send('No such user to delete');
        }
        res.status(httpStatus.OK).send(deletedUser);
    });
};

module.exports.patchUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, savedUser) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        if (!savedUser) {
            return res.status(httpStatus.BAD_REQUEST).send('No such user to update');
        }
        res.status(httpStatus.OK).send(savedUser);
    });
};

module.exports.putUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true }, (err, savedUser) => {
        if (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        if (!savedUser) {
            return res.status(httpStatus.BAD_REQUEST).send('No such user to update');
        }
        res.status(httpStatus.OK).send(savedUser);
    });
};
