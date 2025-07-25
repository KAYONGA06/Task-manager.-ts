"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager';
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('MongoDB connected successfully...');
})
    .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
