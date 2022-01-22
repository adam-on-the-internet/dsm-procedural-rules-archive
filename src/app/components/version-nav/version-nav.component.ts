import {Component, Input} from '@angular/core';
import {RULES_VERSIONS} from "../../constants/version.constants";
import {StringHelper} from "../../utilities/string.util";

@Component({
  selector: 'app-version-nav',
  templateUrl: './version-nav.component.html',
  styleUrls: ['./version-nav.component.css']
})
export class VersionNavComponent {
  @Input() public version = null;

  private get datePiece(): string {
    const day = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentDay);
    const month = StringHelper.zeroPadNumberToStringOfLengthTwo(this.version.amendmentMonth);
    const year = this.version.amendmentYear;
    return `${year}_${month}_${day}`;
  }

  public get versionTranscriptUrl(): string {
    return `/#/view/rules-archive~${this.datePiece}~transcription`;
  }

  public get versionAmendmentUrl(): string {
    return `/#/view/rules-archive~${this.datePiece}~amendment`;
  }

  public get versionAppendixUrl(): string {
    return `/#/view/rules-archive~${this.datePiece}~appendix`;
  }

  public get versionOverviewUrl(): string {
    return this.getVersionOverviewUrl(this.version.versionNumber);
  }

  public get previousVersionUrl(): string {
    const previousVersionNumber = this.version.versionNumber - 1;
    return this.getVersionOverviewUrl(previousVersionNumber);
  }

  public get nextVersionUrl(): string {
    const nextVersionNumber = this.version.versionNumber + 1;
    return this.getVersionOverviewUrl(nextVersionNumber);
  }

  public get nextIsAvailable(): boolean {
    return this.version.versionNumber < this.maxVersion;
  }

  public get previousIsAvailable(): boolean {
    const minVersion = 1;
    return this.version.versionNumber > minVersion;
  }

  private get maxVersion(): number {
    let maxVersion = 1;
    RULES_VERSIONS.forEach((version) => {
      if (version.versionNumber > maxVersion) {
        maxVersion = version.versionNumber;
      }
    });
    return maxVersion;
  }

  private getVersionOverviewUrl(versionNumber: number) {
    return `#/version/${versionNumber}`;
  }
}
