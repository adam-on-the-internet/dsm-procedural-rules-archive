import {Component, Input, OnInit} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";
import {StringHelper} from "../../utilities/string.util";
import {RULES_VERSIONS} from "../../constants/version.constants";

@Component({
  selector: 'app-version-display',
  templateUrl: './version-display.component.html',
  styleUrls: ['./version-display.component.css']
})
export class VersionDisplayComponent implements OnInit {
  @Input() version: RulesVersion = null;

  private get maxVersion(): number {
    let maxVersion = 1;
    RULES_VERSIONS.forEach((version) => {
      if (version.versionNumber > maxVersion) {
        maxVersion = version.versionNumber;
      }
    });
    return maxVersion;
  }

  public get nextIsAvailable(): boolean {
    return this.version.versionNumber < this.maxVersion;
  }

  public get previousIsAvailable(): boolean {
    const minVersion = 1;
    return this.version.versionNumber > minVersion;
  }

  public get infoPath(): string {
    const year = this.version.amendmentYear;
    const paddedDay = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentDay);
    const paddedMonth = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentMonth);
    return `assets/rules-archive/${year}_${paddedMonth}_${paddedDay}/info.md`;
  }

  public disclaimerMarkdownPath = `assets/disclaimer.md`;
  public missingInfoMarkdownPath = `assets/missing-info.md`;

  constructor() {
  }

  ngOnInit(): void {
  }

}
