

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
    Key: string;
    Name: string;
    Comment: string;
    Type: UBaseDataType;
    Database?: string;
    Elements?: number;
};

export type UStruct =
{
    Extends: string;
    Comment: string;
    Fields: UStructField[];
};

export type UEnumField =
{
    Key: string;
    Name: string;
    Comment: string;
    Value: number | string;
};

export type UEnum =
{
    Name: string;
    Comment: string;
    Fields: UEnumField[];
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
