import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs/hammer';
import { MatGridListModule,MatAutocompleteModule,
        MatButtonModule,MatButtonToggleModule,
        MatCardModule,MatCheckboxModule,
        MatChipsModule,MatDatepickerModule,
        MatDialogModule,MatExpansionModule,
        MatIconModule,MatInputModule,
        MatListModule,MatMenuModule,
        MatNativeDateModule,MatPaginatorModule,
        MatProgressBarModule,MatProgressSpinnerModule,
        MatRadioModule,MatRippleModule,
        MatSelectModule,MatSidenavModule,
        MatSliderModule,MatSlideToggleModule,
        MatSnackBarModule,MatSortModule,
        MatTableModule,MatTabsModule,
        MatToolbarModule,MatTooltipModule,
        MatStepperModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
