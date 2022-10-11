import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { SideMenuService } from 'src/app/services/side-menu.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    constructor(
        private sideMenuService: SideMenuService,
        private scrollService: ScrollService
    ) { }

    public showSideMenu(): void {
        this.sideMenuService.openMenu();
    }

    public scrollTo(anchor: string): void {
        this.scrollService.scrollToAnchor(anchor);
    }
}
