import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required' // 에러 메세지 ( require 가 안됐을 경우 출력)
    },
     title:{
         type: String,
         required: "Title is required"
     },
     description: String,
     views:{
         type: Number,
         default: 0
     },
     createAt: {
         type: Date,
         default: Date.now
     },
     // 방법 2
     comments:{ // comment의 id를 가져와서 array로 보관
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment" // 가져오는 모델의 이름
     }
});

const model = mongoose.model("Video", VideoSchema);

export default model;