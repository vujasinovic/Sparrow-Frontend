export class ApiResponse {

  constructor(
    public success: boolean,
    public status: string,
    public message: string,
    public body: object
  ) {}

}
