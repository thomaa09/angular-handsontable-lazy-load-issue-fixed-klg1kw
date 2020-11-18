import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotTableModule } from '@handsontable/angular';

import { BlankSheetComponent } from './components/blank-sheet/blank-sheet.component';

@NgModule({
    imports: [
        CommonModule,
        HotTableModule.forRoot()
    ],
    declarations: [
        BlankSheetComponent
    ],
    exports: [
        CommonModule,
        HotTableModule,
        BlankSheetComponent
    ]
})
export class SheetModule {
    
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SheetModule,
            providers: [
            ]
        };
    }
}