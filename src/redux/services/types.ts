export interface Song {
  artists: Artist[];
  highlightsurls: HighlightsUrls;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  properties: HighlightsUrls;
  share: Share;
  subtitle: string;
  title: string;
  type: string;
  url: string;
}

interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

interface HighlightsUrls {}

interface Hub {
  actions: Action[];
  displayname: string;
  explicit: boolean;
  image: string;
  options: Option[];
  type: string;
}

interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

enum Name {
  Apple = "apple",
  HubApplemusicDeeplink = "hub:applemusic:deeplink",
}

enum ActionType {
  Applemusicopen = "applemusicopen",
  Applemusicplay = "applemusicplay",
  URI = "uri",
}

interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: string;
  colouroverflowimage: boolean;
  image: string;
  listcaption: string;
  overflowimage: string;
  providername: string;
  type: string;
}

interface Beacondata {
  providername: string;
  type: string;
}

interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}
