

export enum UBaseDataType
{
    Undefined,
    Int,
    Int64,
    Float,
    String,
    Bool,
    Id,
}


export type UStructField =
{
    Type: UBaseDataType;
    Comment: string;
    Database?: string;
    Elements?: number;
};

export type UStruct =
{
    Extends: string;
    Comment: string;
    Fields: { [ key: string]: UStructField };
};

export type UEnumField =
{
    Name: string;
    Comment: string;
    Value: number | string;
};

export type UEnum =
{
    Name: string;
    Comment: string;
    Fields: { [ key: string]: UEnumField };
};


export type UDatabase =
{
    Name: string;
    Type: string;
    Comment: string;
};



export enum UDataDefinitionType
{
    Enum,
    Struct,
    Database
};
