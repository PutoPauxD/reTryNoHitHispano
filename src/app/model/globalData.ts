export interface globalData {
  gameList: Title,
  game: Game
}

interface Title {
  title: String,
  games?: Array<String>
}

interface Game {
  titleImg: String,
  bckImg: String,
  runs: Array<Run>,
  noHitterSection: Array<NoHitters>,
  ruleSection: RuleSection,
  submitSection: SubmitSectionModel
}

interface Run {
  runTitle: String,
  runDescription: String
}

interface NoHitters {
  noHitterSectionRun: String,
  noHitterSectionNoHitterUsers: Array<String>
}

interface RuleSection {
  ruleTitle: String,
  ruleBckImg: String,
  generalRules: Rules
}

interface Rules {
  title: String,
  rules: Array<String> | String
}

interface SubmitSectionModel {
  submitTitle: String,
  submitBckImg: String,
  submitDescription: String,
  submitBackendURL: String,
  SubmitVerifier: VerifierModel
}

interface VerifierModel {
  VerifierTitle: String,
  VerifiersUsers: Array<Verifiers>
}

interface Verifiers {
  verifierProfilePicture: String,
  verifierUsername: String
}
