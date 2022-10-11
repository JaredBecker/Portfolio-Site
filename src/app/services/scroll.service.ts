import { ViewportScroller } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    constructor(
        private viewportScroller: ViewportScroller,
    ) { }

    public scrollToAnchor(anchor: string): void {
        this.viewportScroller.scrollToAnchor(anchor);
    }
}
