
# Mini-bin

A serialization/deserialization library for binary data.

## Schema

```#Markdown
Fundamental structure

size: uint64, // 64 bit unsigned integer
type: byte, // size in bytes, and how to interpret the data
ptr: uint64, // pointer to data

For structures with multiple pointers, we read the next (size * 8) bytes of data, and interpret as pointer(s).

Depending on the type, there can be multiple pointers. There will always be at least one pointer per structure. We can point to the same structure, or same data, multiple times.

tldr; don't attempt to modify parts of the binary, just use an array buffer for that.
```

```#Markdown
Types

00: ptr
01: u8
02: u16
03: u32
04: u64
05: i8
06: i16
07: i32
08: i64
0A: f32
0B: f64
0C: bool
0D: char
0E: tuple
0F: object
10-FF: reserved
```

## Example

```#Markdown
Object representation

object {
    key: 'abcd',
    value: 1,
}

//header
size: 00 00 00 00 00 00 00 02 // (size of 2)
type: 0F // object (ptr_size, a.k.a. 8 bytes)
ptr: 00 00 00 00 00 00 00 0X // key
ptr: 00 00 00 00 00 00 00 0X // value

//key
size: 00 00 00 00 00 00 00 04 // (size of 4)
type: 0D // char (byte)
ptr: 00 00 00 00 00 00 00 0X // points to 'abcd'

//value
size: 00 00 00 00 00 00 00 01 // (size of 1)
type: 01 // u8 (byte)
ptr: 00 00 00 00 00 00 00 0X // points to 1

//data
55 56 57 58 01 // abcd1

```
