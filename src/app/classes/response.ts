import { Info, IResponse } from "../models/response";

export class Response<T> implements IResponse<T>{
    results: T;
    info: Info;

    constructor(results: T , info?: Info) {
      this.results = results;
      this.info = info || {} as Info;
    }
}
