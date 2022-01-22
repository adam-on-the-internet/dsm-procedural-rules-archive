import {Component, Input, OnInit} from '@angular/core';
import {RulesVersion} from "../../models/RulesVersion.model";

@Component({
  selector: 'app-version-display',
  templateUrl: './version-display.component.html',
  styleUrls: ['./version-display.component.css']
})
export class VersionDisplayComponent implements OnInit {
  @Input() version: RulesVersion = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
