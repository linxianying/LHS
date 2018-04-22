import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, name: string}>;
  isLogin:boolean;
  username:string;
  

  slides = [
    {
      title: "National University",
      description: "NUS is an autonomous research university in Singapore. Founded in 1905 as a medical college, it is the oldest institute of higher learning in Singapore, as well as the largest university in the country in terms of student enrollment and curriculum offered. ",
      image: "assets/imgs/nus.png",
    },
    {
      title: "The University of Oxford",
      description: "The University of Oxford is a collegiate research university located in Oxford, England. It has no known date of foundation, but there is evidence of teaching as far back as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
      image: "assets/imgs/oxford.png",
    },
    {
      title: "Howard University",
      description: "Howard is a federally chartered, private, coeducational, nonsectarian, historically black university in Washington. It is recognized by the Carnegie Foundation as a research university with high research activity and is accredited by the Middle States Commission on Higher Education.",
      image: "assets/imgs/howard.png",
    },
    {
      title: "University of Otago",
      description: "Otāgo is a collegiate university located in Dunedin, Otago, New Zealand. It scores highly for average research quality, and in 2006 was second in New Zealand only to the University of Auckland in the number of A-rated academic researchers it employs.",
      image: "assets/imgs/otago.png",
    },
    {
      title: "University of Toronto",
      description: "Toronto is a public research university in Toronto, Ontario, Canada on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in the colony of Upper Canada.",
      image: "assets/imgs/toronto.png",
    }
  ];

  constructor(public navCtrl: NavController, 
				public navParams: NavParams) 
  {
		this.pages = [];
    this.username = navParams.get('username');
		if(sessionStorage.getItem("isLogin") === "true")
	    {
	      this.isLogin = true;
	    }else{
	      this.isLogin = false;
	    }
		
		this.pages.push({title: 'LoginPage', name: 'LoginPage'});
		this.pages.push({title: 'RegisterPage', name: 'RegisterPage'});
		
  }
  ionViewDidLoad() 
  {
	  console.log('ionViewDidLoad home page');
	
  }

  ionViewWillEnter() 
  {
    console.log('ionViewWillEnter home page');
  
  }
}