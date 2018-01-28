import { Document, Schema, Model, model } from 'mongoose';

export interface IStudentModel extends Document{
    nif: string;
    name: string;
    surname: string;
    age: number;
    address: string;
    postcode: number;
}

let studentSchema = new Schema({
    nif:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    postcode:{
        type: Number
    }
});

export const StudentSchema: Model<IStudentModel> = model<IStudentModel>("Student", studentSchema);