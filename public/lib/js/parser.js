"use strict";
exports.__esModule = true;
var schema = require("./finance_pb");
var js_base64_1 = require("js-base64");
function parse(b64) {
    if (!b64)
        return {};
    var quote = schema.Message.deserializeBinary(js_base64_1.toUint8Array(b64));
    return quote.toObject();
}
exports["default"] = parse;
//# sourceMappingURL=parser.js.map