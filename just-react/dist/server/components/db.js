var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var db_exports = {};
__export(db_exports, {
  getProducts: () => getProducts
});
module.exports = __toCommonJS(db_exports);
let cache;
function getProducts() {
  if (cache) {
    return cache;
  }
  return cache = new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8087/api/products");
    const data = await res.json();
    resolve(data);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProducts
});
