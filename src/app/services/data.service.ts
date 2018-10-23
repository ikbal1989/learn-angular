import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()

export class DataService {



  constructor(private url, private http: Http) { }

  /**
   * Getting resource from server
   */
  getAll() {
    return this.http.get(this.url)
                    .pipe(map(response => response.json()))
                    .pipe(catchError(this.handleError));
  }

  /**
   *  Create new post
   * @param resource resource data
   */
  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
                    .pipe(map(response => response.json()))
                    .pipe(catchError(this.handleError));
  }

  /**
   *  Update existing resource
   * @param resource resource data
   */
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
                    .pipe(map(response => response.json()))
                    .pipe(catchError(this.handleError));
  }

  /**
   *  Delete existing resource
   * @param id resource id
   */
  delete(id) {
    return this.http.delete(this.url + '/' + id)
                    .pipe(map(response => response.json()))
                    .pipe(catchError(this.handleError));
  }


  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
  }

}
