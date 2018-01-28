
import {Controller ,Get ,Route ,Response } from "back-js";

/**
 * Welcome Screen http://localhost:3000/
 */
@Controller
@Route("/")
class HomeController{

    constructor(){}

    @Get("/")
    welcome(res : Response) {
        res.end("<html><head></head><body><h2>Welcome to Academy Example MVC</h2></body></html>");
    }


} 