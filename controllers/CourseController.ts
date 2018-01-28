import {Controller ,Get ,Post,Route ,Request ,Response, RequestBody, ResponseBody } from "back-js";
import { CourseService } from "../services/CourseService";
import { ResponseModel } from '../model/ResponseModel';
import { Delete, Put } from 'back-js/decorators/decorators';


/**
 * CourseController handle the Student objects to view
 */
@Controller
@Route("/courses")
export class CourseController{
    constructor(
        private courseService: CourseService
    ) {
	}
    

    @Get("/")
    @ResponseBody
    getAllCourses(req : Request ,res : Response ) : Promise<ResponseModel> {
        return this.courseService.getAllCourses(
            req.query.orderby || "",
            parseInt(req.query.asc || 1),
            parseInt(req.query.limit || 20)
        ).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });
    }

    @Get("/:id")
    @ResponseBody
    getCourseById(req : Request ,res : Response, id: string ) : Promise<ResponseModel> {
        return this.courseService.getCourseById(id).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });
    }

    @Post("/")
    @ResponseBody
    saveCourse(@RequestBody course, req : Request ,res : Response) : Promise<ResponseModel> {
        return this.courseService.saveCourse(course).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }

    @Delete("/")
    @ResponseBody
    removeCourse(@RequestBody student, req : Request ,res : Response) : Promise<ResponseModel> {
        return this.courseService.removeCourse(student._id).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }

    @Put("/:id")
    @ResponseBody
    updateCourse(@RequestBody course, req : Request ,res : Response, id: string) : Promise<ResponseModel> {
        return this.courseService.updateCourse(id, course).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }
}