import {Injectable} from '@angular/core';
import {RulesVersion} from "../models/RulesVersion.model";
import {RULES_VERSIONS} from "../constants/version.constants";

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  public get allVersions(): RulesVersion[] {
    return RULES_VERSIONS;
  }

  public get currentVersion(): RulesVersion {
    return this.allVersions.find((version) => {
      return version.current;
    });
  }

  public get maxVersion(): number {
    let maxVersion = 1;
    this.allVersions.forEach((version) => {
      if (version.versionNumber > maxVersion) {
        maxVersion = version.versionNumber;
      }
    });
    return maxVersion;
  }

  public getVersionByDayMonthYear(day: number, month: number, year: number): RulesVersion {
    return this.allVersions.find((version) => {
      return version.amendmentDay === day && version.amendmentMonth === month &&
        version.amendmentYear === year;
    });
  }

  public getVersionByNumber(versionNumber: number): RulesVersion {
    return this.allVersions.find((version) => {
      return version.versionNumber === versionNumber;
    });
  }
}
