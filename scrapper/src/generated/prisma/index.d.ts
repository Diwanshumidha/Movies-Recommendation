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
 * Model ScrapeStat
 *
 */
export type ScrapeStat = $Result.DefaultSelection<Prisma.$ScrapeStatPayload>;
/**
 * Model Movie
 *
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScrapeStats
 * const scrapeStats = await prisma.scrapeStat.findMany()
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
   * // Fetch zero or more ScrapeStats
   * const scrapeStats = await prisma.scrapeStat.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): PrismaClient;

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
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.scrapeStat`: Exposes CRUD operations for the **ScrapeStat** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ScrapeStats
   * const scrapeStats = await prisma.scrapeStat.findMany()
   * ```
   */
  get scrapeStat(): Prisma.ScrapeStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

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

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
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
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
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
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
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

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

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

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    ScrapeStat: 'ScrapeStat';
    Movie: 'Movie';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'scrapeStat' | 'movie';
      txIsolationLevel: never;
    };
    model: {
      ScrapeStat: {
        payload: Prisma.$ScrapeStatPayload<ExtArgs>;
        fields: Prisma.ScrapeStatFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ScrapeStatFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ScrapeStatFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          findFirst: {
            args: Prisma.ScrapeStatFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ScrapeStatFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          findMany: {
            args: Prisma.ScrapeStatFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>[];
          };
          create: {
            args: Prisma.ScrapeStatCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          createMany: {
            args: Prisma.ScrapeStatCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ScrapeStatDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          update: {
            args: Prisma.ScrapeStatUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          deleteMany: {
            args: Prisma.ScrapeStatDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ScrapeStatUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ScrapeStatUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ScrapeStatPayload>;
          };
          aggregate: {
            args: Prisma.ScrapeStatAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateScrapeStat>;
          };
          groupBy: {
            args: Prisma.ScrapeStatGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScrapeStatGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.ScrapeStatFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.ScrapeStatAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.ScrapeStatCountArgs<ExtArgs>;
            result: $Utils.Optional<ScrapeStatCountAggregateOutputType> | number;
          };
        };
      };
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>;
        fields: Prisma.MovieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[];
          };
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.MovieFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.MovieAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
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
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    scrapeStat?: ScrapeStatOmit;
    movie?: MovieOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
    | 'updateManyAndReturn'
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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model ScrapeStat
   */

  export type AggregateScrapeStat = {
    _count: ScrapeStatCountAggregateOutputType | null;
    _avg: ScrapeStatAvgAggregateOutputType | null;
    _sum: ScrapeStatSumAggregateOutputType | null;
    _min: ScrapeStatMinAggregateOutputType | null;
    _max: ScrapeStatMaxAggregateOutputType | null;
  };

  export type ScrapeStatAvgAggregateOutputType = {
    lastFetched: number | null;
    totalPages: number | null;
  };

  export type ScrapeStatSumAggregateOutputType = {
    lastFetched: number | null;
    totalPages: number | null;
  };

  export type ScrapeStatMinAggregateOutputType = {
    id: string | null;
    lastFetched: number | null;
    totalPages: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ScrapeStatMaxAggregateOutputType = {
    id: string | null;
    lastFetched: number | null;
    totalPages: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ScrapeStatCountAggregateOutputType = {
    id: number;
    lastFetched: number;
    totalPages: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ScrapeStatAvgAggregateInputType = {
    lastFetched?: true;
    totalPages?: true;
  };

  export type ScrapeStatSumAggregateInputType = {
    lastFetched?: true;
    totalPages?: true;
  };

  export type ScrapeStatMinAggregateInputType = {
    id?: true;
    lastFetched?: true;
    totalPages?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ScrapeStatMaxAggregateInputType = {
    id?: true;
    lastFetched?: true;
    totalPages?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ScrapeStatCountAggregateInputType = {
    id?: true;
    lastFetched?: true;
    totalPages?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ScrapeStatAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ScrapeStat to aggregate.
     */
    where?: ScrapeStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScrapeStats to fetch.
     */
    orderBy?: ScrapeStatOrderByWithRelationInput | ScrapeStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ScrapeStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScrapeStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScrapeStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ScrapeStats
     **/
    _count?: true | ScrapeStatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ScrapeStatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ScrapeStatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScrapeStatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScrapeStatMaxAggregateInputType;
  };

  export type GetScrapeStatAggregateType<T extends ScrapeStatAggregateArgs> = {
    [P in keyof T & keyof AggregateScrapeStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeStat[P]>
      : GetScalarType<T[P], AggregateScrapeStat[P]>;
  };

  export type ScrapeStatGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ScrapeStatWhereInput;
    orderBy?: ScrapeStatOrderByWithAggregationInput | ScrapeStatOrderByWithAggregationInput[];
    by: ScrapeStatScalarFieldEnum[] | ScrapeStatScalarFieldEnum;
    having?: ScrapeStatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScrapeStatCountAggregateInputType | true;
    _avg?: ScrapeStatAvgAggregateInputType;
    _sum?: ScrapeStatSumAggregateInputType;
    _min?: ScrapeStatMinAggregateInputType;
    _max?: ScrapeStatMaxAggregateInputType;
  };

  export type ScrapeStatGroupByOutputType = {
    id: string;
    lastFetched: number;
    totalPages: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ScrapeStatCountAggregateOutputType | null;
    _avg: ScrapeStatAvgAggregateOutputType | null;
    _sum: ScrapeStatSumAggregateOutputType | null;
    _min: ScrapeStatMinAggregateOutputType | null;
    _max: ScrapeStatMaxAggregateOutputType | null;
  };

  type GetScrapeStatGroupByPayload<T extends ScrapeStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeStatGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScrapeStatGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScrapeStatGroupByOutputType[P]>
          : GetScalarType<T[P], ScrapeStatGroupByOutputType[P]>;
      }
    >
  >;

  export type ScrapeStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        lastFetched?: boolean;
        totalPages?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
      },
      ExtArgs['result']['scrapeStat']
    >;

  export type ScrapeStatSelectScalar = {
    id?: boolean;
    lastFetched?: boolean;
    totalPages?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ScrapeStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'lastFetched' | 'totalPages' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['scrapeStat']
    >;

  export type $ScrapeStatPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ScrapeStat';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        lastFetched: number;
        totalPages: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['scrapeStat']
    >;
    composites: {};
  };

  type ScrapeStatGetPayload<S extends boolean | null | undefined | ScrapeStatDefaultArgs> =
    $Result.GetResult<Prisma.$ScrapeStatPayload, S>;

  type ScrapeStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeStatCountAggregateInputType | true;
    };

  export interface ScrapeStatDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ScrapeStat'];
      meta: { name: 'ScrapeStat' };
    };
    /**
     * Find zero or one ScrapeStat that matches the filter.
     * @param {ScrapeStatFindUniqueArgs} args - Arguments to find a ScrapeStat
     * @example
     * // Get one ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeStatFindUniqueArgs>(
      args: SelectSubset<T, ScrapeStatFindUniqueArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<
        Prisma.$ScrapeStatPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ScrapeStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeStatFindUniqueOrThrowArgs} args - Arguments to find a ScrapeStat
     * @example
     * // Get one ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeStatFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ScrapeStatFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<
        Prisma.$ScrapeStatPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ScrapeStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatFindFirstArgs} args - Arguments to find a ScrapeStat
     * @example
     * // Get one ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeStatFindFirstArgs>(
      args?: SelectSubset<T, ScrapeStatFindFirstArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<
        Prisma.$ScrapeStatPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ScrapeStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatFindFirstOrThrowArgs} args - Arguments to find a ScrapeStat
     * @example
     * // Get one ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeStatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScrapeStatFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<
        Prisma.$ScrapeStatPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ScrapeStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeStats
     * const scrapeStats = await prisma.scrapeStat.findMany()
     *
     * // Get first 10 ScrapeStats
     * const scrapeStats = await prisma.scrapeStat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scrapeStatWithIdOnly = await prisma.scrapeStat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ScrapeStatFindManyArgs>(
      args?: SelectSubset<T, ScrapeStatFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ScrapeStatPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a ScrapeStat.
     * @param {ScrapeStatCreateArgs} args - Arguments to create a ScrapeStat.
     * @example
     * // Create one ScrapeStat
     * const ScrapeStat = await prisma.scrapeStat.create({
     *   data: {
     *     // ... data to create a ScrapeStat
     *   }
     * })
     *
     */
    create<T extends ScrapeStatCreateArgs>(
      args: SelectSubset<T, ScrapeStatCreateArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<Prisma.$ScrapeStatPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ScrapeStats.
     * @param {ScrapeStatCreateManyArgs} args - Arguments to create many ScrapeStats.
     * @example
     * // Create many ScrapeStats
     * const scrapeStat = await prisma.scrapeStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ScrapeStatCreateManyArgs>(
      args?: SelectSubset<T, ScrapeStatCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a ScrapeStat.
     * @param {ScrapeStatDeleteArgs} args - Arguments to delete one ScrapeStat.
     * @example
     * // Delete one ScrapeStat
     * const ScrapeStat = await prisma.scrapeStat.delete({
     *   where: {
     *     // ... filter to delete one ScrapeStat
     *   }
     * })
     *
     */
    delete<T extends ScrapeStatDeleteArgs>(
      args: SelectSubset<T, ScrapeStatDeleteArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<Prisma.$ScrapeStatPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ScrapeStat.
     * @param {ScrapeStatUpdateArgs} args - Arguments to update one ScrapeStat.
     * @example
     * // Update one ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ScrapeStatUpdateArgs>(
      args: SelectSubset<T, ScrapeStatUpdateArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<Prisma.$ScrapeStatPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ScrapeStats.
     * @param {ScrapeStatDeleteManyArgs} args - Arguments to filter ScrapeStats to delete.
     * @example
     * // Delete a few ScrapeStats
     * const { count } = await prisma.scrapeStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ScrapeStatDeleteManyArgs>(
      args?: SelectSubset<T, ScrapeStatDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ScrapeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeStats
     * const scrapeStat = await prisma.scrapeStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ScrapeStatUpdateManyArgs>(
      args: SelectSubset<T, ScrapeStatUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one ScrapeStat.
     * @param {ScrapeStatUpsertArgs} args - Arguments to update or create a ScrapeStat.
     * @example
     * // Update or create a ScrapeStat
     * const scrapeStat = await prisma.scrapeStat.upsert({
     *   create: {
     *     // ... data to create a ScrapeStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeStat we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeStatUpsertArgs>(
      args: SelectSubset<T, ScrapeStatUpsertArgs<ExtArgs>>,
    ): Prisma__ScrapeStatClient<
      $Result.GetResult<Prisma.$ScrapeStatPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ScrapeStats that matches the filter.
     * @param {ScrapeStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scrapeStat = await prisma.scrapeStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScrapeStatFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a ScrapeStat.
     * @param {ScrapeStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scrapeStat = await prisma.scrapeStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScrapeStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of ScrapeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatCountArgs} args - Arguments to filter ScrapeStats to count.
     * @example
     * // Count the number of ScrapeStats
     * const count = await prisma.scrapeStat.count({
     *   where: {
     *     // ... the filter for the ScrapeStats we want to count
     *   }
     * })
     **/
    count<T extends ScrapeStatCountArgs>(
      args?: Subset<T, ScrapeStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeStatCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ScrapeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScrapeStatAggregateArgs>(
      args: Subset<T, ScrapeStatAggregateArgs>,
    ): Prisma.PrismaPromise<GetScrapeStatAggregateType<T>>;

    /**
     * Group by ScrapeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeStatGroupByArgs} args - Group by arguments.
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
      T extends ScrapeStatGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeStatGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, ScrapeStatGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScrapeStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ScrapeStat model
     */
    readonly fields: ScrapeStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeStatClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ScrapeStat model
   */
  interface ScrapeStatFieldRefs {
    readonly id: FieldRef<'ScrapeStat', 'String'>;
    readonly lastFetched: FieldRef<'ScrapeStat', 'Int'>;
    readonly totalPages: FieldRef<'ScrapeStat', 'Int'>;
    readonly createdAt: FieldRef<'ScrapeStat', 'DateTime'>;
    readonly updatedAt: FieldRef<'ScrapeStat', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ScrapeStat findUnique
   */
  export type ScrapeStatFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter, which ScrapeStat to fetch.
     */
    where: ScrapeStatWhereUniqueInput;
  };

  /**
   * ScrapeStat findUniqueOrThrow
   */
  export type ScrapeStatFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter, which ScrapeStat to fetch.
     */
    where: ScrapeStatWhereUniqueInput;
  };

  /**
   * ScrapeStat findFirst
   */
  export type ScrapeStatFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter, which ScrapeStat to fetch.
     */
    where?: ScrapeStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScrapeStats to fetch.
     */
    orderBy?: ScrapeStatOrderByWithRelationInput | ScrapeStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ScrapeStats.
     */
    cursor?: ScrapeStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScrapeStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScrapeStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ScrapeStats.
     */
    distinct?: ScrapeStatScalarFieldEnum | ScrapeStatScalarFieldEnum[];
  };

  /**
   * ScrapeStat findFirstOrThrow
   */
  export type ScrapeStatFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter, which ScrapeStat to fetch.
     */
    where?: ScrapeStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScrapeStats to fetch.
     */
    orderBy?: ScrapeStatOrderByWithRelationInput | ScrapeStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ScrapeStats.
     */
    cursor?: ScrapeStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScrapeStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScrapeStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ScrapeStats.
     */
    distinct?: ScrapeStatScalarFieldEnum | ScrapeStatScalarFieldEnum[];
  };

  /**
   * ScrapeStat findMany
   */
  export type ScrapeStatFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter, which ScrapeStats to fetch.
     */
    where?: ScrapeStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScrapeStats to fetch.
     */
    orderBy?: ScrapeStatOrderByWithRelationInput | ScrapeStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ScrapeStats.
     */
    cursor?: ScrapeStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScrapeStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScrapeStats.
     */
    skip?: number;
    distinct?: ScrapeStatScalarFieldEnum | ScrapeStatScalarFieldEnum[];
  };

  /**
   * ScrapeStat create
   */
  export type ScrapeStatCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * The data needed to create a ScrapeStat.
     */
    data: XOR<ScrapeStatCreateInput, ScrapeStatUncheckedCreateInput>;
  };

  /**
   * ScrapeStat createMany
   */
  export type ScrapeStatCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ScrapeStats.
     */
    data: ScrapeStatCreateManyInput | ScrapeStatCreateManyInput[];
  };

  /**
   * ScrapeStat update
   */
  export type ScrapeStatUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * The data needed to update a ScrapeStat.
     */
    data: XOR<ScrapeStatUpdateInput, ScrapeStatUncheckedUpdateInput>;
    /**
     * Choose, which ScrapeStat to update.
     */
    where: ScrapeStatWhereUniqueInput;
  };

  /**
   * ScrapeStat updateMany
   */
  export type ScrapeStatUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ScrapeStats.
     */
    data: XOR<ScrapeStatUpdateManyMutationInput, ScrapeStatUncheckedUpdateManyInput>;
    /**
     * Filter which ScrapeStats to update
     */
    where?: ScrapeStatWhereInput;
    /**
     * Limit how many ScrapeStats to update.
     */
    limit?: number;
  };

  /**
   * ScrapeStat upsert
   */
  export type ScrapeStatUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * The filter to search for the ScrapeStat to update in case it exists.
     */
    where: ScrapeStatWhereUniqueInput;
    /**
     * In case the ScrapeStat found by the `where` argument doesn't exist, create a new ScrapeStat with this data.
     */
    create: XOR<ScrapeStatCreateInput, ScrapeStatUncheckedCreateInput>;
    /**
     * In case the ScrapeStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeStatUpdateInput, ScrapeStatUncheckedUpdateInput>;
  };

  /**
   * ScrapeStat delete
   */
  export type ScrapeStatDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
    /**
     * Filter which ScrapeStat to delete.
     */
    where: ScrapeStatWhereUniqueInput;
  };

  /**
   * ScrapeStat deleteMany
   */
  export type ScrapeStatDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ScrapeStats to delete
     */
    where?: ScrapeStatWhereInput;
    /**
     * Limit how many ScrapeStats to delete.
     */
    limit?: number;
  };

  /**
   * ScrapeStat findRaw
   */
  export type ScrapeStatFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * ScrapeStat aggregateRaw
   */
  export type ScrapeStatAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * ScrapeStat without action
   */
  export type ScrapeStatDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ScrapeStat
     */
    select?: ScrapeStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScrapeStat
     */
    omit?: ScrapeStatOmit<ExtArgs> | null;
  };

  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    popularity: number | null;
    vote_average: number | null;
    vote_count: number | null;
  };

  export type MovieSumAggregateOutputType = {
    popularity: number | null;
    vote_average: number | null;
    vote_count: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    adult: boolean | null;
    backdrop_path: string | null;
    tmdbId: string | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: number | null;
    poster_path: string | null;
    release_date: string | null;
    title: string | null;
    video: boolean | null;
    vote_average: number | null;
    vote_count: number | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    adult: boolean | null;
    backdrop_path: string | null;
    tmdbId: string | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: number | null;
    poster_path: string | null;
    release_date: string | null;
    title: string | null;
    video: boolean | null;
    vote_average: number | null;
    vote_count: number | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    adult: number;
    backdrop_path: number;
    genre_ids: number;
    tmdbId: number;
    original_language: number;
    original_title: number;
    overview: number;
    popularity: number;
    poster_path: number;
    release_date: number;
    title: number;
    video: number;
    vote_average: number;
    vote_count: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    popularity?: true;
    vote_average?: true;
    vote_count?: true;
  };

  export type MovieSumAggregateInputType = {
    popularity?: true;
    vote_average?: true;
    vote_count?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    adult?: true;
    backdrop_path?: true;
    tmdbId?: true;
    original_language?: true;
    original_title?: true;
    overview?: true;
    popularity?: true;
    poster_path?: true;
    release_date?: true;
    title?: true;
    video?: true;
    vote_average?: true;
    vote_count?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    adult?: true;
    backdrop_path?: true;
    tmdbId?: true;
    original_language?: true;
    original_title?: true;
    overview?: true;
    popularity?: true;
    poster_path?: true;
    release_date?: true;
    title?: true;
    video?: true;
    vote_average?: true;
    vote_count?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    adult?: true;
    backdrop_path?: true;
    genre_ids?: true;
    tmdbId?: true;
    original_language?: true;
    original_title?: true;
    overview?: true;
    popularity?: true;
    poster_path?: true;
    release_date?: true;
    title?: true;
    video?: true;
    vote_average?: true;
    vote_count?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[];
      by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
      having?: MovieScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: MovieCountAggregateInputType | true;
      _avg?: MovieAvgAggregateInputType;
      _sum?: MovieSumAggregateInputType;
      _min?: MovieMinAggregateInputType;
      _max?: MovieMaxAggregateInputType;
    };

  export type MovieGroupByOutputType = {
    id: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: string[];
    tmdbId: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
          : GetScalarType<T[P], MovieGroupByOutputType[P]>;
      }
    >
  >;

  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        adult?: boolean;
        backdrop_path?: boolean;
        genre_ids?: boolean;
        tmdbId?: boolean;
        original_language?: boolean;
        original_title?: boolean;
        overview?: boolean;
        popularity?: boolean;
        poster_path?: boolean;
        release_date?: boolean;
        title?: boolean;
        video?: boolean;
        vote_average?: boolean;
        vote_count?: boolean;
      },
      ExtArgs['result']['movie']
    >;

  export type MovieSelectScalar = {
    id?: boolean;
    adult?: boolean;
    backdrop_path?: boolean;
    genre_ids?: boolean;
    tmdbId?: boolean;
    original_language?: boolean;
    original_title?: boolean;
    overview?: boolean;
    popularity?: boolean;
    poster_path?: boolean;
    release_date?: boolean;
    title?: boolean;
    video?: boolean;
    vote_average?: boolean;
    vote_count?: boolean;
  };

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'adult'
      | 'backdrop_path'
      | 'genre_ids'
      | 'tmdbId'
      | 'original_language'
      | 'original_title'
      | 'overview'
      | 'popularity'
      | 'poster_path'
      | 'release_date'
      | 'title'
      | 'video'
      | 'vote_average'
      | 'vote_count',
      ExtArgs['result']['movie']
    >;

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Movie';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        adult: boolean;
        backdrop_path: string;
        genre_ids: string[];
        tmdbId: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<
    Prisma.$MoviePayload,
    S
  >;

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MovieFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface MovieDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie']; meta: { name: 'Movie' } };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     */
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     */
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>,
    ): Prisma__MovieClient<
      $Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MovieFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movie = await prisma.movie.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MovieFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Movie.
     * @param {MovieAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movie = await prisma.movie.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MovieAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Movie model
     */
    readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<'Movie', 'String'>;
    readonly adult: FieldRef<'Movie', 'Boolean'>;
    readonly backdrop_path: FieldRef<'Movie', 'String'>;
    readonly genre_ids: FieldRef<'Movie', 'String[]'>;
    readonly tmdbId: FieldRef<'Movie', 'String'>;
    readonly original_language: FieldRef<'Movie', 'String'>;
    readonly original_title: FieldRef<'Movie', 'String'>;
    readonly overview: FieldRef<'Movie', 'String'>;
    readonly popularity: FieldRef<'Movie', 'Int'>;
    readonly poster_path: FieldRef<'Movie', 'String'>;
    readonly release_date: FieldRef<'Movie', 'String'>;
    readonly title: FieldRef<'Movie', 'String'>;
    readonly video: FieldRef<'Movie', 'Boolean'>;
    readonly vote_average: FieldRef<'Movie', 'Int'>;
    readonly vote_count: FieldRef<'Movie', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput;
  };

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null;
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Movie
       */
      select?: MovieSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Movie
       */
      omit?: MovieOmit<ExtArgs> | null;
      /**
       * The data needed to create a Movie.
       */
      data: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
    };

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[];
  };

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Movie
       */
      select?: MovieSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Movie
       */
      omit?: MovieOmit<ExtArgs> | null;
      /**
       * The data needed to update a Movie.
       */
      data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
      /**
       * Choose, which Movie to update.
       */
      where: MovieWhereUniqueInput;
    };

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>;
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput;
    /**
     * Limit how many Movies to update.
     */
    limit?: number;
  };

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Movie
       */
      select?: MovieSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Movie
       */
      omit?: MovieOmit<ExtArgs> | null;
      /**
       * The filter to search for the Movie to update in case it exists.
       */
      where: MovieWhereUniqueInput;
      /**
       * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
       */
      create: XOR<MovieCreateInput, MovieUncheckedCreateInput>;
      /**
       * In case the Movie was found with the provided `where` argument, update it with this data.
       */
      update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>;
    };

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Movie
       */
      select?: MovieSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Movie
       */
      omit?: MovieOmit<ExtArgs> | null;
      /**
       * Filter which Movie to delete.
       */
      where: MovieWhereUniqueInput;
    };

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput;
    /**
     * Limit how many Movies to delete.
     */
    limit?: number;
  };

  /**
   * Movie findRaw
   */
  export type MovieFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
       */
      filter?: InputJsonValue;
      /**
       * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
       */
      options?: InputJsonValue;
    };

  /**
   * Movie aggregateRaw
   */
  export type MovieAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Movie
       */
      select?: MovieSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Movie
       */
      omit?: MovieOmit<ExtArgs> | null;
    };

  /**
   * Enums
   */

  export const ScrapeStatScalarFieldEnum: {
    id: 'id';
    lastFetched: 'lastFetched';
    totalPages: 'totalPages';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ScrapeStatScalarFieldEnum =
    (typeof ScrapeStatScalarFieldEnum)[keyof typeof ScrapeStatScalarFieldEnum];

  export const MovieScalarFieldEnum: {
    id: 'id';
    adult: 'adult';
    backdrop_path: 'backdrop_path';
    genre_ids: 'genre_ids';
    tmdbId: 'tmdbId';
    original_language: 'original_language';
    original_title: 'original_title';
    overview: 'overview';
    popularity: 'popularity';
    poster_path: 'poster_path';
    release_date: 'release_date';
    title: 'title';
    video: 'video';
    vote_average: 'vote_average';
    vote_count: 'vote_count';
  };

  export type MovieScalarFieldEnum =
    (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type ScrapeStatWhereInput = {
    AND?: ScrapeStatWhereInput | ScrapeStatWhereInput[];
    OR?: ScrapeStatWhereInput[];
    NOT?: ScrapeStatWhereInput | ScrapeStatWhereInput[];
    id?: StringFilter<'ScrapeStat'> | string;
    lastFetched?: IntFilter<'ScrapeStat'> | number;
    totalPages?: IntFilter<'ScrapeStat'> | number;
    createdAt?: DateTimeFilter<'ScrapeStat'> | Date | string;
    updatedAt?: DateTimeFilter<'ScrapeStat'> | Date | string;
  };

  export type ScrapeStatOrderByWithRelationInput = {
    id?: SortOrder;
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ScrapeStatWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ScrapeStatWhereInput | ScrapeStatWhereInput[];
      OR?: ScrapeStatWhereInput[];
      NOT?: ScrapeStatWhereInput | ScrapeStatWhereInput[];
      lastFetched?: IntFilter<'ScrapeStat'> | number;
      totalPages?: IntFilter<'ScrapeStat'> | number;
      createdAt?: DateTimeFilter<'ScrapeStat'> | Date | string;
      updatedAt?: DateTimeFilter<'ScrapeStat'> | Date | string;
    },
    'id'
  >;

  export type ScrapeStatOrderByWithAggregationInput = {
    id?: SortOrder;
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ScrapeStatCountOrderByAggregateInput;
    _avg?: ScrapeStatAvgOrderByAggregateInput;
    _max?: ScrapeStatMaxOrderByAggregateInput;
    _min?: ScrapeStatMinOrderByAggregateInput;
    _sum?: ScrapeStatSumOrderByAggregateInput;
  };

  export type ScrapeStatScalarWhereWithAggregatesInput = {
    AND?: ScrapeStatScalarWhereWithAggregatesInput | ScrapeStatScalarWhereWithAggregatesInput[];
    OR?: ScrapeStatScalarWhereWithAggregatesInput[];
    NOT?: ScrapeStatScalarWhereWithAggregatesInput | ScrapeStatScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ScrapeStat'> | string;
    lastFetched?: IntWithAggregatesFilter<'ScrapeStat'> | number;
    totalPages?: IntWithAggregatesFilter<'ScrapeStat'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'ScrapeStat'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'ScrapeStat'> | Date | string;
  };

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[];
    OR?: MovieWhereInput[];
    NOT?: MovieWhereInput | MovieWhereInput[];
    id?: StringFilter<'Movie'> | string;
    adult?: BoolFilter<'Movie'> | boolean;
    backdrop_path?: StringFilter<'Movie'> | string;
    genre_ids?: StringNullableListFilter<'Movie'>;
    tmdbId?: StringFilter<'Movie'> | string;
    original_language?: StringFilter<'Movie'> | string;
    original_title?: StringFilter<'Movie'> | string;
    overview?: StringFilter<'Movie'> | string;
    popularity?: IntFilter<'Movie'> | number;
    poster_path?: StringFilter<'Movie'> | string;
    release_date?: StringFilter<'Movie'> | string;
    title?: StringFilter<'Movie'> | string;
    video?: BoolFilter<'Movie'> | boolean;
    vote_average?: IntFilter<'Movie'> | number;
    vote_count?: IntFilter<'Movie'> | number;
  };

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder;
    adult?: SortOrder;
    backdrop_path?: SortOrder;
    genre_ids?: SortOrder;
    tmdbId?: SortOrder;
    original_language?: SortOrder;
    original_title?: SortOrder;
    overview?: SortOrder;
    popularity?: SortOrder;
    poster_path?: SortOrder;
    release_date?: SortOrder;
    title?: SortOrder;
    video?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type MovieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      tmdbId?: string;
      AND?: MovieWhereInput | MovieWhereInput[];
      OR?: MovieWhereInput[];
      NOT?: MovieWhereInput | MovieWhereInput[];
      adult?: BoolFilter<'Movie'> | boolean;
      backdrop_path?: StringFilter<'Movie'> | string;
      genre_ids?: StringNullableListFilter<'Movie'>;
      original_language?: StringFilter<'Movie'> | string;
      original_title?: StringFilter<'Movie'> | string;
      overview?: StringFilter<'Movie'> | string;
      popularity?: IntFilter<'Movie'> | number;
      poster_path?: StringFilter<'Movie'> | string;
      release_date?: StringFilter<'Movie'> | string;
      title?: StringFilter<'Movie'> | string;
      video?: BoolFilter<'Movie'> | boolean;
      vote_average?: IntFilter<'Movie'> | number;
      vote_count?: IntFilter<'Movie'> | number;
    },
    'id' | 'tmdbId'
  >;

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder;
    adult?: SortOrder;
    backdrop_path?: SortOrder;
    genre_ids?: SortOrder;
    tmdbId?: SortOrder;
    original_language?: SortOrder;
    original_title?: SortOrder;
    overview?: SortOrder;
    popularity?: SortOrder;
    poster_path?: SortOrder;
    release_date?: SortOrder;
    title?: SortOrder;
    video?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
    _count?: MovieCountOrderByAggregateInput;
    _avg?: MovieAvgOrderByAggregateInput;
    _max?: MovieMaxOrderByAggregateInput;
    _min?: MovieMinOrderByAggregateInput;
    _sum?: MovieSumOrderByAggregateInput;
  };

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[];
    OR?: MovieScalarWhereWithAggregatesInput[];
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Movie'> | string;
    adult?: BoolWithAggregatesFilter<'Movie'> | boolean;
    backdrop_path?: StringWithAggregatesFilter<'Movie'> | string;
    genre_ids?: StringNullableListFilter<'Movie'>;
    tmdbId?: StringWithAggregatesFilter<'Movie'> | string;
    original_language?: StringWithAggregatesFilter<'Movie'> | string;
    original_title?: StringWithAggregatesFilter<'Movie'> | string;
    overview?: StringWithAggregatesFilter<'Movie'> | string;
    popularity?: IntWithAggregatesFilter<'Movie'> | number;
    poster_path?: StringWithAggregatesFilter<'Movie'> | string;
    release_date?: StringWithAggregatesFilter<'Movie'> | string;
    title?: StringWithAggregatesFilter<'Movie'> | string;
    video?: BoolWithAggregatesFilter<'Movie'> | boolean;
    vote_average?: IntWithAggregatesFilter<'Movie'> | number;
    vote_count?: IntWithAggregatesFilter<'Movie'> | number;
  };

  export type ScrapeStatCreateInput = {
    id?: string;
    lastFetched?: number;
    totalPages: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ScrapeStatUncheckedCreateInput = {
    id?: string;
    lastFetched?: number;
    totalPages: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ScrapeStatUpdateInput = {
    lastFetched?: IntFieldUpdateOperationsInput | number;
    totalPages?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScrapeStatUncheckedUpdateInput = {
    lastFetched?: IntFieldUpdateOperationsInput | number;
    totalPages?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScrapeStatCreateManyInput = {
    id?: string;
    lastFetched?: number;
    totalPages: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ScrapeStatUpdateManyMutationInput = {
    lastFetched?: IntFieldUpdateOperationsInput | number;
    totalPages?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ScrapeStatUncheckedUpdateManyInput = {
    lastFetched?: IntFieldUpdateOperationsInput | number;
    totalPages?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MovieCreateInput = {
    id?: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: MovieCreategenre_idsInput | string[];
    tmdbId: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  export type MovieUncheckedCreateInput = {
    id?: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: MovieCreategenre_idsInput | string[];
    tmdbId: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  export type MovieUpdateInput = {
    adult?: BoolFieldUpdateOperationsInput | boolean;
    backdrop_path?: StringFieldUpdateOperationsInput | string;
    genre_ids?: MovieUpdategenre_idsInput | string[];
    tmdbId?: StringFieldUpdateOperationsInput | string;
    original_language?: StringFieldUpdateOperationsInput | string;
    original_title?: StringFieldUpdateOperationsInput | string;
    overview?: StringFieldUpdateOperationsInput | string;
    popularity?: IntFieldUpdateOperationsInput | number;
    poster_path?: StringFieldUpdateOperationsInput | string;
    release_date?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    video?: BoolFieldUpdateOperationsInput | boolean;
    vote_average?: IntFieldUpdateOperationsInput | number;
    vote_count?: IntFieldUpdateOperationsInput | number;
  };

  export type MovieUncheckedUpdateInput = {
    adult?: BoolFieldUpdateOperationsInput | boolean;
    backdrop_path?: StringFieldUpdateOperationsInput | string;
    genre_ids?: MovieUpdategenre_idsInput | string[];
    tmdbId?: StringFieldUpdateOperationsInput | string;
    original_language?: StringFieldUpdateOperationsInput | string;
    original_title?: StringFieldUpdateOperationsInput | string;
    overview?: StringFieldUpdateOperationsInput | string;
    popularity?: IntFieldUpdateOperationsInput | number;
    poster_path?: StringFieldUpdateOperationsInput | string;
    release_date?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    video?: BoolFieldUpdateOperationsInput | boolean;
    vote_average?: IntFieldUpdateOperationsInput | number;
    vote_count?: IntFieldUpdateOperationsInput | number;
  };

  export type MovieCreateManyInput = {
    id?: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: MovieCreategenre_idsInput | string[];
    tmdbId: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  export type MovieUpdateManyMutationInput = {
    adult?: BoolFieldUpdateOperationsInput | boolean;
    backdrop_path?: StringFieldUpdateOperationsInput | string;
    genre_ids?: MovieUpdategenre_idsInput | string[];
    tmdbId?: StringFieldUpdateOperationsInput | string;
    original_language?: StringFieldUpdateOperationsInput | string;
    original_title?: StringFieldUpdateOperationsInput | string;
    overview?: StringFieldUpdateOperationsInput | string;
    popularity?: IntFieldUpdateOperationsInput | number;
    poster_path?: StringFieldUpdateOperationsInput | string;
    release_date?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    video?: BoolFieldUpdateOperationsInput | boolean;
    vote_average?: IntFieldUpdateOperationsInput | number;
    vote_count?: IntFieldUpdateOperationsInput | number;
  };

  export type MovieUncheckedUpdateManyInput = {
    adult?: BoolFieldUpdateOperationsInput | boolean;
    backdrop_path?: StringFieldUpdateOperationsInput | string;
    genre_ids?: MovieUpdategenre_idsInput | string[];
    tmdbId?: StringFieldUpdateOperationsInput | string;
    original_language?: StringFieldUpdateOperationsInput | string;
    original_title?: StringFieldUpdateOperationsInput | string;
    overview?: StringFieldUpdateOperationsInput | string;
    popularity?: IntFieldUpdateOperationsInput | number;
    poster_path?: StringFieldUpdateOperationsInput | string;
    release_date?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    video?: BoolFieldUpdateOperationsInput | boolean;
    vote_average?: IntFieldUpdateOperationsInput | number;
    vote_count?: IntFieldUpdateOperationsInput | number;
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

  export type ScrapeStatCountOrderByAggregateInput = {
    id?: SortOrder;
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ScrapeStatAvgOrderByAggregateInput = {
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
  };

  export type ScrapeStatMaxOrderByAggregateInput = {
    id?: SortOrder;
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ScrapeStatMinOrderByAggregateInput = {
    id?: SortOrder;
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ScrapeStatSumOrderByAggregateInput = {
    lastFetched?: SortOrder;
    totalPages?: SortOrder;
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder;
    adult?: SortOrder;
    backdrop_path?: SortOrder;
    genre_ids?: SortOrder;
    tmdbId?: SortOrder;
    original_language?: SortOrder;
    original_title?: SortOrder;
    overview?: SortOrder;
    popularity?: SortOrder;
    poster_path?: SortOrder;
    release_date?: SortOrder;
    title?: SortOrder;
    video?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type MovieAvgOrderByAggregateInput = {
    popularity?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder;
    adult?: SortOrder;
    backdrop_path?: SortOrder;
    tmdbId?: SortOrder;
    original_language?: SortOrder;
    original_title?: SortOrder;
    overview?: SortOrder;
    popularity?: SortOrder;
    poster_path?: SortOrder;
    release_date?: SortOrder;
    title?: SortOrder;
    video?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder;
    adult?: SortOrder;
    backdrop_path?: SortOrder;
    tmdbId?: SortOrder;
    original_language?: SortOrder;
    original_title?: SortOrder;
    overview?: SortOrder;
    popularity?: SortOrder;
    poster_path?: SortOrder;
    release_date?: SortOrder;
    title?: SortOrder;
    video?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type MovieSumOrderByAggregateInput = {
    popularity?: SortOrder;
    vote_average?: SortOrder;
    vote_count?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type MovieCreategenre_idsInput = {
    set: string[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type MovieUpdategenre_idsInput = {
    set?: string[];
    push?: string | string[];
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

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
