interface IExperience {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
  logo?: string;
  fullTitle?: string;
  overview?: string;
  achievements?: {
    title: string;
    details: string[];
  }[];
  businessImpact?: string[];
  skills?: string[];
}

export { IExperience };
