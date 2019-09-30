## String Loop Practice

**Puzzle #1**

```javascript
let str1 = "helloworld";
for(let i = 0; i < str1.length; i++) {
  console.log(str1[i].toUpperCase());
}
```

**Puzzle #2**

```javascript
let str1 = "helloworld";
for(let i = 0; i < str1.length; i++) {
  let c = str1[i];
  if("aeiou".search(c) != -1) {
    console.log("vowel");
   } else {
    console.log("not vowel");
   }
}
```

**Puzzle #3**

```javascript
let str1 = "helloworld";
for(let i = str1.length - 1; i >= 0; i--) {
  console.log(str1[i]);
}
```

**Puzzle #4**

```javascript
let str1 = "abcdefghij";
let str2 = "5061823497";
for(let i = 0; i < str2.length; i++) {
  let j = str2[i];
  console.log(str1[j]);
}
```

**Puzzle #5**

```javascript
let str1 = "123";
let str2 = "xyz";
for(let i = 0; i < str1.length; i++) {
  for(let j = 0; j < str2.length; j++) {
    console.log(str1[i] + " " + str2[j]);  
  }
}
```

**Puzzle #6**

```javascript
let str1 = "helloworld";
for(let i = 0; i < str1.length; i++) {
  console.log(str1.substring(0, i+1));
}
```
