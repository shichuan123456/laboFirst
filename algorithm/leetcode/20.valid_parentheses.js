function valid_parentheses(str) {
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }, stack = [];
    for(let i = 0, len = str.length; i < len; i++) {
      if(map[str[i]]) {
        stack.push(str[i])
      } else {
        if(map[stack.pop()] !== str[i]) {
          return false;
        }
      }
    }
    return stack.length === 0; 
  }