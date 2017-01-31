import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';


import { WorkoutService } from '../../app/services/workout.service';

@Component({
  templateUrl: 'workouts.html',
	providers:[WorkoutService]
})

export class WorkoutsPage {

  workoutService: WorkoutService;
	workouts:string;

	static get parameters(){
		return [[WorkoutService]];
	}
	constructor(workoutService:WorkoutService){
		this.workoutService = workoutService;
	}

	ngOnInit(){
		this.workoutService.getWorkouts().subscribe(
     workouts => {
         this.workouts = workouts;
		 })
	}
	
}
