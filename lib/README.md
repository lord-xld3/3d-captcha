
# Mini-bin

A (tiny!) serialization/deserialization library for binary data. JSON-compatible with a focus on compactness.

## Table of contents

- [Description](#description)
- [Schema](#schema)
  - [Header](#header)
  - [Structures](#structures)
  - [Heap](#heap)
  - [List of types](#list-of-types)
- [Usage](#usage)
  - [Serialization](#serialization)
  - [Deserialization](#deserialization)

## Description

lorem ipsum

## Schema

A binary file contains the following parts:

- [Header](#header)
- [Structures](#structures)
- [Heap](#heap)

## Header

This contains two pieces of data: `Meta`, and `Size`.

`Meta`: A single byte

`Size`: An unsigned integer using between 1 and 16 bytes

**Meta:**

```#
FF
^ the first 4 bits encode the pointer size (1-16 bytes, no zero size)

FF
 ^ the last 4 bits encode the size of 'Size' (1-16 bytes, no zero size)
```

## Structures

`Type`: A single byte that encodes `type-info`, `meta-size`, and `reference`.

`Size`: An unsigned integer using between 1 and 16 bytes, representing the # of elements of `Data`

`Data`: A sequence of bytes, or a reference to a sequence of bytes. This will use the global pointer size.

**Type**:

```#
00011111
   ^^^^^
these 5 bits encode actual type info (32 types)

01100000
 ^^
these 2 bits encode "meta-size", between 1 and 4 bytes (2^32 - 1 elements)
anything with more than 4,294,967,295 elements should probably be in its own file!

10000000
^
the first bit indicates if the data is a reference (pointer)
```

## Heap

The heap is a continuous section of bytes that can be referenced by pointers. This is useful if multiple structures refer to the same data AND the data is larger than the pointer size.

## List of types

```#
x00: binary
x01: bool
x02: i8
x03: i16
x04: i32
x05: i64
x06: f16
x07: f32
x08: f64
x09: char
x0A: object
x0B-x1F: unused (21 slots)
```

## Usage

lorem ipsum

### Serialization

lorem ipsum

### Deserialization

lorem ipsum
