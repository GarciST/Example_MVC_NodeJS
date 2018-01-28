import {Controller ,Get ,Post,Route ,Request ,Response, RequestBody, ResponseBody } from "back-js";
import { StudentService } from '../services/StudentService';
import { IStudentModel } from '../respository/StudentRepository';
import { ResponseModel } from '../model/ResponseModel';
import { Delete, Put } from "back-js/decorators/decorators";

/**
 * StudentController handle the Student objects to view
 */
@Controller
@Route("/students")
class StudentController {


	constructor(
        private studentsService: StudentService
    ) {
	}
    

    /**
     * Return all Student objects from database
     * 
     * @param req request object
     * @param res response object
     */
    @Get("/")
    @ResponseBody
    getAllStudents(req : Request ,res : Response ) : Promise<ResponseModel> {
        return this.studentsService.getAllStudents(
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

    /**
     * Return a Student by Identifier
     * 
     * @param req request object
     * @param res response object
     * @param id identifier of Student
     */
    @Get("/:id")
    @ResponseBody
    getStudentById(req : Request ,res : Response, id: string ) : Promise<ResponseModel> {
        return this.studentsService.getStudentById(id).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Save a new Student and return the result
     * 
     * @param student Student Body (Applicaction/json)
     * @param req request object
     * @param res response object
     */
    @Post("/")
    @ResponseBody
    saveStudent(@RequestBody student, req : Request ,res : Response) : Promise<ResponseModel> {
        return this.studentsService.saveStudent(student).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }

    /**
     * Remove a Student by Identifier
     * 
     * @param student Student Body (Applicaction/json)
     * @param req request object
     * @param res response object
     */
    @Delete("/")
    @ResponseBody
    removeStudent(@RequestBody student, req : Request ,res : Response) : Promise<ResponseModel> {
        return this.studentsService.removeStudent(student._id).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }

    /**
     * Update student by identifier
     * 
     * @param student 
     * @param req request object
     * @param res response object
     * @param id student identifier 
     */
    @Put("/:id")
    @ResponseBody
    updateStudent(@RequestBody student, req : Request ,res : Response, id: string) : Promise<ResponseModel> {
        return this.studentsService.updateStudent(id, student).then((result) => {
            res.status(result.getStatus());
            return result;
        }).catch((err) => {
            return err;
        });;
    }
}