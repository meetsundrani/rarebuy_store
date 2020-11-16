var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        maxlength: 32,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    //TODO: COme back here
    encry_password: {
        type: String,
        trim: true,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: String,
        default: []
    }

}, { timestamps: true });

userSchema.virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(functiom() {
        return this._password;
    }),


    userSchema.method = {


        authenticate: function(password) {
            return this.securePassword(plainpassword) === this.encry_password
        },
        securePassword: function(plainpassword) {
            if (!password) return "";
            try {
                return crypto.createHmac('sha256', this.salt)
                    .update(encr_password)
                    .digest('hex');
            } catch (err) {
                return "";
            }
        }
    }

module.exports = mongoose.model("User", userSchema);