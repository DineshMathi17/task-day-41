const validator = require('validator')
const mongoose = require('mongoose')

let studentSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{
            type:String,
            required:true,
            lowercase:true,
            validate:(value)=>{
                return validator.isEmail(value)
            }
        },
        standard:{type:String,required:true},
        age:{type:String,required:true},
        mentor:{type:Array,required:true},
        role:{type:String,default:'student'},
        createdAt:{type:Date,default:Date.now}
    },
    {
       collection:'student',
       versionKey:false
    }
)


let studentModel = mongoose.model('student',studentSchema)
module.exports={studentModel}
