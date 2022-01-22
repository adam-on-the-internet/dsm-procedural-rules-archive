import {Component, Input} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";

@Component({
  selector: 'app-version-title',
  templateUrl: './version-title.component.html',
  styleUrls: ['./version-title.component.css']
})
export class VersionTitleComponent {
  @Input() public version: RulesVersion;

  public get action(): string {
    return this.version.versionNumber === 1 ? "adopted" : "amended";
  }

  public get number(): string {
    return this.version.versionNumber.toString();
  }

  public get month(): string {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[this.version.amendmentMonth - 1];
  }

  public get day(): string {
    return this.version.amendmentDay.toString();
  }

  public get year(): string {
    return this.version.amendmentYear.toString();
  }
}
