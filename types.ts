
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  gpa: string;
}

export interface ProfileData {
  name: string;
  birthDate: string;
  phone: string;
  education: Education;
  experiences: Experience[];
}
