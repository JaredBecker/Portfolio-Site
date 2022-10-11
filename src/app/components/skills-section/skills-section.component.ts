import { Component } from '@angular/core';
import { Skills } from 'src/app/types/skills.interface';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
})
export class SkillsSectionComponent {
    public skills: Skills[] = [
        { icon: 'fa-brands fa-html5', value: 'HTML' },
        { icon: 'fa-brands fa-css3-alt', value: 'CSS' },
        { icon: 'fa-brands fa-sass', value: 'SASS' },
        { icon: 'fa-brands fa-square-js', value: 'TypeScript' },
        { icon: 'fa-brands fa-angular', value: 'Angular' },
        { icon: 'fa-brands fa-php', value: 'PHP' },
        { icon: 'fa-solid fa-database', value: 'MySQL' },
        { icon: 'fa-brands fa-bootstrap', value: 'Bootstrap' },
    ];
}
