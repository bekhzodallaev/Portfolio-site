---
title: "Deep Cloning in JavaScript"
date: "2025-07-05"
---

# Deep Cloning in JavaScript — JSON vs StructuredClone

I used to struggle to understand deep cloning in JavaScript objects. Yes, we always say *“use `JSON.stringify()` + `JSON.parse()`, `structuredClone()`, or some recursive functions”* — but when asked in an interview, we often cannot answer clearly about the difference and end up scratching our heads.  

I also had similar situations, but then I learned them deeply. Here is what I’ve found:  

---

## Table of Contents
1. [JSON.stringify() + JSON.parse()](#1-jsonstringify--jsonparse)  
2. [StructuredClone](#2-structuredclone)  
3. [Other Options](#3-other-options)  
4. [Conclusion](#conclusion)  

---

## 1. `JSON.stringify()` + `JSON.parse()`
This method converts an object to a JSON string and then parses it back.  
It works well for simple object cloning (numbers, strings, arrays).  

But it **cannot handle**:  
- ❌ Circular references (throws an error)  
- ❌ Special objects like **Map, Set, Date**, etc. (lost or converted to strings)  
- ❌ Functions (ignored or removed)  
- ❌ Prototypes (lost in the process)  

---

## 2. `structuredClone`
This method performs deep cloning using the **HTML5 Structured Clone Algorithm**.  
It is capable of handling complex objects.  

It **supports**:  
- ✅ Complex objects (including **Map, Set, Date, Blob**, etc.)  
- ✅ Circular references (objects that reference themselves)  
- ✅ Preserves object prototypes and special data types  

But it **does not support**:  
- ❌ Functions  
- ❌ DOM nodes  

---

## 3. Other Options
Instead of these two methods, you can also use:  
- **Custom recursive functions**  
- **Third-party libraries** like `lodash`  

But these approaches can come with maintenance overhead and hidden bugs.  

---

## Conclusion
Now, I hope you’ll understand the differences. Which method to choose always depends on the **object you are trying to copy**.  

👉 Learn more here: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)  

---

#JavaScript #FullstackDevelopment #SoftwareEngineering
