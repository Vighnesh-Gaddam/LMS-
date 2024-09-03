import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient =() => {
    if(process.env.UPSTASH_REDIS_REST_URL){
        console.log(`Redis connected`);
        return process.env.UPSTASH_REDIS_REST_URL;
    }
    throw new Error ('Redis connection failed');
};

export const redis = new Redis(redisClient());
