import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {OwnerEntity} from "./model/owner.interface";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private log(message: string) {
    this.messageService.add(`OwnersService: ${message}`);
  }

  private ownersUrl = 'api/owners';

  constructor(private http: HttpClient,
              private messageService: MessageService) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl)
  }

  addOwner(owner: OwnerEntity): Observable<OwnerEntity> {
    return this.http.post<OwnerEntity>(this.ownersUrl, owner, this.httpOptions).pipe(
      tap((newOwner: OwnerEntity) => {
        this.log(`added hero w/ id=${newOwner.aId}`);
      }),
      catchError(this.handleError<OwnerEntity>('addHero'))
    );
  }

  deleteOwner(id: number): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${id}`;
    return this.http.delete<OwnerEntity>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<OwnerEntity>('deleteHero'))
    );
  }
}
