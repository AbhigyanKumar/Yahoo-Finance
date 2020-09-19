// package: 
// file: src/finance.proto

import * as jspb from "google-protobuf";

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getQuotetype(): Message.QuoteMap[keyof Message.QuoteMap];
  setQuotetype(value: Message.QuoteMap[keyof Message.QuoteMap]): void;

  getMarkethours(): Message.MarketHoursTypeMap[keyof Message.MarketHoursTypeMap];
  setMarkethours(value: Message.MarketHoursTypeMap[keyof Message.MarketHoursTypeMap]): void;

  getChangepercent(): number;
  setChangepercent(value: number): void;

  getDayvolume(): number;
  setDayvolume(value: number): void;

  getDayhigh(): number;
  setDayhigh(value: number): void;

  getDaylow(): number;
  setDaylow(value: number): void;

  getChange(): number;
  setChange(value: number): void;

  getShortname(): string;
  setShortname(value: string): void;

  getExpiredate(): number;
  setExpiredate(value: number): void;

  getOpenprice(): number;
  setOpenprice(value: number): void;

  getPreviousclose(): number;
  setPreviousclose(value: number): void;

  getStrikeprice(): number;
  setStrikeprice(value: number): void;

  getUnderlyingsymbol(): string;
  setUnderlyingsymbol(value: string): void;

  getOpeninterest(): number;
  setOpeninterest(value: number): void;

  getOptionstype(): Message.OptionTypeMap[keyof Message.OptionTypeMap];
  setOptionstype(value: Message.OptionTypeMap[keyof Message.OptionTypeMap]): void;

  getMinioption(): number;
  setMinioption(value: number): void;

  getLastsize(): number;
  setLastsize(value: number): void;

  getBid(): number;
  setBid(value: number): void;

  getBidsize(): number;
  setBidsize(value: number): void;

  getAsk(): number;
  setAsk(value: number): void;

  getAsksize(): number;
  setAsksize(value: number): void;

  getPricehint(): number;
  setPricehint(value: number): void;

  getVol24hr(): number;
  setVol24hr(value: number): void;

  getVolallcurrencies(): number;
  setVolallcurrencies(value: number): void;

  getFromcurrency(): string;
  setFromcurrency(value: string): void;

  getLastmarket(): string;
  setLastmarket(value: string): void;

  getCirculatingsupply(): number;
  setCirculatingsupply(value: number): void;

  getMarketcap(): number;
  setMarketcap(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    price: number,
    time: number,
    currency: string,
    exchange: string,
    quotetype: Message.QuoteMap[keyof Message.QuoteMap],
    markethours: Message.MarketHoursTypeMap[keyof Message.MarketHoursTypeMap],
    changepercent: number,
    dayvolume: number,
    dayhigh: number,
    daylow: number,
    change: number,
    shortname: string,
    expiredate: number,
    openprice: number,
    previousclose: number,
    strikeprice: number,
    underlyingsymbol: string,
    openinterest: number,
    optionstype: Message.OptionTypeMap[keyof Message.OptionTypeMap],
    minioption: number,
    lastsize: number,
    bid: number,
    bidsize: number,
    ask: number,
    asksize: number,
    pricehint: number,
    vol24hr: number,
    volallcurrencies: number,
    fromcurrency: string,
    lastmarket: string,
    circulatingsupply: number,
    marketcap: number,
  }

  export interface QuoteMap {
    NONE: 0;
    ALTSYMBOL: 5;
    HEARTBEAT: 7;
    EQUITY: 8;
    INDEX: 9;
    MUTUALFUND: 11;
    MONEYMARKET: 12;
    OPTION: 13;
    CURRENCY: 14;
    WARRANT: 15;
    BOND: 17;
    FUTURE: 18;
    ETF: 20;
    COMMODITY: 23;
    ECNQUOTE: 28;
    CRYPTOCURRENCY: 41;
    INDICATOR: 42;
    INDUSTRY: 1000;
  }

  export const Quote: QuoteMap;

  export interface OptionTypeMap {
    CALL: 0;
    PUT: 1;
  }

  export const OptionType: OptionTypeMap;

  export interface MarketHoursTypeMap {
    PRE_MARKET: 0;
    REGULAR_MARKET: 1;
    POST_MARKET: 2;
    EXTENDED_HOURS_MARKET: 3;
  }

  export const MarketHoursType: MarketHoursTypeMap;
}

