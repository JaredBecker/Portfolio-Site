import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { SideMenuService } from './services/side-menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public block_scroll: boolean = false;

    private side_menu_sub?: Subscription;

    constructor(
        private sideMenuService: SideMenuService,
    ) { }

    public ngOnInit(): void {
        this.side_menu_sub = this.sideMenuService
            .menuState()
            .subscribe(menu_state => {
                this.block_scroll = menu_state;
            })
    }

    public ngOnDestroy(): void {
        this.side_menu_sub?.unsubscribe();
    }
}
