export interface RulesVersion {
  versionNumber: number;
  amendmentDay: number;
  amendmentMonth: number;
  amendmentYear: number;
  showNotes?: boolean;
  current?: boolean;
  future?: boolean;
  missingInfo?: boolean;
  researchInProgress?: boolean;
  transcriptAvailable?: boolean;
  appendixAvailable?: boolean;
  amendmentAvailable?: boolean;
}
