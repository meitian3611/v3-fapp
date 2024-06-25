// 千分位格式化，保留两位小数
const numFormat = function (num) {
    if (!num && num !== 0) return "";
    let value = parseFloat(num)
      .toFixed(2)
      .toString()
      .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
    if (value === "NaN") return "";
    return value;
  };
  // 千分位还原正常数字格式
  const strFormat = function (str) {
    if (!str && str !== 0) return "";
    return str.split(",").join("");
  };
  
  // 用户名称中英文格式处理 --- 统一转为英文
  const userFormat = function (str) {
    if (str.length) {
      let eIndex = str.indexOf("(");
      let zIndex = str.indexOf("（");
      if (eIndex > -1) str = str.substring(0, eIndex);
      if (zIndex > -1) str = str.substring(0, zIndex);
    }
    return str.trim();
  };
  export { numFormat, strFormat, userFormat };
  