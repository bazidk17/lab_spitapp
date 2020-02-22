import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() { }
   ngOnInit() {
  }


  public technologies: Array<{ name: string, description: string }> = [
    {
      name: 'Vission',
      description: 'To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.',

    },
    {
      name: 'Mission',
      description: 'Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare the participants to lead lives of personal integrity and civic responsibility in a global society.<br/>Promote an Educational Environment that combines academic study with the excitement of intellectual curiosity for engineers of tomorrow.<br/>Enhance career opportunities for students through Industry-Institute interaction, value-added courses and projects in cutting edge technology.<br/>Inculcate Entrepreneurial mindset in students to make them job creators.<br/>Focus on applied research to create next generation technologies.',
    },


  ];


 
}
