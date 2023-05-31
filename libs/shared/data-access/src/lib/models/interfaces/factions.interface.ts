export interface Faction {
  description: string;
  headquarters: string;
  isRecruiting: boolean;
  name: string;
  symbol: string;
  traits: FactionTrait[];
  initials?: string;
}

export interface FactionTrait {
  description: string;
  name: string;
  symbol: string;
}
