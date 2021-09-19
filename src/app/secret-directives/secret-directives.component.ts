import { Component } from "@angular/core";

@Component({
    templateUrl: "./secret-directives.component.html",
    selector: 'app-secret-directives',
    styleUrls: [
        './secret-directives.component.css'
    ]
})

export default class SecretDirectives {
    items: Date[] = [];
    isShowingDetails = false;
    toggleDetailView() {
        this.isShowingDetails = !this.isShowingDetails;
        this.items.push(new Date(null));
        // console.log(this.items)
    }

    getColor() {
        if(this.items.length > 5) {
            return 'blue';
        }
    }
}