import { Injectable } from '@angular/core';
import {HttpModule,Http} from '@angular/http';
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

}