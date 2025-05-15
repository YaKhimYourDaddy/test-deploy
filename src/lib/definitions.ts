export type Filter = {
  value: string;
  label: string;
  items: {
    label: string;
    value: string;
  }[];
};

export type Tab = {
  value: string;
  label: string;
  filters: Filter[];
};

export interface Property {
  title: string;
  description: string;
  type: string;
  price: number;
  area: number;
  address: string;
  images: string[];
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  property_id: string;
  content: string;
  created_at: string;
}
