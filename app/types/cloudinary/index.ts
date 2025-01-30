export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: "image" | "video" | "raw";
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: "active" | "deleted" | "disabled";
  access_mode: "public" | "authenticated";
  access_control: any | null;
  etag: string;
  created_by: Record<string, any>; // Si el objeto tiene más detalles, define un tipo específico
  uploaded_by: Record<string, any>; // Lo mismo aquí
};

export type CloudinaryImageBody = {
  total_count: number;
  time: number;
  resources: CloudinaryResource[];
};
