import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroSectionComponent } from '@components/intro-section/intro-section.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { SkillsSectionComponent } from '@components/skills-section/skills-section.component';
import { ExperienceComponent } from '@components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroSectionComponent,
        NavbarComponent,
        SkillsSectionComponent,
        ExperienceComponent,
        FooterComponent,
        GetInTouchComponent,
        SideMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
