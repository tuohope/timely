export interface TimelyEvent{
  cost_display: number;
  uid: string;
  description_short: string;
  instance: number;
  calendar_id: number;
  start_datetime: Date;
  end_datetime: Date;
  cost_type: string;
  timezone: string;
  id: number;
  title: string;
  url: string;
  images: EventImage[];
}

export interface EventImageDetail {
  width: number;
  url: string;
  height: number;
}

export interface ImageSizes{
  small: EventImageDetail;
  thumbnail: EventImageDetail;
  medium: EventImageDetail;
  full: EventImageDetail;
}

export interface EventImage {
  id: number;
  title: string;
  sizes: ImageSizes;
}

