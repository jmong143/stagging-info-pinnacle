import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  nearbyPlaces : any = []
  accommodations : any = []
  nearbyResidences : any = []

  constructor() { }

  ngOnInit() {
    
    this.nearbyPlaces = [
      {
        title : "Residences",
        image : "../../../../assets/img/icons/building.png",
        description : "Affordable condos, dorms, apartments, boarding houses, townhouses",
      },
      {
        title : "Distance",
        image : "../../../../assets/img/icons/located.png",
        description : "Located only 100 meters away"
      },
      {
        title : "Coffee and Tea",
        image : "../../../../assets/img/icons/coffee.png",
        names : ["Starbucks", "asdas"]
      },
      {
        title : "Fitness",
        image : "../../../../assets/img/icons/fitness.png",
        names : ["Muscle Up", "Pound-for-Pound", "Elorder", "Anytime Fitness"]
      },
      {
        title : "Bank",
        image : "../../../../assets/img/icons/bank.png",
        names : ["BPI", "BDO", "RCBC", "Eastwest Bank", "China Bank", "Metrobank","Security Bank"]
      },
      {
        title : "Supermarket",
        image : "../../../../assets/img/icons/supermarket.png",
        names : ["Savemore", "Shopwise"]
      },
      {
        title : "Internet",
        image : "../../../../assets/img/icons/internet.png",
        names : ["Minesky Infinity", "GG80 Internet Cafe"]
      },
      {
        title : "Laundry",
        image : "../../../../assets/img/icons/laundry.png",
        names : ["Quick Clean"]
      },
      {
        title : "Recreation",
        image : "../../../../assets/img/icons/recreational.png",
        names : ["Snacks & Ladder", "Laruan"]
      },
      {
        title : "Church",
        image : "../../../../assets/img/icons/church.png",
        description : "Diliman Bible Church INC., Parish"
      },
      {
        title : "Hatch Hub",
        image : "../../../../assets/img/icons/hatch-hub.png",
        names : [
          "WIP PH",
          "Think Spot"
        ]
      }
    ]

    this.accommodations = [
      "Ready to occupy residences",
      "Full assistance from reservation to occupancy",
      "Affordable dorm, condo, apartment and boarding house",
      "Available in 6 months’ contract",
      "Can easily accommodate thousands of students",
      "Stay literally beside or across the review school",
      "Commercial establishments at the ground floor"
    ]

    this.nearbyResidences = [
      "../../../../assets/img/buildings/building 1.jpg",
      "../../../../assets/img/buildings/building 2.jpg",
      "../../../../assets/img/buildings/building 3.jpg",
      "../../../../assets/img/buildings/building 3.5.jpg"
    ]
  }

}
