export class ResponseModel {

    private message: string;

    constructor(
        private status: Status,
        private response: Array<any>,
        message: string = ""
    ) {
        if (message === "")
            switch (status) {
                case Status.OK:
                    this.message = "OK";
                    break;
                case Status.CREATED:
                    this.message = "CREATED";
                    break;
                case Status.ACCEPTED:
                    this.message = "ACCEPTED";
                    break;
                case Status.NOT_FOUND:
                    this.message = "NOT_FOUND";
                    break;
                case Status.INTERNAL_SERVER_ERROR:
                    this.message = "INTERNAL_SERVER_ERROR";
                    break;
                default:
                    this.message = "";
                    break;
            }
        else
            this.message = message;
    }

    public getStatus(): Status{
        return this.status;
    }

}

export enum Status {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}