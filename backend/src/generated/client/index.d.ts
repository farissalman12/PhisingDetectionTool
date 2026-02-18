/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Scan
 *
 */
export type Scan = $Result.DefaultSelection<Prisma.$ScanPayload>;
/**
 * Model BlacklistEntry
 *
 */
export type BlacklistEntry =
  $Result.DefaultSelection<Prisma.$BlacklistEntryPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    USER: 'USER';
    ADMIN: 'ADMIN';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const Verdict: {
    SAFE: 'SAFE';
    SUSPICIOUS: 'SUSPICIOUS';
    PHISHING: 'PHISHING';
  };

  export type Verdict = (typeof Verdict)[keyof typeof Verdict];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type Verdict = $Enums.Verdict;

export const Verdict: typeof $Enums.Verdict;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.scan`: Exposes CRUD operations for the **Scan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Scans
   * const scans = await prisma.scan.findMany()
   * ```
   */
  get scan(): Prisma.ScanDelegate<ExtArgs>;

  /**
   * `prisma.blacklistEntry`: Exposes CRUD operations for the **BlacklistEntry** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BlacklistEntries
   * const blacklistEntries = await prisma.blacklistEntry.findMany()
   * ```
   */
  get blacklistEntry(): Prisma.BlacklistEntryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Scan: 'Scan';
    BlacklistEntry: 'BlacklistEntry';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps: 'user' | 'scan' | 'blacklistEntry';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Scan: {
        payload: Prisma.$ScanPayload<ExtArgs>;
        fields: Prisma.ScanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ScanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ScanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          findFirst: {
            args: Prisma.ScanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ScanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          findMany: {
            args: Prisma.ScanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[];
          };
          create: {
            args: Prisma.ScanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          createMany: {
            args: Prisma.ScanCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ScanCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[];
          };
          delete: {
            args: Prisma.ScanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          update: {
            args: Prisma.ScanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          deleteMany: {
            args: Prisma.ScanDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ScanUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ScanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>;
          };
          aggregate: {
            args: Prisma.ScanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateScan>;
          };
          groupBy: {
            args: Prisma.ScanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScanGroupByOutputType>[];
          };
          count: {
            args: Prisma.ScanCountArgs<ExtArgs>;
            result: $Utils.Optional<ScanCountAggregateOutputType> | number;
          };
        };
      };
      BlacklistEntry: {
        payload: Prisma.$BlacklistEntryPayload<ExtArgs>;
        fields: Prisma.BlacklistEntryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BlacklistEntryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BlacklistEntryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          findFirst: {
            args: Prisma.BlacklistEntryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BlacklistEntryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          findMany: {
            args: Prisma.BlacklistEntryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>[];
          };
          create: {
            args: Prisma.BlacklistEntryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          createMany: {
            args: Prisma.BlacklistEntryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BlacklistEntryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>[];
          };
          delete: {
            args: Prisma.BlacklistEntryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          update: {
            args: Prisma.BlacklistEntryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          deleteMany: {
            args: Prisma.BlacklistEntryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BlacklistEntryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.BlacklistEntryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BlacklistEntryPayload>;
          };
          aggregate: {
            args: Prisma.BlacklistEntryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlacklistEntry>;
          };
          groupBy: {
            args: Prisma.BlacklistEntryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BlacklistEntryGroupByOutputType>[];
          };
          count: {
            args: Prisma.BlacklistEntryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BlacklistEntryCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scans: number;
    blacklist_entries: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    scans?: boolean | UserCountOutputTypeCountScansArgs;
    blacklist_entries?: boolean | UserCountOutputTypeCountBlacklist_entriesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScansArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ScanWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlacklist_entriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlacklistEntryWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    role: number;
    created_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    role?: true;
    created_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password_hash: string;
    role: $Enums.Role;
    created_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password_hash?: boolean;
      role?: boolean;
      created_at?: boolean;
      scans?: boolean | User$scansArgs<ExtArgs>;
      blacklist_entries?: boolean | User$blacklist_entriesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password_hash?: boolean;
      role?: boolean;
      created_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    role?: boolean;
    created_at?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    scans?: boolean | User$scansArgs<ExtArgs>;
    blacklist_entries?: boolean | User$blacklist_entriesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      scans: Prisma.$ScanPayload<ExtArgs>[];
      blacklist_entries: Prisma.$BlacklistEntryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password_hash: string;
        role: $Enums.Role;
        created_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    scans<T extends User$scansArgs<ExtArgs> = {}>(
      args?: Subset<T, User$scansArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    blacklist_entries<T extends User$blacklist_entriesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$blacklist_entriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password_hash: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly created_at: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.scans
   */
  export type User$scansArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    where?: ScanWhereInput;
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[];
    cursor?: ScanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[];
  };

  /**
   * User.blacklist_entries
   */
  export type User$blacklist_entriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    where?: BlacklistEntryWhereInput;
    orderBy?:
      | BlacklistEntryOrderByWithRelationInput
      | BlacklistEntryOrderByWithRelationInput[];
    cursor?: BlacklistEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BlacklistEntryScalarFieldEnum | BlacklistEntryScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Scan
   */

  export type AggregateScan = {
    _count: ScanCountAggregateOutputType | null;
    _avg: ScanAvgAggregateOutputType | null;
    _sum: ScanSumAggregateOutputType | null;
    _min: ScanMinAggregateOutputType | null;
    _max: ScanMaxAggregateOutputType | null;
  };

  export type ScanAvgAggregateOutputType = {
    risk_score: number | null;
  };

  export type ScanSumAggregateOutputType = {
    risk_score: number | null;
  };

  export type ScanMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    input_content: string | null;
    risk_score: number | null;
    verdict: $Enums.Verdict | null;
    created_at: Date | null;
  };

  export type ScanMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    input_content: string | null;
    risk_score: number | null;
    verdict: $Enums.Verdict | null;
    created_at: Date | null;
  };

  export type ScanCountAggregateOutputType = {
    id: number;
    user_id: number;
    input_content: number;
    risk_score: number;
    verdict: number;
    detailed_report: number;
    created_at: number;
    _all: number;
  };

  export type ScanAvgAggregateInputType = {
    risk_score?: true;
  };

  export type ScanSumAggregateInputType = {
    risk_score?: true;
  };

  export type ScanMinAggregateInputType = {
    id?: true;
    user_id?: true;
    input_content?: true;
    risk_score?: true;
    verdict?: true;
    created_at?: true;
  };

  export type ScanMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    input_content?: true;
    risk_score?: true;
    verdict?: true;
    created_at?: true;
  };

  export type ScanCountAggregateInputType = {
    id?: true;
    user_id?: true;
    input_content?: true;
    risk_score?: true;
    verdict?: true;
    detailed_report?: true;
    created_at?: true;
    _all?: true;
  };

  export type ScanAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Scan to aggregate.
     */
    where?: ScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Scans
     **/
    _count?: true | ScanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ScanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ScanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScanMaxAggregateInputType;
  };

  export type GetScanAggregateType<T extends ScanAggregateArgs> = {
    [P in keyof T & keyof AggregateScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan[P]>
      : GetScalarType<T[P], AggregateScan[P]>;
  };

  export type ScanGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ScanWhereInput;
    orderBy?:
      | ScanOrderByWithAggregationInput
      | ScanOrderByWithAggregationInput[];
    by: ScanScalarFieldEnum[] | ScanScalarFieldEnum;
    having?: ScanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScanCountAggregateInputType | true;
    _avg?: ScanAvgAggregateInputType;
    _sum?: ScanSumAggregateInputType;
    _min?: ScanMinAggregateInputType;
    _max?: ScanMaxAggregateInputType;
  };

  export type ScanGroupByOutputType = {
    id: string;
    user_id: string | null;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonValue;
    created_at: Date;
    _count: ScanCountAggregateOutputType | null;
    _avg: ScanAvgAggregateOutputType | null;
    _sum: ScanSumAggregateOutputType | null;
    _min: ScanMinAggregateOutputType | null;
    _max: ScanMaxAggregateOutputType | null;
  };

  type GetScanGroupByPayload<T extends ScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScanGroupByOutputType[P]>
          : GetScalarType<T[P], ScanGroupByOutputType[P]>;
      }
    >
  >;

  export type ScanSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      input_content?: boolean;
      risk_score?: boolean;
      verdict?: boolean;
      detailed_report?: boolean;
      created_at?: boolean;
      user?: boolean | Scan$userArgs<ExtArgs>;
    },
    ExtArgs['result']['scan']
  >;

  export type ScanSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      input_content?: boolean;
      risk_score?: boolean;
      verdict?: boolean;
      detailed_report?: boolean;
      created_at?: boolean;
      user?: boolean | Scan$userArgs<ExtArgs>;
    },
    ExtArgs['result']['scan']
  >;

  export type ScanSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    input_content?: boolean;
    risk_score?: boolean;
    verdict?: boolean;
    detailed_report?: boolean;
    created_at?: boolean;
  };

  export type ScanInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Scan$userArgs<ExtArgs>;
  };
  export type ScanIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Scan$userArgs<ExtArgs>;
  };

  export type $ScanPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Scan';
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string | null;
        input_content: string;
        risk_score: number;
        verdict: $Enums.Verdict;
        detailed_report: Prisma.JsonValue;
        created_at: Date;
      },
      ExtArgs['result']['scan']
    >;
    composites: {};
  };

  type ScanGetPayload<S extends boolean | null | undefined | ScanDefaultArgs> =
    $Result.GetResult<Prisma.$ScanPayload, S>;

  type ScanCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ScanFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ScanCountAggregateInputType | true;
  };

  export interface ScanDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Scan'];
      meta: { name: 'Scan' };
    };
    /**
     * Find zero or one Scan that matches the filter.
     * @param {ScanFindUniqueArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindUniqueArgs>(
      args: SelectSubset<T, ScanFindUniqueArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Scan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindUniqueOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ScanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Scan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindFirstArgs>(
      args?: SelectSubset<T, ScanFindFirstArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Scan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Scans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scans
     * const scans = await prisma.scan.findMany()
     *
     * // Get first 10 Scans
     * const scans = await prisma.scan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scanWithIdOnly = await prisma.scan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ScanFindManyArgs>(
      args?: SelectSubset<T, ScanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Scan.
     * @param {ScanCreateArgs} args - Arguments to create a Scan.
     * @example
     * // Create one Scan
     * const Scan = await prisma.scan.create({
     *   data: {
     *     // ... data to create a Scan
     *   }
     * })
     *
     */
    create<T extends ScanCreateArgs>(
      args: SelectSubset<T, ScanCreateArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Scans.
     * @param {ScanCreateManyArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ScanCreateManyArgs>(
      args?: SelectSubset<T, ScanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Scans and returns the data saved in the database.
     * @param {ScanCreateManyAndReturnArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ScanCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ScanCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Scan.
     * @param {ScanDeleteArgs} args - Arguments to delete one Scan.
     * @example
     * // Delete one Scan
     * const Scan = await prisma.scan.delete({
     *   where: {
     *     // ... filter to delete one Scan
     *   }
     * })
     *
     */
    delete<T extends ScanDeleteArgs>(
      args: SelectSubset<T, ScanDeleteArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Scan.
     * @param {ScanUpdateArgs} args - Arguments to update one Scan.
     * @example
     * // Update one Scan
     * const scan = await prisma.scan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ScanUpdateArgs>(
      args: SelectSubset<T, ScanUpdateArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Scans.
     * @param {ScanDeleteManyArgs} args - Arguments to filter Scans to delete.
     * @example
     * // Delete a few Scans
     * const { count } = await prisma.scan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ScanDeleteManyArgs>(
      args?: SelectSubset<T, ScanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ScanUpdateManyArgs>(
      args: SelectSubset<T, ScanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Scan.
     * @param {ScanUpsertArgs} args - Arguments to update or create a Scan.
     * @example
     * // Update or create a Scan
     * const scan = await prisma.scan.upsert({
     *   create: {
     *     // ... data to create a Scan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan we want to update
     *   }
     * })
     */
    upsert<T extends ScanUpsertArgs>(
      args: SelectSubset<T, ScanUpsertArgs<ExtArgs>>,
    ): Prisma__ScanClient<
      $Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCountArgs} args - Arguments to filter Scans to count.
     * @example
     * // Count the number of Scans
     * const count = await prisma.scan.count({
     *   where: {
     *     // ... the filter for the Scans we want to count
     *   }
     * })
     **/
    count<T extends ScanCountArgs>(
      args?: Subset<T, ScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ScanAggregateArgs>(
      args: Subset<T, ScanAggregateArgs>,
    ): Prisma.PrismaPromise<GetScanAggregateType<T>>;

    /**
     * Group by Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanGroupByArgs['orderBy'] }
        : { orderBy?: ScanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ScanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetScanGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Scan model
     */
    readonly fields: ScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends Scan$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Scan$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Scan model
   */
  interface ScanFieldRefs {
    readonly id: FieldRef<'Scan', 'String'>;
    readonly user_id: FieldRef<'Scan', 'String'>;
    readonly input_content: FieldRef<'Scan', 'String'>;
    readonly risk_score: FieldRef<'Scan', 'Int'>;
    readonly verdict: FieldRef<'Scan', 'Verdict'>;
    readonly detailed_report: FieldRef<'Scan', 'Json'>;
    readonly created_at: FieldRef<'Scan', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Scan findUnique
   */
  export type ScanFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput;
  };

  /**
   * Scan findUniqueOrThrow
   */
  export type ScanFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput;
  };

  /**
   * Scan findFirst
   */
  export type ScanFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[];
  };

  /**
   * Scan findFirstOrThrow
   */
  export type ScanFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[];
  };

  /**
   * Scan findMany
   */
  export type ScanFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter, which Scans to fetch.
     */
    where?: ScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Scans.
     */
    cursor?: ScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scans.
     */
    skip?: number;
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[];
  };

  /**
   * Scan create
   */
  export type ScanCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * The data needed to create a Scan.
     */
    data: XOR<ScanCreateInput, ScanUncheckedCreateInput>;
  };

  /**
   * Scan createMany
   */
  export type ScanCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Scan createManyAndReturn
   */
  export type ScanCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Scan update
   */
  export type ScanUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * The data needed to update a Scan.
     */
    data: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>;
    /**
     * Choose, which Scan to update.
     */
    where: ScanWhereUniqueInput;
  };

  /**
   * Scan updateMany
   */
  export type ScanUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>;
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput;
  };

  /**
   * Scan upsert
   */
  export type ScanUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * The filter to search for the Scan to update in case it exists.
     */
    where: ScanWhereUniqueInput;
    /**
     * In case the Scan found by the `where` argument doesn't exist, create a new Scan with this data.
     */
    create: XOR<ScanCreateInput, ScanUncheckedCreateInput>;
    /**
     * In case the Scan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>;
  };

  /**
   * Scan delete
   */
  export type ScanDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
    /**
     * Filter which Scan to delete.
     */
    where: ScanWhereUniqueInput;
  };

  /**
   * Scan deleteMany
   */
  export type ScanDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Scans to delete
     */
    where?: ScanWhereInput;
  };

  /**
   * Scan.user
   */
  export type Scan$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Scan without action
   */
  export type ScanDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null;
  };

  /**
   * Model BlacklistEntry
   */

  export type AggregateBlacklistEntry = {
    _count: BlacklistEntryCountAggregateOutputType | null;
    _min: BlacklistEntryMinAggregateOutputType | null;
    _max: BlacklistEntryMaxAggregateOutputType | null;
  };

  export type BlacklistEntryMinAggregateOutputType = {
    id: string | null;
    pattern: string | null;
    added_by: string | null;
    reason: string | null;
    created_at: Date | null;
  };

  export type BlacklistEntryMaxAggregateOutputType = {
    id: string | null;
    pattern: string | null;
    added_by: string | null;
    reason: string | null;
    created_at: Date | null;
  };

  export type BlacklistEntryCountAggregateOutputType = {
    id: number;
    pattern: number;
    added_by: number;
    reason: number;
    created_at: number;
    _all: number;
  };

  export type BlacklistEntryMinAggregateInputType = {
    id?: true;
    pattern?: true;
    added_by?: true;
    reason?: true;
    created_at?: true;
  };

  export type BlacklistEntryMaxAggregateInputType = {
    id?: true;
    pattern?: true;
    added_by?: true;
    reason?: true;
    created_at?: true;
  };

  export type BlacklistEntryCountAggregateInputType = {
    id?: true;
    pattern?: true;
    added_by?: true;
    reason?: true;
    created_at?: true;
    _all?: true;
  };

  export type BlacklistEntryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BlacklistEntry to aggregate.
     */
    where?: BlacklistEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BlacklistEntries to fetch.
     */
    orderBy?:
      | BlacklistEntryOrderByWithRelationInput
      | BlacklistEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BlacklistEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BlacklistEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BlacklistEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BlacklistEntries
     **/
    _count?: true | BlacklistEntryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BlacklistEntryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BlacklistEntryMaxAggregateInputType;
  };

  export type GetBlacklistEntryAggregateType<
    T extends BlacklistEntryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateBlacklistEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklistEntry[P]>
      : GetScalarType<T[P], AggregateBlacklistEntry[P]>;
  };

  export type BlacklistEntryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BlacklistEntryWhereInput;
    orderBy?:
      | BlacklistEntryOrderByWithAggregationInput
      | BlacklistEntryOrderByWithAggregationInput[];
    by: BlacklistEntryScalarFieldEnum[] | BlacklistEntryScalarFieldEnum;
    having?: BlacklistEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlacklistEntryCountAggregateInputType | true;
    _min?: BlacklistEntryMinAggregateInputType;
    _max?: BlacklistEntryMaxAggregateInputType;
  };

  export type BlacklistEntryGroupByOutputType = {
    id: string;
    pattern: string;
    added_by: string;
    reason: string;
    created_at: Date;
    _count: BlacklistEntryCountAggregateOutputType | null;
    _min: BlacklistEntryMinAggregateOutputType | null;
    _max: BlacklistEntryMaxAggregateOutputType | null;
  };

  type GetBlacklistEntryGroupByPayload<T extends BlacklistEntryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BlacklistEntryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof BlacklistEntryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistEntryGroupByOutputType[P]>;
        }
      >
    >;

  export type BlacklistEntrySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pattern?: boolean;
      added_by?: boolean;
      reason?: boolean;
      created_at?: boolean;
      admin?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['blacklistEntry']
  >;

  export type BlacklistEntrySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      pattern?: boolean;
      added_by?: boolean;
      reason?: boolean;
      created_at?: boolean;
      admin?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['blacklistEntry']
  >;

  export type BlacklistEntrySelectScalar = {
    id?: boolean;
    pattern?: boolean;
    added_by?: boolean;
    reason?: boolean;
    created_at?: boolean;
  };

  export type BlacklistEntryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type BlacklistEntryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    admin?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $BlacklistEntryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BlacklistEntry';
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        pattern: string;
        added_by: string;
        reason: string;
        created_at: Date;
      },
      ExtArgs['result']['blacklistEntry']
    >;
    composites: {};
  };

  type BlacklistEntryGetPayload<
    S extends boolean | null | undefined | BlacklistEntryDefaultArgs,
  > = $Result.GetResult<Prisma.$BlacklistEntryPayload, S>;

  type BlacklistEntryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BlacklistEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: BlacklistEntryCountAggregateInputType | true;
  };

  export interface BlacklistEntryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BlacklistEntry'];
      meta: { name: 'BlacklistEntry' };
    };
    /**
     * Find zero or one BlacklistEntry that matches the filter.
     * @param {BlacklistEntryFindUniqueArgs} args - Arguments to find a BlacklistEntry
     * @example
     * // Get one BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistEntryFindUniqueArgs>(
      args: SelectSubset<T, BlacklistEntryFindUniqueArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<
        Prisma.$BlacklistEntryPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one BlacklistEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistEntryFindUniqueOrThrowArgs} args - Arguments to find a BlacklistEntry
     * @example
     * // Get one BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistEntryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BlacklistEntryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<
        Prisma.$BlacklistEntryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first BlacklistEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryFindFirstArgs} args - Arguments to find a BlacklistEntry
     * @example
     * // Get one BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistEntryFindFirstArgs>(
      args?: SelectSubset<T, BlacklistEntryFindFirstArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<
        Prisma.$BlacklistEntryPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first BlacklistEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryFindFirstOrThrowArgs} args - Arguments to find a BlacklistEntry
     * @example
     * // Get one BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistEntryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BlacklistEntryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<
        Prisma.$BlacklistEntryPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more BlacklistEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlacklistEntries
     * const blacklistEntries = await prisma.blacklistEntry.findMany()
     *
     * // Get first 10 BlacklistEntries
     * const blacklistEntries = await prisma.blacklistEntry.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blacklistEntryWithIdOnly = await prisma.blacklistEntry.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BlacklistEntryFindManyArgs>(
      args?: SelectSubset<T, BlacklistEntryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a BlacklistEntry.
     * @param {BlacklistEntryCreateArgs} args - Arguments to create a BlacklistEntry.
     * @example
     * // Create one BlacklistEntry
     * const BlacklistEntry = await prisma.blacklistEntry.create({
     *   data: {
     *     // ... data to create a BlacklistEntry
     *   }
     * })
     *
     */
    create<T extends BlacklistEntryCreateArgs>(
      args: SelectSubset<T, BlacklistEntryCreateArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many BlacklistEntries.
     * @param {BlacklistEntryCreateManyArgs} args - Arguments to create many BlacklistEntries.
     * @example
     * // Create many BlacklistEntries
     * const blacklistEntry = await prisma.blacklistEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BlacklistEntryCreateManyArgs>(
      args?: SelectSubset<T, BlacklistEntryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BlacklistEntries and returns the data saved in the database.
     * @param {BlacklistEntryCreateManyAndReturnArgs} args - Arguments to create many BlacklistEntries.
     * @example
     * // Create many BlacklistEntries
     * const blacklistEntry = await prisma.blacklistEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BlacklistEntries and only return the `id`
     * const blacklistEntryWithIdOnly = await prisma.blacklistEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BlacklistEntryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BlacklistEntryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BlacklistEntryPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a BlacklistEntry.
     * @param {BlacklistEntryDeleteArgs} args - Arguments to delete one BlacklistEntry.
     * @example
     * // Delete one BlacklistEntry
     * const BlacklistEntry = await prisma.blacklistEntry.delete({
     *   where: {
     *     // ... filter to delete one BlacklistEntry
     *   }
     * })
     *
     */
    delete<T extends BlacklistEntryDeleteArgs>(
      args: SelectSubset<T, BlacklistEntryDeleteArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one BlacklistEntry.
     * @param {BlacklistEntryUpdateArgs} args - Arguments to update one BlacklistEntry.
     * @example
     * // Update one BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BlacklistEntryUpdateArgs>(
      args: SelectSubset<T, BlacklistEntryUpdateArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more BlacklistEntries.
     * @param {BlacklistEntryDeleteManyArgs} args - Arguments to filter BlacklistEntries to delete.
     * @example
     * // Delete a few BlacklistEntries
     * const { count } = await prisma.blacklistEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BlacklistEntryDeleteManyArgs>(
      args?: SelectSubset<T, BlacklistEntryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BlacklistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlacklistEntries
     * const blacklistEntry = await prisma.blacklistEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BlacklistEntryUpdateManyArgs>(
      args: SelectSubset<T, BlacklistEntryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one BlacklistEntry.
     * @param {BlacklistEntryUpsertArgs} args - Arguments to update or create a BlacklistEntry.
     * @example
     * // Update or create a BlacklistEntry
     * const blacklistEntry = await prisma.blacklistEntry.upsert({
     *   create: {
     *     // ... data to create a BlacklistEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlacklistEntry we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistEntryUpsertArgs>(
      args: SelectSubset<T, BlacklistEntryUpsertArgs<ExtArgs>>,
    ): Prisma__BlacklistEntryClient<
      $Result.GetResult<Prisma.$BlacklistEntryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of BlacklistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryCountArgs} args - Arguments to filter BlacklistEntries to count.
     * @example
     * // Count the number of BlacklistEntries
     * const count = await prisma.blacklistEntry.count({
     *   where: {
     *     // ... the filter for the BlacklistEntries we want to count
     *   }
     * })
     **/
    count<T extends BlacklistEntryCountArgs>(
      args?: Subset<T, BlacklistEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistEntryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BlacklistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BlacklistEntryAggregateArgs>(
      args: Subset<T, BlacklistEntryAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlacklistEntryAggregateType<T>>;

    /**
     * Group by BlacklistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BlacklistEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistEntryGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BlacklistEntryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBlacklistEntryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BlacklistEntry model
     */
    readonly fields: BlacklistEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlacklistEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistEntryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BlacklistEntry model
   */
  interface BlacklistEntryFieldRefs {
    readonly id: FieldRef<'BlacklistEntry', 'String'>;
    readonly pattern: FieldRef<'BlacklistEntry', 'String'>;
    readonly added_by: FieldRef<'BlacklistEntry', 'String'>;
    readonly reason: FieldRef<'BlacklistEntry', 'String'>;
    readonly created_at: FieldRef<'BlacklistEntry', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * BlacklistEntry findUnique
   */
  export type BlacklistEntryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter, which BlacklistEntry to fetch.
     */
    where: BlacklistEntryWhereUniqueInput;
  };

  /**
   * BlacklistEntry findUniqueOrThrow
   */
  export type BlacklistEntryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter, which BlacklistEntry to fetch.
     */
    where: BlacklistEntryWhereUniqueInput;
  };

  /**
   * BlacklistEntry findFirst
   */
  export type BlacklistEntryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter, which BlacklistEntry to fetch.
     */
    where?: BlacklistEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BlacklistEntries to fetch.
     */
    orderBy?:
      | BlacklistEntryOrderByWithRelationInput
      | BlacklistEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BlacklistEntries.
     */
    cursor?: BlacklistEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BlacklistEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BlacklistEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BlacklistEntries.
     */
    distinct?: BlacklistEntryScalarFieldEnum | BlacklistEntryScalarFieldEnum[];
  };

  /**
   * BlacklistEntry findFirstOrThrow
   */
  export type BlacklistEntryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter, which BlacklistEntry to fetch.
     */
    where?: BlacklistEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BlacklistEntries to fetch.
     */
    orderBy?:
      | BlacklistEntryOrderByWithRelationInput
      | BlacklistEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BlacklistEntries.
     */
    cursor?: BlacklistEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BlacklistEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BlacklistEntries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BlacklistEntries.
     */
    distinct?: BlacklistEntryScalarFieldEnum | BlacklistEntryScalarFieldEnum[];
  };

  /**
   * BlacklistEntry findMany
   */
  export type BlacklistEntryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter, which BlacklistEntries to fetch.
     */
    where?: BlacklistEntryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BlacklistEntries to fetch.
     */
    orderBy?:
      | BlacklistEntryOrderByWithRelationInput
      | BlacklistEntryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BlacklistEntries.
     */
    cursor?: BlacklistEntryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BlacklistEntries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BlacklistEntries.
     */
    skip?: number;
    distinct?: BlacklistEntryScalarFieldEnum | BlacklistEntryScalarFieldEnum[];
  };

  /**
   * BlacklistEntry create
   */
  export type BlacklistEntryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * The data needed to create a BlacklistEntry.
     */
    data: XOR<BlacklistEntryCreateInput, BlacklistEntryUncheckedCreateInput>;
  };

  /**
   * BlacklistEntry createMany
   */
  export type BlacklistEntryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BlacklistEntries.
     */
    data: BlacklistEntryCreateManyInput | BlacklistEntryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BlacklistEntry createManyAndReturn
   */
  export type BlacklistEntryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many BlacklistEntries.
     */
    data: BlacklistEntryCreateManyInput | BlacklistEntryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BlacklistEntry update
   */
  export type BlacklistEntryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * The data needed to update a BlacklistEntry.
     */
    data: XOR<BlacklistEntryUpdateInput, BlacklistEntryUncheckedUpdateInput>;
    /**
     * Choose, which BlacklistEntry to update.
     */
    where: BlacklistEntryWhereUniqueInput;
  };

  /**
   * BlacklistEntry updateMany
   */
  export type BlacklistEntryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BlacklistEntries.
     */
    data: XOR<
      BlacklistEntryUpdateManyMutationInput,
      BlacklistEntryUncheckedUpdateManyInput
    >;
    /**
     * Filter which BlacklistEntries to update
     */
    where?: BlacklistEntryWhereInput;
  };

  /**
   * BlacklistEntry upsert
   */
  export type BlacklistEntryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * The filter to search for the BlacklistEntry to update in case it exists.
     */
    where: BlacklistEntryWhereUniqueInput;
    /**
     * In case the BlacklistEntry found by the `where` argument doesn't exist, create a new BlacklistEntry with this data.
     */
    create: XOR<BlacklistEntryCreateInput, BlacklistEntryUncheckedCreateInput>;
    /**
     * In case the BlacklistEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistEntryUpdateInput, BlacklistEntryUncheckedUpdateInput>;
  };

  /**
   * BlacklistEntry delete
   */
  export type BlacklistEntryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
    /**
     * Filter which BlacklistEntry to delete.
     */
    where: BlacklistEntryWhereUniqueInput;
  };

  /**
   * BlacklistEntry deleteMany
   */
  export type BlacklistEntryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BlacklistEntries to delete
     */
    where?: BlacklistEntryWhereInput;
  };

  /**
   * BlacklistEntry without action
   */
  export type BlacklistEntryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BlacklistEntry
     */
    select?: BlacklistEntrySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistEntryInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password_hash: 'password_hash';
    role: 'role';
    created_at: 'created_at';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ScanScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    input_content: 'input_content';
    risk_score: 'risk_score';
    verdict: 'verdict';
    detailed_report: 'detailed_report';
    created_at: 'created_at';
  };

  export type ScanScalarFieldEnum =
    (typeof ScanScalarFieldEnum)[keyof typeof ScanScalarFieldEnum];

  export const BlacklistEntryScalarFieldEnum: {
    id: 'id';
    pattern: 'pattern';
    added_by: 'added_by';
    reason: 'reason';
    created_at: 'created_at';
  };

  export type BlacklistEntryScalarFieldEnum =
    (typeof BlacklistEntryScalarFieldEnum)[keyof typeof BlacklistEntryScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Verdict'
   */
  export type EnumVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Verdict'
  >;

  /**
   * Reference to a field of type 'Verdict[]'
   */
  export type ListEnumVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Verdict[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password_hash?: StringFilter<'User'> | string;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    created_at?: DateTimeFilter<'User'> | Date | string;
    scans?: ScanListRelationFilter;
    blacklist_entries?: BlacklistEntryListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    scans?: ScanOrderByRelationAggregateInput;
    blacklist_entries?: BlacklistEntryOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password_hash?: StringFilter<'User'> | string;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      created_at?: DateTimeFilter<'User'> | Date | string;
      scans?: ScanListRelationFilter;
      blacklist_entries?: BlacklistEntryListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password_hash?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    created_at?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ScanWhereInput = {
    AND?: ScanWhereInput | ScanWhereInput[];
    OR?: ScanWhereInput[];
    NOT?: ScanWhereInput | ScanWhereInput[];
    id?: StringFilter<'Scan'> | string;
    user_id?: StringNullableFilter<'Scan'> | string | null;
    input_content?: StringFilter<'Scan'> | string;
    risk_score?: IntFilter<'Scan'> | number;
    verdict?: EnumVerdictFilter<'Scan'> | $Enums.Verdict;
    detailed_report?: JsonFilter<'Scan'>;
    created_at?: DateTimeFilter<'Scan'> | Date | string;
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
  };

  export type ScanOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
    input_content?: SortOrder;
    risk_score?: SortOrder;
    verdict?: SortOrder;
    detailed_report?: SortOrder;
    created_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ScanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ScanWhereInput | ScanWhereInput[];
      OR?: ScanWhereInput[];
      NOT?: ScanWhereInput | ScanWhereInput[];
      user_id?: StringNullableFilter<'Scan'> | string | null;
      input_content?: StringFilter<'Scan'> | string;
      risk_score?: IntFilter<'Scan'> | number;
      verdict?: EnumVerdictFilter<'Scan'> | $Enums.Verdict;
      detailed_report?: JsonFilter<'Scan'>;
      created_at?: DateTimeFilter<'Scan'> | Date | string;
      user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
    },
    'id'
  >;

  export type ScanOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrderInput | SortOrder;
    input_content?: SortOrder;
    risk_score?: SortOrder;
    verdict?: SortOrder;
    detailed_report?: SortOrder;
    created_at?: SortOrder;
    _count?: ScanCountOrderByAggregateInput;
    _avg?: ScanAvgOrderByAggregateInput;
    _max?: ScanMaxOrderByAggregateInput;
    _min?: ScanMinOrderByAggregateInput;
    _sum?: ScanSumOrderByAggregateInput;
  };

  export type ScanScalarWhereWithAggregatesInput = {
    AND?:
      | ScanScalarWhereWithAggregatesInput
      | ScanScalarWhereWithAggregatesInput[];
    OR?: ScanScalarWhereWithAggregatesInput[];
    NOT?:
      | ScanScalarWhereWithAggregatesInput
      | ScanScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Scan'> | string;
    user_id?: StringNullableWithAggregatesFilter<'Scan'> | string | null;
    input_content?: StringWithAggregatesFilter<'Scan'> | string;
    risk_score?: IntWithAggregatesFilter<'Scan'> | number;
    verdict?: EnumVerdictWithAggregatesFilter<'Scan'> | $Enums.Verdict;
    detailed_report?: JsonWithAggregatesFilter<'Scan'>;
    created_at?: DateTimeWithAggregatesFilter<'Scan'> | Date | string;
  };

  export type BlacklistEntryWhereInput = {
    AND?: BlacklistEntryWhereInput | BlacklistEntryWhereInput[];
    OR?: BlacklistEntryWhereInput[];
    NOT?: BlacklistEntryWhereInput | BlacklistEntryWhereInput[];
    id?: StringFilter<'BlacklistEntry'> | string;
    pattern?: StringFilter<'BlacklistEntry'> | string;
    added_by?: StringFilter<'BlacklistEntry'> | string;
    reason?: StringFilter<'BlacklistEntry'> | string;
    created_at?: DateTimeFilter<'BlacklistEntry'> | Date | string;
    admin?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type BlacklistEntryOrderByWithRelationInput = {
    id?: SortOrder;
    pattern?: SortOrder;
    added_by?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
    admin?: UserOrderByWithRelationInput;
  };

  export type BlacklistEntryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BlacklistEntryWhereInput | BlacklistEntryWhereInput[];
      OR?: BlacklistEntryWhereInput[];
      NOT?: BlacklistEntryWhereInput | BlacklistEntryWhereInput[];
      pattern?: StringFilter<'BlacklistEntry'> | string;
      added_by?: StringFilter<'BlacklistEntry'> | string;
      reason?: StringFilter<'BlacklistEntry'> | string;
      created_at?: DateTimeFilter<'BlacklistEntry'> | Date | string;
      admin?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type BlacklistEntryOrderByWithAggregationInput = {
    id?: SortOrder;
    pattern?: SortOrder;
    added_by?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
    _count?: BlacklistEntryCountOrderByAggregateInput;
    _max?: BlacklistEntryMaxOrderByAggregateInput;
    _min?: BlacklistEntryMinOrderByAggregateInput;
  };

  export type BlacklistEntryScalarWhereWithAggregatesInput = {
    AND?:
      | BlacklistEntryScalarWhereWithAggregatesInput
      | BlacklistEntryScalarWhereWithAggregatesInput[];
    OR?: BlacklistEntryScalarWhereWithAggregatesInput[];
    NOT?:
      | BlacklistEntryScalarWhereWithAggregatesInput
      | BlacklistEntryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'BlacklistEntry'> | string;
    pattern?: StringWithAggregatesFilter<'BlacklistEntry'> | string;
    added_by?: StringWithAggregatesFilter<'BlacklistEntry'> | string;
    reason?: StringWithAggregatesFilter<'BlacklistEntry'> | string;
    created_at?: DateTimeWithAggregatesFilter<'BlacklistEntry'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    scans?: ScanCreateNestedManyWithoutUserInput;
    blacklist_entries?: BlacklistEntryCreateNestedManyWithoutAdminInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    scans?: ScanUncheckedCreateNestedManyWithoutUserInput;
    blacklist_entries?: BlacklistEntryUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    scans?: ScanUpdateManyWithoutUserNestedInput;
    blacklist_entries?: BlacklistEntryUpdateManyWithoutAdminNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    scans?: ScanUncheckedUpdateManyWithoutUserNestedInput;
    blacklist_entries?: BlacklistEntryUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScanCreateInput = {
    id?: string;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    user?: UserCreateNestedOneWithoutScansInput;
  };

  export type ScanUncheckedCreateInput = {
    id?: string;
    user_id?: string | null;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
  };

  export type ScanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutScansNestedInput;
  };

  export type ScanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScanCreateManyInput = {
    id?: string;
    user_id?: string | null;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
  };

  export type ScanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryCreateInput = {
    id?: string;
    pattern: string;
    reason: string;
    created_at?: Date | string;
    admin: UserCreateNestedOneWithoutBlacklist_entriesInput;
  };

  export type BlacklistEntryUncheckedCreateInput = {
    id?: string;
    pattern: string;
    added_by: string;
    reason: string;
    created_at?: Date | string;
  };

  export type BlacklistEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: UserUpdateOneRequiredWithoutBlacklist_entriesNestedInput;
  };

  export type BlacklistEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    added_by?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryCreateManyInput = {
    id?: string;
    pattern: string;
    added_by: string;
    reason: string;
    created_at?: Date | string;
  };

  export type BlacklistEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    added_by?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ScanListRelationFilter = {
    every?: ScanWhereInput;
    some?: ScanWhereInput;
    none?: ScanWhereInput;
  };

  export type BlacklistEntryListRelationFilter = {
    every?: BlacklistEntryWhereInput;
    some?: BlacklistEntryWhereInput;
    none?: BlacklistEntryWhereInput;
  };

  export type ScanOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BlacklistEntryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password_hash?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type EnumVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.Verdict | EnumVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    not?: NestedEnumVerdictFilter<$PrismaModel> | $Enums.Verdict;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ScanCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    input_content?: SortOrder;
    risk_score?: SortOrder;
    verdict?: SortOrder;
    detailed_report?: SortOrder;
    created_at?: SortOrder;
  };

  export type ScanAvgOrderByAggregateInput = {
    risk_score?: SortOrder;
  };

  export type ScanMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    input_content?: SortOrder;
    risk_score?: SortOrder;
    verdict?: SortOrder;
    created_at?: SortOrder;
  };

  export type ScanMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    input_content?: SortOrder;
    risk_score?: SortOrder;
    verdict?: SortOrder;
    created_at?: SortOrder;
  };

  export type ScanSumOrderByAggregateInput = {
    risk_score?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Verdict | EnumVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    not?: NestedEnumVerdictWithAggregatesFilter<$PrismaModel> | $Enums.Verdict;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVerdictFilter<$PrismaModel>;
    _max?: NestedEnumVerdictFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type BlacklistEntryCountOrderByAggregateInput = {
    id?: SortOrder;
    pattern?: SortOrder;
    added_by?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
  };

  export type BlacklistEntryMaxOrderByAggregateInput = {
    id?: SortOrder;
    pattern?: SortOrder;
    added_by?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
  };

  export type BlacklistEntryMinOrderByAggregateInput = {
    id?: SortOrder;
    pattern?: SortOrder;
    added_by?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
  };

  export type ScanCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ScanCreateWithoutUserInput, ScanUncheckedCreateWithoutUserInput>
      | ScanCreateWithoutUserInput[]
      | ScanUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ScanCreateOrConnectWithoutUserInput
      | ScanCreateOrConnectWithoutUserInput[];
    createMany?: ScanCreateManyUserInputEnvelope;
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
  };

  export type BlacklistEntryCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          BlacklistEntryCreateWithoutAdminInput,
          BlacklistEntryUncheckedCreateWithoutAdminInput
        >
      | BlacklistEntryCreateWithoutAdminInput[]
      | BlacklistEntryUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | BlacklistEntryCreateOrConnectWithoutAdminInput
      | BlacklistEntryCreateOrConnectWithoutAdminInput[];
    createMany?: BlacklistEntryCreateManyAdminInputEnvelope;
    connect?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
  };

  export type ScanUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ScanCreateWithoutUserInput, ScanUncheckedCreateWithoutUserInput>
      | ScanCreateWithoutUserInput[]
      | ScanUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ScanCreateOrConnectWithoutUserInput
      | ScanCreateOrConnectWithoutUserInput[];
    createMany?: ScanCreateManyUserInputEnvelope;
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
  };

  export type BlacklistEntryUncheckedCreateNestedManyWithoutAdminInput = {
    create?:
      | XOR<
          BlacklistEntryCreateWithoutAdminInput,
          BlacklistEntryUncheckedCreateWithoutAdminInput
        >
      | BlacklistEntryCreateWithoutAdminInput[]
      | BlacklistEntryUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | BlacklistEntryCreateOrConnectWithoutAdminInput
      | BlacklistEntryCreateOrConnectWithoutAdminInput[];
    createMany?: BlacklistEntryCreateManyAdminInputEnvelope;
    connect?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ScanUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ScanCreateWithoutUserInput, ScanUncheckedCreateWithoutUserInput>
      | ScanCreateWithoutUserInput[]
      | ScanUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ScanCreateOrConnectWithoutUserInput
      | ScanCreateOrConnectWithoutUserInput[];
    upsert?:
      | ScanUpsertWithWhereUniqueWithoutUserInput
      | ScanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ScanCreateManyUserInputEnvelope;
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    update?:
      | ScanUpdateWithWhereUniqueWithoutUserInput
      | ScanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ScanUpdateManyWithWhereWithoutUserInput
      | ScanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[];
  };

  export type BlacklistEntryUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          BlacklistEntryCreateWithoutAdminInput,
          BlacklistEntryUncheckedCreateWithoutAdminInput
        >
      | BlacklistEntryCreateWithoutAdminInput[]
      | BlacklistEntryUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | BlacklistEntryCreateOrConnectWithoutAdminInput
      | BlacklistEntryCreateOrConnectWithoutAdminInput[];
    upsert?:
      | BlacklistEntryUpsertWithWhereUniqueWithoutAdminInput
      | BlacklistEntryUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: BlacklistEntryCreateManyAdminInputEnvelope;
    set?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    disconnect?:
      | BlacklistEntryWhereUniqueInput
      | BlacklistEntryWhereUniqueInput[];
    delete?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    connect?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    update?:
      | BlacklistEntryUpdateWithWhereUniqueWithoutAdminInput
      | BlacklistEntryUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | BlacklistEntryUpdateManyWithWhereWithoutAdminInput
      | BlacklistEntryUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?:
      | BlacklistEntryScalarWhereInput
      | BlacklistEntryScalarWhereInput[];
  };

  export type ScanUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ScanCreateWithoutUserInput, ScanUncheckedCreateWithoutUserInput>
      | ScanCreateWithoutUserInput[]
      | ScanUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ScanCreateOrConnectWithoutUserInput
      | ScanCreateOrConnectWithoutUserInput[];
    upsert?:
      | ScanUpsertWithWhereUniqueWithoutUserInput
      | ScanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ScanCreateManyUserInputEnvelope;
    set?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    disconnect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    delete?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    connect?: ScanWhereUniqueInput | ScanWhereUniqueInput[];
    update?:
      | ScanUpdateWithWhereUniqueWithoutUserInput
      | ScanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ScanUpdateManyWithWhereWithoutUserInput
      | ScanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ScanScalarWhereInput | ScanScalarWhereInput[];
  };

  export type BlacklistEntryUncheckedUpdateManyWithoutAdminNestedInput = {
    create?:
      | XOR<
          BlacklistEntryCreateWithoutAdminInput,
          BlacklistEntryUncheckedCreateWithoutAdminInput
        >
      | BlacklistEntryCreateWithoutAdminInput[]
      | BlacklistEntryUncheckedCreateWithoutAdminInput[];
    connectOrCreate?:
      | BlacklistEntryCreateOrConnectWithoutAdminInput
      | BlacklistEntryCreateOrConnectWithoutAdminInput[];
    upsert?:
      | BlacklistEntryUpsertWithWhereUniqueWithoutAdminInput
      | BlacklistEntryUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: BlacklistEntryCreateManyAdminInputEnvelope;
    set?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    disconnect?:
      | BlacklistEntryWhereUniqueInput
      | BlacklistEntryWhereUniqueInput[];
    delete?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    connect?: BlacklistEntryWhereUniqueInput | BlacklistEntryWhereUniqueInput[];
    update?:
      | BlacklistEntryUpdateWithWhereUniqueWithoutAdminInput
      | BlacklistEntryUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?:
      | BlacklistEntryUpdateManyWithWhereWithoutAdminInput
      | BlacklistEntryUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?:
      | BlacklistEntryScalarWhereInput
      | BlacklistEntryScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutScansInput = {
    create?: XOR<
      UserCreateWithoutScansInput,
      UserUncheckedCreateWithoutScansInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutScansInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumVerdictFieldUpdateOperationsInput = {
    set?: $Enums.Verdict;
  };

  export type UserUpdateOneWithoutScansNestedInput = {
    create?: XOR<
      UserCreateWithoutScansInput,
      UserUncheckedCreateWithoutScansInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutScansInput;
    upsert?: UserUpsertWithoutScansInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutScansInput,
        UserUpdateWithoutScansInput
      >,
      UserUncheckedUpdateWithoutScansInput
    >;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserCreateNestedOneWithoutBlacklist_entriesInput = {
    create?: XOR<
      UserCreateWithoutBlacklist_entriesInput,
      UserUncheckedCreateWithoutBlacklist_entriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlacklist_entriesInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutBlacklist_entriesNestedInput = {
    create?: XOR<
      UserCreateWithoutBlacklist_entriesInput,
      UserUncheckedCreateWithoutBlacklist_entriesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBlacklist_entriesInput;
    upsert?: UserUpsertWithoutBlacklist_entriesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBlacklist_entriesInput,
        UserUpdateWithoutBlacklist_entriesInput
      >,
      UserUncheckedUpdateWithoutBlacklist_entriesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.Verdict | EnumVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    not?: NestedEnumVerdictFilter<$PrismaModel> | $Enums.Verdict;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Verdict | EnumVerdictFieldRefInput<$PrismaModel>;
    in?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Verdict[] | ListEnumVerdictFieldRefInput<$PrismaModel>;
    not?: NestedEnumVerdictWithAggregatesFilter<$PrismaModel> | $Enums.Verdict;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVerdictFilter<$PrismaModel>;
    _max?: NestedEnumVerdictFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ScanCreateWithoutUserInput = {
    id?: string;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
  };

  export type ScanUncheckedCreateWithoutUserInput = {
    id?: string;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
  };

  export type ScanCreateOrConnectWithoutUserInput = {
    where: ScanWhereUniqueInput;
    create: XOR<
      ScanCreateWithoutUserInput,
      ScanUncheckedCreateWithoutUserInput
    >;
  };

  export type ScanCreateManyUserInputEnvelope = {
    data: ScanCreateManyUserInput | ScanCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type BlacklistEntryCreateWithoutAdminInput = {
    id?: string;
    pattern: string;
    reason: string;
    created_at?: Date | string;
  };

  export type BlacklistEntryUncheckedCreateWithoutAdminInput = {
    id?: string;
    pattern: string;
    reason: string;
    created_at?: Date | string;
  };

  export type BlacklistEntryCreateOrConnectWithoutAdminInput = {
    where: BlacklistEntryWhereUniqueInput;
    create: XOR<
      BlacklistEntryCreateWithoutAdminInput,
      BlacklistEntryUncheckedCreateWithoutAdminInput
    >;
  };

  export type BlacklistEntryCreateManyAdminInputEnvelope = {
    data:
      | BlacklistEntryCreateManyAdminInput
      | BlacklistEntryCreateManyAdminInput[];
    skipDuplicates?: boolean;
  };

  export type ScanUpsertWithWhereUniqueWithoutUserInput = {
    where: ScanWhereUniqueInput;
    update: XOR<
      ScanUpdateWithoutUserInput,
      ScanUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ScanCreateWithoutUserInput,
      ScanUncheckedCreateWithoutUserInput
    >;
  };

  export type ScanUpdateWithWhereUniqueWithoutUserInput = {
    where: ScanWhereUniqueInput;
    data: XOR<ScanUpdateWithoutUserInput, ScanUncheckedUpdateWithoutUserInput>;
  };

  export type ScanUpdateManyWithWhereWithoutUserInput = {
    where: ScanScalarWhereInput;
    data: XOR<
      ScanUpdateManyMutationInput,
      ScanUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ScanScalarWhereInput = {
    AND?: ScanScalarWhereInput | ScanScalarWhereInput[];
    OR?: ScanScalarWhereInput[];
    NOT?: ScanScalarWhereInput | ScanScalarWhereInput[];
    id?: StringFilter<'Scan'> | string;
    user_id?: StringNullableFilter<'Scan'> | string | null;
    input_content?: StringFilter<'Scan'> | string;
    risk_score?: IntFilter<'Scan'> | number;
    verdict?: EnumVerdictFilter<'Scan'> | $Enums.Verdict;
    detailed_report?: JsonFilter<'Scan'>;
    created_at?: DateTimeFilter<'Scan'> | Date | string;
  };

  export type BlacklistEntryUpsertWithWhereUniqueWithoutAdminInput = {
    where: BlacklistEntryWhereUniqueInput;
    update: XOR<
      BlacklistEntryUpdateWithoutAdminInput,
      BlacklistEntryUncheckedUpdateWithoutAdminInput
    >;
    create: XOR<
      BlacklistEntryCreateWithoutAdminInput,
      BlacklistEntryUncheckedCreateWithoutAdminInput
    >;
  };

  export type BlacklistEntryUpdateWithWhereUniqueWithoutAdminInput = {
    where: BlacklistEntryWhereUniqueInput;
    data: XOR<
      BlacklistEntryUpdateWithoutAdminInput,
      BlacklistEntryUncheckedUpdateWithoutAdminInput
    >;
  };

  export type BlacklistEntryUpdateManyWithWhereWithoutAdminInput = {
    where: BlacklistEntryScalarWhereInput;
    data: XOR<
      BlacklistEntryUpdateManyMutationInput,
      BlacklistEntryUncheckedUpdateManyWithoutAdminInput
    >;
  };

  export type BlacklistEntryScalarWhereInput = {
    AND?: BlacklistEntryScalarWhereInput | BlacklistEntryScalarWhereInput[];
    OR?: BlacklistEntryScalarWhereInput[];
    NOT?: BlacklistEntryScalarWhereInput | BlacklistEntryScalarWhereInput[];
    id?: StringFilter<'BlacklistEntry'> | string;
    pattern?: StringFilter<'BlacklistEntry'> | string;
    added_by?: StringFilter<'BlacklistEntry'> | string;
    reason?: StringFilter<'BlacklistEntry'> | string;
    created_at?: DateTimeFilter<'BlacklistEntry'> | Date | string;
  };

  export type UserCreateWithoutScansInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    blacklist_entries?: BlacklistEntryCreateNestedManyWithoutAdminInput;
  };

  export type UserUncheckedCreateWithoutScansInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    blacklist_entries?: BlacklistEntryUncheckedCreateNestedManyWithoutAdminInput;
  };

  export type UserCreateOrConnectWithoutScansInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutScansInput,
      UserUncheckedCreateWithoutScansInput
    >;
  };

  export type UserUpsertWithoutScansInput = {
    update: XOR<
      UserUpdateWithoutScansInput,
      UserUncheckedUpdateWithoutScansInput
    >;
    create: XOR<
      UserCreateWithoutScansInput,
      UserUncheckedCreateWithoutScansInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutScansInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutScansInput,
      UserUncheckedUpdateWithoutScansInput
    >;
  };

  export type UserUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blacklist_entries?: BlacklistEntryUpdateManyWithoutAdminNestedInput;
  };

  export type UserUncheckedUpdateWithoutScansInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blacklist_entries?: BlacklistEntryUncheckedUpdateManyWithoutAdminNestedInput;
  };

  export type UserCreateWithoutBlacklist_entriesInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    scans?: ScanCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutBlacklist_entriesInput = {
    id?: string;
    email: string;
    password_hash: string;
    role?: $Enums.Role;
    created_at?: Date | string;
    scans?: ScanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutBlacklist_entriesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBlacklist_entriesInput,
      UserUncheckedCreateWithoutBlacklist_entriesInput
    >;
  };

  export type UserUpsertWithoutBlacklist_entriesInput = {
    update: XOR<
      UserUpdateWithoutBlacklist_entriesInput,
      UserUncheckedUpdateWithoutBlacklist_entriesInput
    >;
    create: XOR<
      UserCreateWithoutBlacklist_entriesInput,
      UserUncheckedCreateWithoutBlacklist_entriesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBlacklist_entriesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBlacklist_entriesInput,
      UserUncheckedUpdateWithoutBlacklist_entriesInput
    >;
  };

  export type UserUpdateWithoutBlacklist_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    scans?: ScanUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutBlacklist_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password_hash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    scans?: ScanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ScanCreateManyUserInput = {
    id?: string;
    input_content: string;
    risk_score: number;
    verdict: $Enums.Verdict;
    detailed_report: JsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
  };

  export type BlacklistEntryCreateManyAdminInput = {
    id?: string;
    pattern: string;
    reason: string;
    created_at?: Date | string;
  };

  export type ScanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    input_content?: StringFieldUpdateOperationsInput | string;
    risk_score?: IntFieldUpdateOperationsInput | number;
    verdict?: EnumVerdictFieldUpdateOperationsInput | $Enums.Verdict;
    detailed_report?: JsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BlacklistEntryUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pattern?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ScanDefaultArgs instead
   */
  export type ScanArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ScanDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use BlacklistEntryDefaultArgs instead
   */
  export type BlacklistEntryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = BlacklistEntryDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
