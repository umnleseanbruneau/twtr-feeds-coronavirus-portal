import { Injectable } from '@angular/core';
import { LinkModel } from 'src/app/models/LinkModel';

@Injectable({
  providedIn: 'root'
})
export class ExtLinksService {
  allExtLinks: LinkModel[];
  filteredExtLinks: LinkModel[];
  rankedExtLinks: LinkModel[];

  constructor() {
    this.allExtLinks = [
      {
        name: 'Institute for Health Metrics and Evaluation (IHME)',
        title: 'COVID-19 Estimate Download',
        page: 'model',
        order: 1,
        url: 'http://www.healthdata.org/covid/data-downloads',
        description: [
          {
            comment: 'University of Washington'
          }, {
            comment: 'Widely referenced National model'
          }
        ]
      },
      {
        name: 'The COVID Tracking Project',
        title: 'The Atlantic',
        page: 'model',
        order: 2,
        url: 'https://covidtracking.com/data/download',
        description: [
          {
            comment: 'Nice data set for all states'
          }
        ]        
      },
      {
        name: 'Minnesota COVID-19 Model',
        title: 'Github repo for U of M Model 3',
        page: 'model',
        order: 3,
        url: 'https://github.com/MN-COVID19-Model',
        description: [
          {
            comment: 'UMN/MDH Minnesota COVID-19 Modelling Collaboration'
          }, {
            comment: 'Most referenced model by MN state leaders'
          }
        ]        
      },
      {
        name: 'Rt COVID-19',
        title: 'Measure to determine if virus is spreading or subsiding',
        page: 'model',
        order: 4,
        url: 'https://rt.live/',
        description: [
          {
            comment: 'State rate of virus spread'
          }, {
            comment: 'Rt greater than 1.0 means virus is spreading'
          }, {
            comment: 'Rt less than 1.0 means virus is subsiding'
          }
        ]        
      },
      {
        name: 'The COVID Tracking Project',
        title: 'The Atlantic Monthly Group',
        page: 'article',
        order: 1,
        url: 'https://covidtracking.com/',
        description: [
          {
            comment: 'Volunteers who publish COVID-19 data'
          }
        ]        
      },
      {
        name: 'AEI COVID-19 Action Trackers',
        title: 'Twitter - @COVID2019action',
        page: 'article',
        order: 2,
        url: 'https://www.aei.org/covid-2019-action-tracker/',
        description: [
          {
            comment: 'by Dr. Scott Gottlieb and his research assistant'
          },
          {
            comment: 'Maps updated daily - great national view'
          }
        ]        
      },
      {
        name: 'MN Dept of Health COVID-19 Situation Update',
        title: 'Daily numbers for tests, positive cases, hospitalizations, deaths and more',
        page: 'article',
        order: 3,
        url: 'https://www.health.state.mn.us/diseases/coronavirus/situation.html',
        description: [
          {
            comment: 'Numbers get adjusted sometimes'
          }, {
            comment: 'Do not freak out over a one day reporting number'
          }
        ]        
      },
      {
        name: 'Federal Reserve Bank of Minneapolis',
        title: 'Ninth District',
        page: 'article',
        order: 4,
        url: 'https://www.minneapolisfed.org/region-and-community/regional-economic-indicators/covid-19-and-the-ninth-district-economy-a-dashboard',
        description: [
          {
            comment: 'COVID-19 and the Ninth District ecomony: A dashboard'
          }
        ]        
      },
      {
        name: 'IMHE - Minnesota Projection',
        title: 'IMHE at University of Washington',
        page: 'article',
        order: 5,
        url: 'https://covid19.healthdata.org/united-states-of-america/minnesota',
        description: [
          {
            comment: 'IMHE Minnesota Reported and Projection numbers'
          }
        ]        
      },
      {
        name: 'Individual Choice',
        title: 'no wrong is done to one who consents',
        page: 'article',
        order: 6,
        url: 'https://thehill.com/opinion/civil-rights/496339-individual-choice-will-be-the-key-to-economic-recovery-after-the-crisis#.XsZjlFwQ_sM.twitter',
        description: [
          {
            comment: 'First heard of COVID-19 legal possibilities during discussion on Stocks and Jocks podcast'
          }, {
            comment: 'Legal questions/responsiblities after business/economy reopening'
          }
        ]        
      }
    ];
  }

  getExtModelLinks(): LinkModel[] { 
    
    this.filteredExtLinks = this.allExtLinks.filter(r => r.page === "model");
    
    this.rankedExtLinks = this.sortByKey(this.filteredExtLinks, 'order');

     return this.rankedExtLinks;
   }  

   getExtArticleLinks(): LinkModel[] { 
    
    this.filteredExtLinks = this.allExtLinks.filter(r => r.page === "article");
    
    this.rankedExtLinks = this.sortByKey(this.filteredExtLinks, 'order');

     return this.rankedExtLinks;
   }  
   
   sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

}

