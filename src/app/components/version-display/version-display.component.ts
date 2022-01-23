import {Component, Input} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";
import {StringHelper} from "../../utilities/string.util";

@Component({
  selector: 'app-version-display',
  templateUrl: './version-display.component.html',
  styleUrls: ['./version-display.component.css']
})
export class VersionDisplayComponent {
  @Input() version: RulesVersion = null;

  public get infoPath(): string {
    const year = this.version.amendmentYear;
    const paddedDay = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentDay);
    const paddedMonth = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentMonth);
    return `assets/rules-archive/${year}_${paddedMonth}_${paddedDay}/info.md`;
  }

  public disclaimerMarkdownPath = `assets/disclaimer.md`;
  public missingInfoMarkdownPath = `assets/missing-info.md`;

}
