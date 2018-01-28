import { Service } from 'back-js';
import { IStudentModel, StudentSchema } from '../respository/StudentRepository';
import { ResponseModel, Status } from '../model/ResponseModel';

@Service
export class StudentService {

    constructor(
    ) {
    }

    getAllStudents(
        _sort: string = "",
        _asc: number = 1,
        _limit: number = 20
    ): Promise<ResponseModel> {
        return StudentSchema.find({}).sort(_sort !== "" ? { [_sort]: _asc } : {}).limit(_limit).then((students) => {
            return new ResponseModel(Status.OK, students);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    getStudentById(id: string): Promise<ResponseModel> {
        return StudentSchema.find({ _id: id}).then((students) => {
            return new ResponseModel(Status.OK, students);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    saveStudent(student: IStudentModel): Promise<ResponseModel> {
        let newStudent = new StudentSchema(student);

        return newStudent.save().then((result) => {
            return new ResponseModel(Status.CREATED, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    removeStudent(id: string): Promise<ResponseModel> {
        return StudentSchema.remove({ _id: id }).then((result) => {
            return new ResponseModel(Status.OK, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    updateStudent(id: string, student: IStudentModel): Promise<ResponseModel> {
        return StudentSchema.update(
            { _id: id },
            { $set: student }
        ).then((result) => {
            return new ResponseModel(Status.OK, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }
}