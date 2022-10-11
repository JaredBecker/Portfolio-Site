import { Component } from '@angular/core';
import { ExperienceSection } from 'src/app/types/experience-section.interface';

import { EXPERIENCE } from 'src/app/constants/experience';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
})
export class ExperienceComponent {
    public work_experience: ExperienceSection[];

    constructor() {
        this.work_experience = EXPERIENCE;
    }
}
