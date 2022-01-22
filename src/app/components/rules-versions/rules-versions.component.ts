import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../services/general/settings.service";
import {RULES_VERSIONS} from "../../constants/version.constants";
import {RulesVersion} from "../../models/RulesVersion.model";

@Component({
  selector: 'app-rules-versions',
  templateUrl: './rules-versions.component.html',
  styleUrls: ['./rules-versions.component.css']
})
export class RulesVersionsComponent implements OnInit {
  public VERSIONS: RulesVersion[] = RULES_VERSIONS;

  constructor(
    private settingsService: SettingsService,
  ) {
  }

  ngOnInit(): void {
  }

}
