"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var dotenv = require("dotenv");
dotenv.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager';
mongoose_1.default.connect(uri)
    .then(function () {
    console.log('MongoDB connected successfully...');
})
    .catch(function (err) {
    console.log("MongoDB connection error: ".concat(err));
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
