import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutService} from '../../app/services/workout.service';

import {WorkoutsPage} from '../workouts/workouts';


@Component({
  templateUrl: 'add-workout.html',
	providers:[WorkoutService]
})

export class AddWorkoutPage {

  title: string;
	note: string;
	type: string;
	workoutService: WorkoutService;
	result:any;
	navCtrl: NavController;

	constructor(workoutService:WorkoutService,navController:NavController){
		this.navCtrl = navController;
		this.title;
		this.note;
		this.type;
		this.workoutService= workoutService;

	}

	onSubmit(){
      var workout = {
				title: this.title,
				note: this.note,
				type: this.type
			}
			//ADD Workout
			this.workoutService.addWorkout(workout).subscribe(data => {
				this.result = data
			},
			err => console.log(err),
			() => console.log('workout Added!')
			);

			this.navCtrl.setRoot(WorkoutsPage);
	}
	
}
