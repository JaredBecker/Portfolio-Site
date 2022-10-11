import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SideMenuService {
    private show_menu = new BehaviorSubject<boolean>(false);
    private padding_ref?: null | (() => void)

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    public toggleMenu(): void {
        this.show_menu.next(!this.show_menu.getValue());
    }

    public openMenu(): void {
        this.show_menu.next(true);

        if (!this.padding_ref) {
            this.padding_ref = this.adjustPadding();
        }
    }

    public closeMenu(): void {
        this.show_menu.next(false);

        if (this.padding_ref) {
            this.padding_ref();
            this.padding_ref = null;
        }
    }

    public menuState(): Observable<boolean> {
        return this.show_menu.asObservable();
    }

    private adjustPadding(): () => void {
        const scrollbar_width = Math.abs(window.innerWidth - this.document.documentElement.clientWidth);
        const body = this.document.body;
        const body_style = this.document.body.style;
        const { overflow, paddingRight } = body_style;

        if (scrollbar_width > 0) {
            const actual_padding = parseFloat(window.getComputedStyle(body).paddingRight);
            body_style.paddingRight = `${actual_padding + scrollbar_width}px`;
        }

        body_style.overflow = 'hidden';

        return () => {
            if (scrollbar_width > 0) {
                body_style.paddingRight = paddingRight
            }

            body_style.overflow = overflow;
        }
    }
}
