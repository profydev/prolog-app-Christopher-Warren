export interface Landing {
  meta: Meta;
  sections: Section[];
}

export interface Meta {
  title: string;
  description: string;
  image: string;
}

export interface Section {
  sectionType: string;
  theme: string;
  title: string;
  subtitle?: string;
  image?: Image;
  companies?: Company[];
  testimonials?: Testimonial[];
}

export interface Company {
  name: string;
  logo: string;
}

export interface Image {
  src: string;
  width: number;
  height: number;
}

export interface Testimonial {
  title: string;
  text: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userImage: Image;
}
