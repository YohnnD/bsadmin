import {NgModule} from '@angular/core';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule,
    MatSelectModule
} from '@angular/material';
import {MatTableModule} from "@angular/material/table";


/*Covalent*/
import { CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule
         } from '@covalent/core';



@NgModule({
  declarations: [],
  imports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSliderModule,
      MatProgressBarModule,
      MatAutocompleteModule,
      MatInputModule,
      MatGridListModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatListModule,
      MatDialogModule,
      MatToolbarModule,
      MatSidenavModule,
      MatChipsModule,

      /*Covalent */
      CovalentCommonModule,
      CovalentLayoutModule,
      CovalentMediaModule,
      CovalentExpansionPanelModule,
      CovalentStepsModule,
      CovalentDialogsModule,
      CovalentLoadingModule,
      CovalentSearchModule,
      CovalentPagingModule,
      CovalentNotificationsModule,
      CovalentMenuModule,
      CovalentDataTableModule,
      CovalentMessageModule,
      MatSelectModule
  ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSliderModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatGridListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatListModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatChipsModule,
        MatTableModule,
        MatSelectModule,

        /*Covalent */
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentExpansionPanelModule,
        CovalentStepsModule,
        CovalentDialogsModule,
        CovalentLoadingModule,
        CovalentSearchModule,
        CovalentPagingModule,
        CovalentNotificationsModule,
        CovalentMenuModule,
        CovalentDataTableModule,
        CovalentMessageModule,
  ]
})
export class MaterialModule { }
