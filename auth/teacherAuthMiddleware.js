const Teacher = require('../models').teacher;

const { toData } = require('./jwt');

async function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(' ');

  if (!auth || !auth[0] === 'Bearer' || !auth[1]) {
    res.status(401).send({
      message:
        'This endpoint requires an Authorization header with a valid token',
    });
  }

  try {
    const data = toData(auth[1]);
    const teacher = await Teacher.findByPk(data.teacherId);

    if (!teacher) {
      return res.status(404).send({ message: 'Teacher does not exist' });
    }

    req.teacher = teacher;

    return next();
  } catch (error) {
    console.log('ERROR IN AUTH MIDDLEWARE', error);

    switch (error.name) {
      case 'TokenExpiredError':
        return res
          .status(401)
          .send({ error: error.name, message: error.message });

      case 'JsonWebTokenError':
        return res
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return res.status(400).send({
          message: 'Something went wrong, sorry',
        });
    }
  }
}

module.exports = auth;
