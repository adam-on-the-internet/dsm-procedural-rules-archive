import {Component} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";
import {VersionService} from "../../services/version.service";

@Component({
  selector: 'app-rules-versions',
  templateUrl: './rules-versions.component.html',
  styleUrls: ['./rules-versions.component.css']
})
export class RulesVersionsComponent {
  public get allVersions(): RulesVersion[] {
    return this.versionService.allVersions;
  };

  constructor(
    private versionService: VersionService,
  ) {
  }
}
