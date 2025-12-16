export type NoteCategory = "Work and Study" | "Life" | "Health and Wellness";
export type SettingServices =
  | "aboutUs"
  | "customerService"
  | "privacyPolicy"
  | "userAgreement";

export const CATEGORIES: NoteCategory[] = [
  "Work and Study",
  "Life",
  "Health and Wellness",
];

export interface SETTINGS {
  name: string;
  icon: string;
}

export const Settings: Record<string, SETTINGS> = {
  aboutUs: {
    name: "About Us",
    icon: "../../assets/icons/settingTab/setting-about-us.png",
  },
  customerService: {
    name: "Online Customer Service",
    icon: "../../assets/icons/settingTab/setting-online-customer.png",
  },
  privacyPolicy: {
    name: "Privacy Policy",
    icon: "../../assets/icons/settingTab/setting-privacy-policy.png",
  },
  userAgreement: {
    name: "User Agreement",
    icon: "../../assets/icons/settingTab/setting-user-agreement.png",
  },
};

export interface Note {
  id: string;
  title: string;
  content: string;
  category: NoteCategory;
  isFavorite: boolean;
  createdAt: number;
  updatedAt?: number;
}

export type NewNotePayload = Omit<
  Note,
  "id" | "createdAt" | "updatedAt" | "isFavorite" | "title"
>;

// Payload for updating a note; all fields optional except id
export type UpdateNotePayload = Partial<Omit<Note, "id" | "createdAt">> & {
  id: string;
};
