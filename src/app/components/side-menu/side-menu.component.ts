import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

import { SideMenuService } from 'src/app/services/side-menu.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit, OnDestroy {
    public show_menu: boolean = false;

    private side_menu_sub?: Subscription;

    constructor(
        private sideMenuService: SideMenuService,
        private scrollService: ScrollService,
    ) { }

    public ngOnInit(): void {
        this.side_menu_sub = this.sideMenuService
            .menuState()
            .subscribe(menu_state => {
                this.show_menu = menu_state
            });
    }

    public ngOnDestroy(): void {
        this.side_menu_sub?.unsubscribe();
    }

    public closeMenu(): void {
        this.sideMenuService.closeMenu();
    }

    public scrollTo(anchor: string): void {
        this.closeMenu();
        this.scrollService.scrollToAnchor(anchor);
    }
}
