import jwt from 'jsonwebtoken';
import Crypto from 'crypto-js';

const getToken = () => jwt.sign(
    {coba: 'yeahcoba'}, 
    'alik', 
    {expiresIn: '1h'}
);

const getHash = password => Crypto
    .SHA3(password, {outputLength: 512})
    .toString();

export {getToken, getHash};
