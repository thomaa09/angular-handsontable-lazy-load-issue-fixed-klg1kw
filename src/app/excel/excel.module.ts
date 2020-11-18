import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheetModule } from './sheet';

@NgModule({
	imports: [
		CommonModule,
		SheetModule.forRoot()
	],
	providers: [
	],
	exports: [
		CommonModule,
		SheetModule
	]
})
export class ExcelModule {
}