import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
} from '@angular/material';

const modules = [
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {

}
