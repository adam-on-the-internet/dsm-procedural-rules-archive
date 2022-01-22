export interface RulesVersion {
  versionNumber: number;
  amendmentDay: number;
  amendmentMonth: number;
  amendmentYear: number;
  showNotes?: boolean;
  current?: boolean;
  future?: boolean;
  missingInfo?: boolean;
}
