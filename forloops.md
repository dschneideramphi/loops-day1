## For Loops Practice

**Puzzle #1**

```javascript
for(let i = 0; i < 10; i++) {
  console.log(`(${i}, ${i+1})`);
}
```

**Puzzle #2**

```javascript
for(let i = 13; i < 23; i++) {
  if(i % 5 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
```

**Puzzle #3**

```javascript
for(let i = 15; i < 35; i = i + 2) {
  if(i < 30 && i >= 20) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
```

**Puzzle #4**

```javascript
for(let i = 0; i < 10; i++) {
  let num1 = i;
  num1 = num1  + 3;
  num1 = num1 * 6;
  num1 = num1 - 4;
  num1 = num1 / 2;
  console.log(num1);
}
```

**Puzzle #5**

```javascript
let temp = 1;
for(let i = 10; i > 0; i--) {
  temp = temp + i;
  console.log(temp);
}
```

**Puzzle #6**

```javascript
for(let i = 1; i < 11; i++) {
  if(i % 2 == 0) {
    console.log("a");
  } else if(i % 3 == 0) {
    console.log("b");
  } else {
    console.log("z");
  }
}
```
