import mongoose from "mongoose";
import { stringLiteral } from "babel-types";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
    // 방법1
    // video: { // video의 id 와 연결해서 연관성 부여
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Video" // 가져오는 모델의 이름
    // }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;