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
        name: 'Minnesota COVID-19 Model',
        title: 'Github repo for U of M Model 3',
        page: 'model',
        order: 2,
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
        name: 'MN Dept of Health COVID-19 Situation Update',
        title: 'Daily numbers for tests, positive cases, hospitalizations, deaths and more',
        page: 'article',
        order: 1,
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
        name: 'IMHE - Minnesota Projection',
        title: 'IMHE at University of Washington',
        page: 'article',
        order: 2,
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
        order: 3,
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

