import {Component} from '@angular/core';
import {RULES_VERSIONS} from "../../constants/version.constants";
import {RulesVersion} from "../../models/RulesVersion.model";

@Component({
  selector: 'app-rules-versions',
  templateUrl: './rules-versions.component.html',
  styleUrls: ['./rules-versions.component.css']
})
export class RulesVersionsComponent {
  public VERSIONS: RulesVersion[] = RULES_VERSIONS;
}
