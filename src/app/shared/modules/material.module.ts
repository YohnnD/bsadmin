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
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule,
    MatSelectModule,
} from '@angular/material';
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

/*Covalent*/
import { CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,

    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule
         } from '@covalent/core';

import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';

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
      MatRadioModule,
      MatSelectModule,

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
        MatRadioModule,
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
