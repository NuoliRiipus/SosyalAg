import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Devam etmek istediğine emin misin? Kaydetmediğin tüm değişikler kaybolacak!!!')
        }
        return true;
    }
}