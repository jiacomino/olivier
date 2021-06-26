import { StepperOrientation } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-price-utility',
  templateUrl: './price-utility.component.html',
  styleUrls: ['./price-utility.component.scss']
})
export class PriceUtilityComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper') stepper: MatStepper;
  isLinear = true;
  isInputError = true;
  refFormGroup: FormGroup;
  zoneFormGroup: FormGroup;
  targetInput = 'input0';
  refBarCodePattern = "[0-9]{3}";
  zoneCodePattern = "[0-9]{3}";
  stepperOrientation: Observable<StepperOrientation>;
  msgPriceZone = "Veuillez définir un prix de vente";

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.initStepperForm();
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  initStepperForm() {
    this.refFormGroup = this.formBuilder.group({
      reference: ['', [Validators.required, Validators.pattern(this.refBarCodePattern)]]
    });
    this.zoneFormGroup = this.formBuilder.group({
      zone: ['', [Validators.required, Validators.pattern(this.zoneCodePattern)]]
    });
  }

  onChange(event: any) {
    let index = String(event.selectedIndex);
    this.targetInput = 'input' + index;
    this.setFocus();
  }

  openSuccessSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }

  openErrorSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  onCheckRef() {
    if (this.refFormGroup.get('reference').invalid) {
      this.openErrorSnackBar('Echec scan de la référence', '');
    } else {
      console.log("affiche input " + this.stepper.selectedIndex);
    }
  }

  resetStepper(index: number) {
    if (this.zoneFormGroup.get('zone').valid) {
      this.stepper.selectedIndex = index;
      this.openSuccessSnackBar('Enregistrement Ok', '');
      this.initStepperForm();
    } else {
      // Définir gestion erreur scan zone
      console.log("error form");
    }
  }

  setFocus() {
    let targetCurrentInput = document.getElementById(this.targetInput);
    setTimeout(function waitTargetElem() {
      if (document.body.contains(targetCurrentInput)) {
        targetCurrentInput.focus();
      } else {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }
}
