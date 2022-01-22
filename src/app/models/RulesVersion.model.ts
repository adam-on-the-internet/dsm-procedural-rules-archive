export interface RulesVersion {
  versionNumber: number;
  amendmentDay: number;
  amendmentMonth: number;
  amendmentYear: number;
  showNotes?: boolean;
  current?: boolean;
  missingInfo?: boolean;
}
