export default function myJsonParse(str) {
    if (str.length === 0) {
      return ""
    }
    let i = 0
      return parseValue()
        function parseValue() {
          if (str[i] === '{') {//
            return parseObject()//解析对象中的键和值。并存储在对象中 返回
          }
          if (str[i] === '[') {
            return parseArray()
          }
          if (str[i] === '"') {
            return parseString()
          }
          if (str[i] === 't') {//true的情况
            return parseTrue()
          }
          if (str[i] === 'f') {//false的情况
            return parseFalse()
          }
          if (str[i] === 'n') {//null的情况
            return parseNull()
          }
          return parseNumber()//数字的情况
        }
        function parseObject() {
          let result = {}
          i++
          let value
          let key
          if (str[i] === '}') {
            i++
            return result
          } else {
            while (true) {
              key = parseString()
              i++   //跳过冒号
              value = parseValue()
              result[key] = value
              if (str[i] === '}') {
                i++  //考虑可能该}是嵌套在数组和对象里
                return result
              } else if (str[i] === ',') {
                i++   //跳过逗号
              }
            }
          }

        }
        function parseString() {
          let result = ''
          i++
          while (str[i] !== '"') {
            result = result + str[i]
            i++
          }
          i++
          return result
        }
        function parseTrue() {
          let result = true
          if (str.slice(i,i+4) === 'true') {
            i = i + 4
          }
          return result
        }
        function parseFalse() {
          let result = false
          if (str.slice(i, i + 5) === 'false') {
            i = i + 5
          }
          return result
        }
        function parseNull() {
          let result = null
          if (str.slice(i, i + 4) === 'null') {
            i = i + 4
          }
          return result
        }
        function parseArray() {//解析出数组项内容，并存入result
          let result = []
          i++
          while (true) {
            if (str[i] === ']') {
              i++
              return result
            } else if (str[i] === ',') {
              i++
            }
            let arrayItem = parseValue()
            result.push(arrayItem)
          }
          return result
        }
        function parseNumber() {
          let result = ''
          while (/\d/.test(str[i])) {
            result = result + str[i]
            i++
          }
          return Number(result)
        }
      }
