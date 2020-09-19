"use strict";
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.Message.MarketHoursType', null, global);
goog.exportSymbol('proto.Message.OptionType', null, global);
goog.exportSymbol('proto.Message.Quote', null, global);
proto.Message = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.Message.displayName = 'proto.Message';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.Message.prototype.toObject = function (opt_includeInstance) {
        return proto.Message.toObject(opt_includeInstance, this);
    };
    proto.Message.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, ""),
            price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
            time: jspb.Message.getFieldWithDefault(msg, 3, 0),
            currency: jspb.Message.getFieldWithDefault(msg, 4, ""),
            exchange: jspb.Message.getFieldWithDefault(msg, 5, ""),
            quotetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
            markethours: jspb.Message.getFieldWithDefault(msg, 7, 0),
            changepercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
            dayvolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
            dayhigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
            daylow: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
            change: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
            shortname: jspb.Message.getFieldWithDefault(msg, 13, ""),
            expiredate: jspb.Message.getFieldWithDefault(msg, 14, 0),
            openprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
            previousclose: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
            strikeprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
            underlyingsymbol: jspb.Message.getFieldWithDefault(msg, 18, ""),
            openinterest: jspb.Message.getFieldWithDefault(msg, 19, 0),
            optionstype: jspb.Message.getFieldWithDefault(msg, 20, 0),
            minioption: jspb.Message.getFieldWithDefault(msg, 21, 0),
            lastsize: jspb.Message.getFieldWithDefault(msg, 22, 0),
            bid: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
            bidsize: jspb.Message.getFieldWithDefault(msg, 24, 0),
            ask: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
            asksize: jspb.Message.getFieldWithDefault(msg, 26, 0),
            pricehint: jspb.Message.getFieldWithDefault(msg, 27, 0),
            vol24hr: jspb.Message.getFieldWithDefault(msg, 28, 0),
            volallcurrencies: jspb.Message.getFieldWithDefault(msg, 29, 0),
            fromcurrency: jspb.Message.getFieldWithDefault(msg, 30, ""),
            lastmarket: jspb.Message.getFieldWithDefault(msg, 31, ""),
            circulatingsupply: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
            marketcap: jspb.Message.getFloatingPointFieldWithDefault(msg, 33, 0.0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.Message.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.Message;
    return proto.Message.deserializeBinaryFromReader(msg, reader);
};
proto.Message.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setId(value);
                break;
            case 2:
                var value = (reader.readFloat());
                msg.setPrice(value);
                break;
            case 3:
                var value = (reader.readSint64());
                msg.setTime(value);
                break;
            case 4:
                var value = (reader.readString());
                msg.setCurrency(value);
                break;
            case 5:
                var value = (reader.readString());
                msg.setExchange(value);
                break;
            case 6:
                var value = (reader.readEnum());
                msg.setQuotetype(value);
                break;
            case 7:
                var value = (reader.readEnum());
                msg.setMarkethours(value);
                break;
            case 8:
                var value = (reader.readFloat());
                msg.setChangepercent(value);
                break;
            case 9:
                var value = (reader.readSint64());
                msg.setDayvolume(value);
                break;
            case 10:
                var value = (reader.readFloat());
                msg.setDayhigh(value);
                break;
            case 11:
                var value = (reader.readFloat());
                msg.setDaylow(value);
                break;
            case 12:
                var value = (reader.readFloat());
                msg.setChange(value);
                break;
            case 13:
                var value = (reader.readString());
                msg.setShortname(value);
                break;
            case 14:
                var value = (reader.readSint64());
                msg.setExpiredate(value);
                break;
            case 15:
                var value = (reader.readFloat());
                msg.setOpenprice(value);
                break;
            case 16:
                var value = (reader.readFloat());
                msg.setPreviousclose(value);
                break;
            case 17:
                var value = (reader.readFloat());
                msg.setStrikeprice(value);
                break;
            case 18:
                var value = (reader.readString());
                msg.setUnderlyingsymbol(value);
                break;
            case 19:
                var value = (reader.readSint64());
                msg.setOpeninterest(value);
                break;
            case 20:
                var value = (reader.readEnum());
                msg.setOptionstype(value);
                break;
            case 21:
                var value = (reader.readSint64());
                msg.setMinioption(value);
                break;
            case 22:
                var value = (reader.readSint64());
                msg.setLastsize(value);
                break;
            case 23:
                var value = (reader.readFloat());
                msg.setBid(value);
                break;
            case 24:
                var value = (reader.readSint64());
                msg.setBidsize(value);
                break;
            case 25:
                var value = (reader.readFloat());
                msg.setAsk(value);
                break;
            case 26:
                var value = (reader.readSint64());
                msg.setAsksize(value);
                break;
            case 27:
                var value = (reader.readSint64());
                msg.setPricehint(value);
                break;
            case 28:
                var value = (reader.readSint64());
                msg.setVol24hr(value);
                break;
            case 29:
                var value = (reader.readSint64());
                msg.setVolallcurrencies(value);
                break;
            case 30:
                var value = (reader.readString());
                msg.setFromcurrency(value);
                break;
            case 31:
                var value = (reader.readString());
                msg.setLastmarket(value);
                break;
            case 32:
                var value = (reader.readDouble());
                msg.setCirculatingsupply(value);
                break;
            case 33:
                var value = (reader.readDouble());
                msg.setMarketcap(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.Message.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.Message.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.Message.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getPrice();
    if (f !== 0.0) {
        writer.writeFloat(2, f);
    }
    f = message.getTime();
    if (f !== 0) {
        writer.writeSint64(3, f);
    }
    f = message.getCurrency();
    if (f.length > 0) {
        writer.writeString(4, f);
    }
    f = message.getExchange();
    if (f.length > 0) {
        writer.writeString(5, f);
    }
    f = message.getQuotetype();
    if (f !== 0.0) {
        writer.writeEnum(6, f);
    }
    f = message.getMarkethours();
    if (f !== 0.0) {
        writer.writeEnum(7, f);
    }
    f = message.getChangepercent();
    if (f !== 0.0) {
        writer.writeFloat(8, f);
    }
    f = message.getDayvolume();
    if (f !== 0) {
        writer.writeSint64(9, f);
    }
    f = message.getDayhigh();
    if (f !== 0.0) {
        writer.writeFloat(10, f);
    }
    f = message.getDaylow();
    if (f !== 0.0) {
        writer.writeFloat(11, f);
    }
    f = message.getChange();
    if (f !== 0.0) {
        writer.writeFloat(12, f);
    }
    f = message.getShortname();
    if (f.length > 0) {
        writer.writeString(13, f);
    }
    f = message.getExpiredate();
    if (f !== 0) {
        writer.writeSint64(14, f);
    }
    f = message.getOpenprice();
    if (f !== 0.0) {
        writer.writeFloat(15, f);
    }
    f = message.getPreviousclose();
    if (f !== 0.0) {
        writer.writeFloat(16, f);
    }
    f = message.getStrikeprice();
    if (f !== 0.0) {
        writer.writeFloat(17, f);
    }
    f = message.getUnderlyingsymbol();
    if (f.length > 0) {
        writer.writeString(18, f);
    }
    f = message.getOpeninterest();
    if (f !== 0) {
        writer.writeSint64(19, f);
    }
    f = message.getOptionstype();
    if (f !== 0.0) {
        writer.writeEnum(20, f);
    }
    f = message.getMinioption();
    if (f !== 0) {
        writer.writeSint64(21, f);
    }
    f = message.getLastsize();
    if (f !== 0) {
        writer.writeSint64(22, f);
    }
    f = message.getBid();
    if (f !== 0.0) {
        writer.writeFloat(23, f);
    }
    f = message.getBidsize();
    if (f !== 0) {
        writer.writeSint64(24, f);
    }
    f = message.getAsk();
    if (f !== 0.0) {
        writer.writeFloat(25, f);
    }
    f = message.getAsksize();
    if (f !== 0) {
        writer.writeSint64(26, f);
    }
    f = message.getPricehint();
    if (f !== 0) {
        writer.writeSint64(27, f);
    }
    f = message.getVol24hr();
    if (f !== 0) {
        writer.writeSint64(28, f);
    }
    f = message.getVolallcurrencies();
    if (f !== 0) {
        writer.writeSint64(29, f);
    }
    f = message.getFromcurrency();
    if (f.length > 0) {
        writer.writeString(30, f);
    }
    f = message.getLastmarket();
    if (f.length > 0) {
        writer.writeString(31, f);
    }
    f = message.getCirculatingsupply();
    if (f !== 0.0) {
        writer.writeDouble(32, f);
    }
    f = message.getMarketcap();
    if (f !== 0.0) {
        writer.writeDouble(33, f);
    }
};
proto.Message.Quote = {
    NONE: 0,
    ALTSYMBOL: 5,
    HEARTBEAT: 7,
    EQUITY: 8,
    INDEX: 9,
    MUTUALFUND: 11,
    MONEYMARKET: 12,
    OPTION: 13,
    CURRENCY: 14,
    WARRANT: 15,
    BOND: 17,
    FUTURE: 18,
    ETF: 20,
    COMMODITY: 23,
    ECNQUOTE: 28,
    CRYPTOCURRENCY: 41,
    INDICATOR: 42,
    INDUSTRY: 1000
};
proto.Message.OptionType = {
    CALL: 0,
    PUT: 1
};
proto.Message.MarketHoursType = {
    PRE_MARKET: 0,
    REGULAR_MARKET: 1,
    POST_MARKET: 2,
    EXTENDED_HOURS_MARKET: 3
};
proto.Message.prototype.getId = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.Message.prototype.setId = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
proto.Message.prototype.getPrice = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};
proto.Message.prototype.setPrice = function (value) {
    return jspb.Message.setProto3FloatField(this, 2, value);
};
proto.Message.prototype.getTime = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, 0));
};
proto.Message.prototype.setTime = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
proto.Message.prototype.getCurrency = function () {
    return (jspb.Message.getFieldWithDefault(this, 4, ""));
};
proto.Message.prototype.setCurrency = function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
};
proto.Message.prototype.getExchange = function () {
    return (jspb.Message.getFieldWithDefault(this, 5, ""));
};
proto.Message.prototype.setExchange = function (value) {
    return jspb.Message.setProto3StringField(this, 5, value);
};
proto.Message.prototype.getQuotetype = function () {
    return (jspb.Message.getFieldWithDefault(this, 6, 0));
};
proto.Message.prototype.setQuotetype = function (value) {
    return jspb.Message.setProto3EnumField(this, 6, value);
};
proto.Message.prototype.getMarkethours = function () {
    return (jspb.Message.getFieldWithDefault(this, 7, 0));
};
proto.Message.prototype.setMarkethours = function (value) {
    return jspb.Message.setProto3EnumField(this, 7, value);
};
proto.Message.prototype.getChangepercent = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};
proto.Message.prototype.setChangepercent = function (value) {
    return jspb.Message.setProto3FloatField(this, 8, value);
};
proto.Message.prototype.getDayvolume = function () {
    return (jspb.Message.getFieldWithDefault(this, 9, 0));
};
proto.Message.prototype.setDayvolume = function (value) {
    return jspb.Message.setProto3IntField(this, 9, value);
};
proto.Message.prototype.getDayhigh = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};
proto.Message.prototype.setDayhigh = function (value) {
    return jspb.Message.setProto3FloatField(this, 10, value);
};
proto.Message.prototype.getDaylow = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};
proto.Message.prototype.setDaylow = function (value) {
    return jspb.Message.setProto3FloatField(this, 11, value);
};
proto.Message.prototype.getChange = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};
proto.Message.prototype.setChange = function (value) {
    return jspb.Message.setProto3FloatField(this, 12, value);
};
proto.Message.prototype.getShortname = function () {
    return (jspb.Message.getFieldWithDefault(this, 13, ""));
};
proto.Message.prototype.setShortname = function (value) {
    return jspb.Message.setProto3StringField(this, 13, value);
};
proto.Message.prototype.getExpiredate = function () {
    return (jspb.Message.getFieldWithDefault(this, 14, 0));
};
proto.Message.prototype.setExpiredate = function (value) {
    return jspb.Message.setProto3IntField(this, 14, value);
};
proto.Message.prototype.getOpenprice = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};
proto.Message.prototype.setOpenprice = function (value) {
    return jspb.Message.setProto3FloatField(this, 15, value);
};
proto.Message.prototype.getPreviousclose = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};
proto.Message.prototype.setPreviousclose = function (value) {
    return jspb.Message.setProto3FloatField(this, 16, value);
};
proto.Message.prototype.getStrikeprice = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};
proto.Message.prototype.setStrikeprice = function (value) {
    return jspb.Message.setProto3FloatField(this, 17, value);
};
proto.Message.prototype.getUnderlyingsymbol = function () {
    return (jspb.Message.getFieldWithDefault(this, 18, ""));
};
proto.Message.prototype.setUnderlyingsymbol = function (value) {
    return jspb.Message.setProto3StringField(this, 18, value);
};
proto.Message.prototype.getOpeninterest = function () {
    return (jspb.Message.getFieldWithDefault(this, 19, 0));
};
proto.Message.prototype.setOpeninterest = function (value) {
    return jspb.Message.setProto3IntField(this, 19, value);
};
proto.Message.prototype.getOptionstype = function () {
    return (jspb.Message.getFieldWithDefault(this, 20, 0));
};
proto.Message.prototype.setOptionstype = function (value) {
    return jspb.Message.setProto3EnumField(this, 20, value);
};
proto.Message.prototype.getMinioption = function () {
    return (jspb.Message.getFieldWithDefault(this, 21, 0));
};
proto.Message.prototype.setMinioption = function (value) {
    return jspb.Message.setProto3IntField(this, 21, value);
};
proto.Message.prototype.getLastsize = function () {
    return (jspb.Message.getFieldWithDefault(this, 22, 0));
};
proto.Message.prototype.setLastsize = function (value) {
    return jspb.Message.setProto3IntField(this, 22, value);
};
proto.Message.prototype.getBid = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};
proto.Message.prototype.setBid = function (value) {
    return jspb.Message.setProto3FloatField(this, 23, value);
};
proto.Message.prototype.getBidsize = function () {
    return (jspb.Message.getFieldWithDefault(this, 24, 0));
};
proto.Message.prototype.setBidsize = function (value) {
    return jspb.Message.setProto3IntField(this, 24, value);
};
proto.Message.prototype.getAsk = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};
proto.Message.prototype.setAsk = function (value) {
    return jspb.Message.setProto3FloatField(this, 25, value);
};
proto.Message.prototype.getAsksize = function () {
    return (jspb.Message.getFieldWithDefault(this, 26, 0));
};
proto.Message.prototype.setAsksize = function (value) {
    return jspb.Message.setProto3IntField(this, 26, value);
};
proto.Message.prototype.getPricehint = function () {
    return (jspb.Message.getFieldWithDefault(this, 27, 0));
};
proto.Message.prototype.setPricehint = function (value) {
    return jspb.Message.setProto3IntField(this, 27, value);
};
proto.Message.prototype.getVol24hr = function () {
    return (jspb.Message.getFieldWithDefault(this, 28, 0));
};
proto.Message.prototype.setVol24hr = function (value) {
    return jspb.Message.setProto3IntField(this, 28, value);
};
proto.Message.prototype.getVolallcurrencies = function () {
    return (jspb.Message.getFieldWithDefault(this, 29, 0));
};
proto.Message.prototype.setVolallcurrencies = function (value) {
    return jspb.Message.setProto3IntField(this, 29, value);
};
proto.Message.prototype.getFromcurrency = function () {
    return (jspb.Message.getFieldWithDefault(this, 30, ""));
};
proto.Message.prototype.setFromcurrency = function (value) {
    return jspb.Message.setProto3StringField(this, 30, value);
};
proto.Message.prototype.getLastmarket = function () {
    return (jspb.Message.getFieldWithDefault(this, 31, ""));
};
proto.Message.prototype.setLastmarket = function (value) {
    return jspb.Message.setProto3StringField(this, 31, value);
};
proto.Message.prototype.getCirculatingsupply = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};
proto.Message.prototype.setCirculatingsupply = function (value) {
    return jspb.Message.setProto3FloatField(this, 32, value);
};
proto.Message.prototype.getMarketcap = function () {
    return (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};
proto.Message.prototype.setMarketcap = function (value) {
    return jspb.Message.setProto3FloatField(this, 33, value);
};
goog.object.extend(exports, proto);
//# sourceMappingURL=finance_pb.js.map