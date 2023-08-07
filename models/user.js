const { Schema, Types } = require('mongoose');

const userSchema = new Schema (
    {
        userName: {
            type: String, 
            unique: true, 
            required: true,

        }

})