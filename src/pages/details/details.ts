import {Component} from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

import { WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';

@Component({
    templateUrl:'details.html'
})

export class DetailsPage{
    navCtrl: NavController;
    navParams: NavParams;
    workout:string;
   	workoutService: WorkoutService;
    result:any;

    constructor(navCtrl:NavController,navParams:NavParams,workoutService:WorkoutService){
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workout = this.navParams.get('workout');
        this.workoutService= workoutService;
    }

    deleteWorkout(workoutId)
    {
        	this.workoutService.deleteWorkout(workoutId).subscribe(data => {
				this.result = data
			},
			err => console.log(err),
			() => console.log('workout Deleted!')
			);
			this.navCtrl.setRoot(WorkoutsPage);
    }
}