import { Component } from '@angular/core';
import { SearchFilterComponent } from "../../components/search-filter/search-filter.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SearchFilterComponent]
})
export class HomeComponent {

}
