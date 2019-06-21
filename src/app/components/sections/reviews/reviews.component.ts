import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  founder : any = {}
  specificDescriptions : any = []
  coFounders : any = []
  coFoundersRow2 : any []
  constructor() { }

  ngOnInit() {
    this.founder = {
      image : '../../../../assets/img/reviewers/founder.png',
      name : 'BRAD NEIEL DELA CRUZ, CPA',
      position : "Founder and Managing Director",
      achievements : [
        {
          description : "Top 7, Oct. 2012 CPA Board Exam ",
          specificDescription : []
        },
        {
          description : "Magna Cum Laude, UP Diliman",
          specificDescription : []
        },
        {
          description : "Faculty member and lecturer - Cesar Virata School of Business, UP Diliman (2014-present)",
          specificDescription : [
            {
              description : "Handles major accounting and review subjects for 4th and 5th year students"
            },
            {
              description : "From 2014 to 2018",
              otherDescription : [
                "Average passing rate of 98.64% (vs. national passing rate of 34.04%)",
                "Total of 11 placers in the top 10"
              ]
            }
          ]
        },
        {
          description : "Former reviewer, CPA Review School of the Philippines (CPAR)",
          specificDescription : []
        },
        {
          description : "Former auditor, SGV & Co.",
          specificDescription : []
        }
      ]


    }

    this.coFounders = [
      {
        image : '../../../../assets/img/reviewers/JL.png',
        name : "JOHN LESTER ARATEA, CPA",
        position : "AFAR, Tax",
        achievements : [
          "Top 5, Oct. 2017 CPA Board Exam",
          "Magna Cum Laude, UP Diliman",
          "1st Place, UST-JPIA 12th Alfredo M. Velayo Cup",
          "1st Place, NFJPIA-NCR Cup 6:",
          "Advanced Financial Accounting & Reporting",
          "2017 Awardee, UP VSB & SGV Excellence in Accountancy",
          "2016 Awardee, UP VSB & P&G Excellence in Finance",
          "Former auditor, KPMG "
        ]
      },
      {
        image : '../../../../assets/img/reviewers/JRA.png',
        name : "JOSEL RICHA ANN RIVERA, CPA",
        position : "AMAS, FAR",
        achievements : [
          "Top 7, Oct. 2014 CPA Board Exam",
          "Magna Cum Laude, UP Diliman",
          "Masters in Economics, National Tsing Hua University - Taiwan",
          "Faculty member, Cesar Virata School of Business, UP Diliman",
          "1st place, 15th Intercollegiate Finance Competition (ICFC)",
          "Elite scholarship grantee",
          "Former auditor, SGV & Co." ,
        ]
      }
    ]

    this.coFoundersRow2 = [
     {
        image : '../../../../assets/img/reviewers/JERELLEEN.png',
        name : "JERELLEEN RODRIGUEZ, CPA",
        position : "Auditing, FAR",
        achievements : [
          "Top 6, Oct. 2013 CPA Board Exam",
          "Cum Laude, UP Diliman",
          "Student, UP College of Law",
          "Former faculty member, Cesar Virata School of Business, UP Diliman",
          "Former auditor, SGV & Co."
        ]
      },
      {
        image : '../../../../assets/img/reviewers/DO.png',
        name : "ATTY. DONALD ONGHANSENG, CPA",
        position : "RFBT",
        achievements : [
          "Top 3, Ateneo Law Batch 2017",
          "Passed all 3 levels of Chartered Financial Analyst (CFA) program",
          "Cum Laude, UP Diliman",
          "Best thesis, Ateneo Law Batch 2017",
          "Associate lawyer at Insights Philippines Legal Advisers",
        ]
      }
    ]

    console.log(this.coFounders)
  }

}
