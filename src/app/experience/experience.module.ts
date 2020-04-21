import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { ExperienceTimelineComponent } from './experience-timeline/experience-timeline.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    imports: [ FontAwesomeModule ],
    declarations: [ ExperienceComponent, ExperienceTimelineComponent ],
    exports: [ ExperienceComponent ]
})

export class ExperienceModule { }