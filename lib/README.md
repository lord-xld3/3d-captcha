
# Mini-bin

A (tiny!) serialization/deserialization library for binary data. JSON-compatible with a focus on compactness.

## Table of contents

- [Description](#description)
- [Schema](#schema)
  - [Header](#header)
  - [Structures](#structures)
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

## Header

This contains two pieces of data: `Meta`, and `Size`.

`Meta`: A single byte representing the size of `Size`.

`Size`: An unsigned integer using between 1 and 8 bytes, representing the # of structures in the file.

## Structures

Each structure contains three pieces of data: `Type`, `Size`, and `Data`.

`Type`: A single byte that encodes `type-info` and `meta-size`.

`Size`: An unsigned integer using between 1 and 8 bytes, representing the # of elements in `Data`.

`Data`: A sequence of bytes.

### Type

```#
00011111
   ^^^^^
these 5 bits encode actual type info (32 types)

11100000
^^^
these 3 bits encode the size of `Size`, between 1 and 8 bytes
```

## List of types

```#
x00: null
x01: bool
x02: i8
x03: i16
x04: i32
x05: i64
x06: f32
x07: f64
x08: char
x09: object
x0A: binary
x0B-x1F: unused (21 slots)
```

## Usage

The schema is only half the battle, parsing the data is the other half. This library is specifically for JavaScript/JSON, but the schema is language-agnostic.

### Serialization

*Serialization refers to the process of converting data structures or objects in a specific programming language into a format that can be easily stored, transmitted, or reconstructed at a later time or in a different environment.*

This means a single value isn't a data structure, you can't serialize it.

JavaScript: You can serialize an array/object, including any nested structures.

### Deserialization

lorem ipsum
