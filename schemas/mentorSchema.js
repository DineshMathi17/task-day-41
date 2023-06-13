const validator = require('validator')
const mongoose = require('mongoose')

let mentorSchema = new mongoose.Schema(
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
        role:{type:String,default:'Mentor'},
        age:{type:String,required:true},
        students:{type:Array,required:true},
        createdAt:{type:Date,default:Date.now}
    },
    {
       collection:'mentor',
       versionKey:false
    }
)


let mentorModel = mongoose.model('mentors',mentorSchema)
module.exports={mentorModel}
