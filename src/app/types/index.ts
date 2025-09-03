export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Domain {
  title: string;
  color: string;
  formats: string[];
  description: string;
}

export interface DataCockpitFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DataCockpitWorkflow {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PyRunFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PyRunIntegration {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Framework {
  name: string;
  icon: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
} 