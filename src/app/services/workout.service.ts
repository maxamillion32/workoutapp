import { Injectable } from '@angular/core';
import {HttpModule,Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class WorkoutService{
    
    http:Http;
    apiKey:string;
    workoutsUrl:string;

    constructor(http:Http){
       this.http = http;
       this.apiKey = 'CdxYAn-DyEtAS3wmaepDy6dmHwlsVMcn';
       this.workoutsUrl='https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts';
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }

    addWorkout(workout){
       var headers = new Headers();
       headers.append('Content-type','application/json');
       return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey,JSON.stringify(workout),{headers:headers})
       .map(res=>res.json);
    }

    deleteWorkout(workoutId){
      return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }

}