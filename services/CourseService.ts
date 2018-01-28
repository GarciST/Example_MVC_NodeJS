import { Service } from "back-js/decorators/decorators";
import { ICourseModel, CourseSchema } from '../respository/CourseRepository';
import { ResponseModel, Status } from '../model/ResponseModel';

@Service
export class CourseService {

    constructor() { }

    getAllCourses(
        _sort: string = "",
        _asc: number = 1,
        _limit: number = 20
    ): Promise<ResponseModel> {
        return CourseSchema.find({}).sort(_sort !== "" ? { [_sort]: _asc } : {}).limit(_limit).then((courses) => {
            return new ResponseModel(Status.OK, courses);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    getCourseById(id: string): Promise<ResponseModel> {
        return CourseSchema.find({ _id: id}).then((courses) => {
            return new ResponseModel(Status.OK, courses);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    saveCourse(course: ICourseModel): Promise<ResponseModel> {
        let newCourse = new CourseSchema(course);

        return newCourse.save().then((result) => {
            return new ResponseModel(Status.CREATED, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    removeCourse(id: string): Promise<ResponseModel> {
        return CourseSchema.remove({ _id: id }).then((result) => {
            return new ResponseModel(Status.OK, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }

    updateCourse(id: string, course: ICourseModel): Promise<ResponseModel> {
        return CourseSchema.update(
            { _id: id },
            { $set: course }
        ).then((result) => {
            return new ResponseModel(Status.OK, [result]);
        }).catch((err) => {
            return new ResponseModel(Status.INTERNAL_SERVER_ERROR, [], err);
        });
    }
}