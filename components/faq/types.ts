export interface FAQItemData {
  id: number;
  title: string;
  answer: string;
}

export interface FAQCategoryData {
  id: string;
  name: string;
  items: FAQItemData[];
}
