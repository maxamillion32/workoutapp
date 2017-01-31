import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import {DetailsPage} from '../details/details';

@Component({
  templateUrl: 'workouts.html',
	providers:[WorkoutService]
})

export class WorkoutsPage {

  workoutService: WorkoutService;
	workouts:string;
  navCtrl : NavController;

	constructor(workoutService:WorkoutService, navCtrl:NavController){
		this.workoutService = workoutService;
		this.navCtrl = navCtrl;

			this.workoutService.getWorkouts().subscribe(
     workouts => {
         this.workouts = workouts;
		 })
	}

	ngOnInit(){
		// this.workoutService.getWorkouts().subscribe(
    //  workouts => {
    //      this.workouts = workouts;
		//  })
	}
	
	workoutSelected(event, workout){
		this.navCtrl.push(DetailsPage,{
			workout: workout
		})
	}
	
}
