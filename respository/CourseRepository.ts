import { Document, Schema, Model, model } from 'mongoose';
import { IStudentModel } from './StudentRepository';

export interface ICourseModel extends Document{
    title: string,
    description: string,
    tags: Array<string>
}

let courseSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
});

export const CourseSchema: Model<ICourseModel> = model<ICourseModel>("Course", courseSchema);