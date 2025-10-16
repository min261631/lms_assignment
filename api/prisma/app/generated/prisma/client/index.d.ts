
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EscapeRoom
 * 
 */
export type EscapeRoom = $Result.DefaultSelection<Prisma.$EscapeRoomPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EscapeRooms
 * const escapeRooms = await prisma.escapeRoom.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EscapeRooms
   * const escapeRooms = await prisma.escapeRoom.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.escapeRoom`: Exposes CRUD operations for the **EscapeRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EscapeRooms
    * const escapeRooms = await prisma.escapeRoom.findMany()
    * ```
    */
  get escapeRoom(): Prisma.EscapeRoomDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    EscapeRoom: 'EscapeRoom'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "escapeRoom"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EscapeRoom: {
        payload: Prisma.$EscapeRoomPayload<ExtArgs>
        fields: Prisma.EscapeRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscapeRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscapeRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          findFirst: {
            args: Prisma.EscapeRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscapeRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          findMany: {
            args: Prisma.EscapeRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>[]
          }
          create: {
            args: Prisma.EscapeRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          createMany: {
            args: Prisma.EscapeRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscapeRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>[]
          }
          delete: {
            args: Prisma.EscapeRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          update: {
            args: Prisma.EscapeRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          deleteMany: {
            args: Prisma.EscapeRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscapeRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscapeRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>[]
          }
          upsert: {
            args: Prisma.EscapeRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomPayload>
          }
          aggregate: {
            args: Prisma.EscapeRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscapeRoom>
          }
          groupBy: {
            args: Prisma.EscapeRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscapeRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscapeRoomCountArgs<ExtArgs>
            result: $Utils.Optional<EscapeRoomCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    escapeRoom?: EscapeRoomOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model EscapeRoom
   */

  export type AggregateEscapeRoom = {
    _count: EscapeRoomCountAggregateOutputType | null
    _avg: EscapeRoomAvgAggregateOutputType | null
    _sum: EscapeRoomSumAggregateOutputType | null
    _min: EscapeRoomMinAggregateOutputType | null
    _max: EscapeRoomMaxAggregateOutputType | null
  }

  export type EscapeRoomAvgAggregateOutputType = {
    timerMinutes: number | null
  }

  export type EscapeRoomSumAggregateOutputType = {
    timerMinutes: number | null
  }

  export type EscapeRoomMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timerMinutes: number | null
    backgroundImage: string | null
    generatedHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscapeRoomMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timerMinutes: number | null
    backgroundImage: string | null
    generatedHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscapeRoomCountAggregateOutputType = {
    id: number
    title: number
    description: number
    timerMinutes: number
    backgroundImage: number
    stages: number
    generatedHtml: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EscapeRoomAvgAggregateInputType = {
    timerMinutes?: true
  }

  export type EscapeRoomSumAggregateInputType = {
    timerMinutes?: true
  }

  export type EscapeRoomMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timerMinutes?: true
    backgroundImage?: true
    generatedHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscapeRoomMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timerMinutes?: true
    backgroundImage?: true
    generatedHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscapeRoomCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timerMinutes?: true
    backgroundImage?: true
    stages?: true
    generatedHtml?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EscapeRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscapeRoom to aggregate.
     */
    where?: EscapeRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRooms to fetch.
     */
    orderBy?: EscapeRoomOrderByWithRelationInput | EscapeRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscapeRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EscapeRooms
    **/
    _count?: true | EscapeRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscapeRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscapeRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscapeRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscapeRoomMaxAggregateInputType
  }

  export type GetEscapeRoomAggregateType<T extends EscapeRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateEscapeRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscapeRoom[P]>
      : GetScalarType<T[P], AggregateEscapeRoom[P]>
  }




  export type EscapeRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscapeRoomWhereInput
    orderBy?: EscapeRoomOrderByWithAggregationInput | EscapeRoomOrderByWithAggregationInput[]
    by: EscapeRoomScalarFieldEnum[] | EscapeRoomScalarFieldEnum
    having?: EscapeRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscapeRoomCountAggregateInputType | true
    _avg?: EscapeRoomAvgAggregateInputType
    _sum?: EscapeRoomSumAggregateInputType
    _min?: EscapeRoomMinAggregateInputType
    _max?: EscapeRoomMaxAggregateInputType
  }

  export type EscapeRoomGroupByOutputType = {
    id: string
    title: string
    description: string
    timerMinutes: number
    backgroundImage: string
    stages: JsonValue
    generatedHtml: string
    createdAt: Date
    updatedAt: Date
    _count: EscapeRoomCountAggregateOutputType | null
    _avg: EscapeRoomAvgAggregateOutputType | null
    _sum: EscapeRoomSumAggregateOutputType | null
    _min: EscapeRoomMinAggregateOutputType | null
    _max: EscapeRoomMaxAggregateOutputType | null
  }

  type GetEscapeRoomGroupByPayload<T extends EscapeRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscapeRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscapeRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscapeRoomGroupByOutputType[P]>
            : GetScalarType<T[P], EscapeRoomGroupByOutputType[P]>
        }
      >
    >


  export type EscapeRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timerMinutes?: boolean
    backgroundImage?: boolean
    stages?: boolean
    generatedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoom"]>

  export type EscapeRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timerMinutes?: boolean
    backgroundImage?: boolean
    stages?: boolean
    generatedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoom"]>

  export type EscapeRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timerMinutes?: boolean
    backgroundImage?: boolean
    stages?: boolean
    generatedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoom"]>

  export type EscapeRoomSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    timerMinutes?: boolean
    backgroundImage?: boolean
    stages?: boolean
    generatedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EscapeRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "timerMinutes" | "backgroundImage" | "stages" | "generatedHtml" | "createdAt" | "updatedAt", ExtArgs["result"]["escapeRoom"]>

  export type $EscapeRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EscapeRoom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      timerMinutes: number
      backgroundImage: string
      stages: Prisma.JsonValue
      generatedHtml: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["escapeRoom"]>
    composites: {}
  }

  type EscapeRoomGetPayload<S extends boolean | null | undefined | EscapeRoomDefaultArgs> = $Result.GetResult<Prisma.$EscapeRoomPayload, S>

  type EscapeRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscapeRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscapeRoomCountAggregateInputType | true
    }

  export interface EscapeRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EscapeRoom'], meta: { name: 'EscapeRoom' } }
    /**
     * Find zero or one EscapeRoom that matches the filter.
     * @param {EscapeRoomFindUniqueArgs} args - Arguments to find a EscapeRoom
     * @example
     * // Get one EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscapeRoomFindUniqueArgs>(args: SelectSubset<T, EscapeRoomFindUniqueArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EscapeRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscapeRoomFindUniqueOrThrowArgs} args - Arguments to find a EscapeRoom
     * @example
     * // Get one EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscapeRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, EscapeRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscapeRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomFindFirstArgs} args - Arguments to find a EscapeRoom
     * @example
     * // Get one EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscapeRoomFindFirstArgs>(args?: SelectSubset<T, EscapeRoomFindFirstArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscapeRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomFindFirstOrThrowArgs} args - Arguments to find a EscapeRoom
     * @example
     * // Get one EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscapeRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, EscapeRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscapeRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EscapeRooms
     * const escapeRooms = await prisma.escapeRoom.findMany()
     * 
     * // Get first 10 EscapeRooms
     * const escapeRooms = await prisma.escapeRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escapeRoomWithIdOnly = await prisma.escapeRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscapeRoomFindManyArgs>(args?: SelectSubset<T, EscapeRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EscapeRoom.
     * @param {EscapeRoomCreateArgs} args - Arguments to create a EscapeRoom.
     * @example
     * // Create one EscapeRoom
     * const EscapeRoom = await prisma.escapeRoom.create({
     *   data: {
     *     // ... data to create a EscapeRoom
     *   }
     * })
     * 
     */
    create<T extends EscapeRoomCreateArgs>(args: SelectSubset<T, EscapeRoomCreateArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EscapeRooms.
     * @param {EscapeRoomCreateManyArgs} args - Arguments to create many EscapeRooms.
     * @example
     * // Create many EscapeRooms
     * const escapeRoom = await prisma.escapeRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscapeRoomCreateManyArgs>(args?: SelectSubset<T, EscapeRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EscapeRooms and returns the data saved in the database.
     * @param {EscapeRoomCreateManyAndReturnArgs} args - Arguments to create many EscapeRooms.
     * @example
     * // Create many EscapeRooms
     * const escapeRoom = await prisma.escapeRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EscapeRooms and only return the `id`
     * const escapeRoomWithIdOnly = await prisma.escapeRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscapeRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, EscapeRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EscapeRoom.
     * @param {EscapeRoomDeleteArgs} args - Arguments to delete one EscapeRoom.
     * @example
     * // Delete one EscapeRoom
     * const EscapeRoom = await prisma.escapeRoom.delete({
     *   where: {
     *     // ... filter to delete one EscapeRoom
     *   }
     * })
     * 
     */
    delete<T extends EscapeRoomDeleteArgs>(args: SelectSubset<T, EscapeRoomDeleteArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EscapeRoom.
     * @param {EscapeRoomUpdateArgs} args - Arguments to update one EscapeRoom.
     * @example
     * // Update one EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscapeRoomUpdateArgs>(args: SelectSubset<T, EscapeRoomUpdateArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EscapeRooms.
     * @param {EscapeRoomDeleteManyArgs} args - Arguments to filter EscapeRooms to delete.
     * @example
     * // Delete a few EscapeRooms
     * const { count } = await prisma.escapeRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscapeRoomDeleteManyArgs>(args?: SelectSubset<T, EscapeRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscapeRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EscapeRooms
     * const escapeRoom = await prisma.escapeRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscapeRoomUpdateManyArgs>(args: SelectSubset<T, EscapeRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscapeRooms and returns the data updated in the database.
     * @param {EscapeRoomUpdateManyAndReturnArgs} args - Arguments to update many EscapeRooms.
     * @example
     * // Update many EscapeRooms
     * const escapeRoom = await prisma.escapeRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EscapeRooms and only return the `id`
     * const escapeRoomWithIdOnly = await prisma.escapeRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EscapeRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, EscapeRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EscapeRoom.
     * @param {EscapeRoomUpsertArgs} args - Arguments to update or create a EscapeRoom.
     * @example
     * // Update or create a EscapeRoom
     * const escapeRoom = await prisma.escapeRoom.upsert({
     *   create: {
     *     // ... data to create a EscapeRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EscapeRoom we want to update
     *   }
     * })
     */
    upsert<T extends EscapeRoomUpsertArgs>(args: SelectSubset<T, EscapeRoomUpsertArgs<ExtArgs>>): Prisma__EscapeRoomClient<$Result.GetResult<Prisma.$EscapeRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EscapeRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomCountArgs} args - Arguments to filter EscapeRooms to count.
     * @example
     * // Count the number of EscapeRooms
     * const count = await prisma.escapeRoom.count({
     *   where: {
     *     // ... the filter for the EscapeRooms we want to count
     *   }
     * })
    **/
    count<T extends EscapeRoomCountArgs>(
      args?: Subset<T, EscapeRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscapeRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EscapeRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscapeRoomAggregateArgs>(args: Subset<T, EscapeRoomAggregateArgs>): Prisma.PrismaPromise<GetEscapeRoomAggregateType<T>>

    /**
     * Group by EscapeRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomGroupByArgs} args - Group by arguments.
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
      T extends EscapeRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscapeRoomGroupByArgs['orderBy'] }
        : { orderBy?: EscapeRoomGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EscapeRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscapeRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EscapeRoom model
   */
  readonly fields: EscapeRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EscapeRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscapeRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EscapeRoom model
   */
  interface EscapeRoomFieldRefs {
    readonly id: FieldRef<"EscapeRoom", 'String'>
    readonly title: FieldRef<"EscapeRoom", 'String'>
    readonly description: FieldRef<"EscapeRoom", 'String'>
    readonly timerMinutes: FieldRef<"EscapeRoom", 'Int'>
    readonly backgroundImage: FieldRef<"EscapeRoom", 'String'>
    readonly stages: FieldRef<"EscapeRoom", 'Json'>
    readonly generatedHtml: FieldRef<"EscapeRoom", 'String'>
    readonly createdAt: FieldRef<"EscapeRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"EscapeRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EscapeRoom findUnique
   */
  export type EscapeRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoom to fetch.
     */
    where: EscapeRoomWhereUniqueInput
  }

  /**
   * EscapeRoom findUniqueOrThrow
   */
  export type EscapeRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoom to fetch.
     */
    where: EscapeRoomWhereUniqueInput
  }

  /**
   * EscapeRoom findFirst
   */
  export type EscapeRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoom to fetch.
     */
    where?: EscapeRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRooms to fetch.
     */
    orderBy?: EscapeRoomOrderByWithRelationInput | EscapeRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscapeRooms.
     */
    cursor?: EscapeRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscapeRooms.
     */
    distinct?: EscapeRoomScalarFieldEnum | EscapeRoomScalarFieldEnum[]
  }

  /**
   * EscapeRoom findFirstOrThrow
   */
  export type EscapeRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoom to fetch.
     */
    where?: EscapeRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRooms to fetch.
     */
    orderBy?: EscapeRoomOrderByWithRelationInput | EscapeRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscapeRooms.
     */
    cursor?: EscapeRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscapeRooms.
     */
    distinct?: EscapeRoomScalarFieldEnum | EscapeRoomScalarFieldEnum[]
  }

  /**
   * EscapeRoom findMany
   */
  export type EscapeRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRooms to fetch.
     */
    where?: EscapeRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRooms to fetch.
     */
    orderBy?: EscapeRoomOrderByWithRelationInput | EscapeRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EscapeRooms.
     */
    cursor?: EscapeRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRooms.
     */
    skip?: number
    distinct?: EscapeRoomScalarFieldEnum | EscapeRoomScalarFieldEnum[]
  }

  /**
   * EscapeRoom create
   */
  export type EscapeRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * The data needed to create a EscapeRoom.
     */
    data: XOR<EscapeRoomCreateInput, EscapeRoomUncheckedCreateInput>
  }

  /**
   * EscapeRoom createMany
   */
  export type EscapeRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EscapeRooms.
     */
    data: EscapeRoomCreateManyInput | EscapeRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscapeRoom createManyAndReturn
   */
  export type EscapeRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * The data used to create many EscapeRooms.
     */
    data: EscapeRoomCreateManyInput | EscapeRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscapeRoom update
   */
  export type EscapeRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * The data needed to update a EscapeRoom.
     */
    data: XOR<EscapeRoomUpdateInput, EscapeRoomUncheckedUpdateInput>
    /**
     * Choose, which EscapeRoom to update.
     */
    where: EscapeRoomWhereUniqueInput
  }

  /**
   * EscapeRoom updateMany
   */
  export type EscapeRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EscapeRooms.
     */
    data: XOR<EscapeRoomUpdateManyMutationInput, EscapeRoomUncheckedUpdateManyInput>
    /**
     * Filter which EscapeRooms to update
     */
    where?: EscapeRoomWhereInput
    /**
     * Limit how many EscapeRooms to update.
     */
    limit?: number
  }

  /**
   * EscapeRoom updateManyAndReturn
   */
  export type EscapeRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * The data used to update EscapeRooms.
     */
    data: XOR<EscapeRoomUpdateManyMutationInput, EscapeRoomUncheckedUpdateManyInput>
    /**
     * Filter which EscapeRooms to update
     */
    where?: EscapeRoomWhereInput
    /**
     * Limit how many EscapeRooms to update.
     */
    limit?: number
  }

  /**
   * EscapeRoom upsert
   */
  export type EscapeRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * The filter to search for the EscapeRoom to update in case it exists.
     */
    where: EscapeRoomWhereUniqueInput
    /**
     * In case the EscapeRoom found by the `where` argument doesn't exist, create a new EscapeRoom with this data.
     */
    create: XOR<EscapeRoomCreateInput, EscapeRoomUncheckedCreateInput>
    /**
     * In case the EscapeRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscapeRoomUpdateInput, EscapeRoomUncheckedUpdateInput>
  }

  /**
   * EscapeRoom delete
   */
  export type EscapeRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
    /**
     * Filter which EscapeRoom to delete.
     */
    where: EscapeRoomWhereUniqueInput
  }

  /**
   * EscapeRoom deleteMany
   */
  export type EscapeRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscapeRooms to delete
     */
    where?: EscapeRoomWhereInput
    /**
     * Limit how many EscapeRooms to delete.
     */
    limit?: number
  }

  /**
   * EscapeRoom without action
   */
  export type EscapeRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoom
     */
    select?: EscapeRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoom
     */
    omit?: EscapeRoomOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EscapeRoomScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    timerMinutes: 'timerMinutes',
    backgroundImage: 'backgroundImage',
    stages: 'stages',
    generatedHtml: 'generatedHtml',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EscapeRoomScalarFieldEnum = (typeof EscapeRoomScalarFieldEnum)[keyof typeof EscapeRoomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EscapeRoomWhereInput = {
    AND?: EscapeRoomWhereInput | EscapeRoomWhereInput[]
    OR?: EscapeRoomWhereInput[]
    NOT?: EscapeRoomWhereInput | EscapeRoomWhereInput[]
    id?: StringFilter<"EscapeRoom"> | string
    title?: StringFilter<"EscapeRoom"> | string
    description?: StringFilter<"EscapeRoom"> | string
    timerMinutes?: IntFilter<"EscapeRoom"> | number
    backgroundImage?: StringFilter<"EscapeRoom"> | string
    stages?: JsonFilter<"EscapeRoom">
    generatedHtml?: StringFilter<"EscapeRoom"> | string
    createdAt?: DateTimeFilter<"EscapeRoom"> | Date | string
    updatedAt?: DateTimeFilter<"EscapeRoom"> | Date | string
  }

  export type EscapeRoomOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timerMinutes?: SortOrder
    backgroundImage?: SortOrder
    stages?: SortOrder
    generatedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscapeRoomWhereInput | EscapeRoomWhereInput[]
    OR?: EscapeRoomWhereInput[]
    NOT?: EscapeRoomWhereInput | EscapeRoomWhereInput[]
    title?: StringFilter<"EscapeRoom"> | string
    description?: StringFilter<"EscapeRoom"> | string
    timerMinutes?: IntFilter<"EscapeRoom"> | number
    backgroundImage?: StringFilter<"EscapeRoom"> | string
    stages?: JsonFilter<"EscapeRoom">
    generatedHtml?: StringFilter<"EscapeRoom"> | string
    createdAt?: DateTimeFilter<"EscapeRoom"> | Date | string
    updatedAt?: DateTimeFilter<"EscapeRoom"> | Date | string
  }, "id">

  export type EscapeRoomOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timerMinutes?: SortOrder
    backgroundImage?: SortOrder
    stages?: SortOrder
    generatedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EscapeRoomCountOrderByAggregateInput
    _avg?: EscapeRoomAvgOrderByAggregateInput
    _max?: EscapeRoomMaxOrderByAggregateInput
    _min?: EscapeRoomMinOrderByAggregateInput
    _sum?: EscapeRoomSumOrderByAggregateInput
  }

  export type EscapeRoomScalarWhereWithAggregatesInput = {
    AND?: EscapeRoomScalarWhereWithAggregatesInput | EscapeRoomScalarWhereWithAggregatesInput[]
    OR?: EscapeRoomScalarWhereWithAggregatesInput[]
    NOT?: EscapeRoomScalarWhereWithAggregatesInput | EscapeRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EscapeRoom"> | string
    title?: StringWithAggregatesFilter<"EscapeRoom"> | string
    description?: StringWithAggregatesFilter<"EscapeRoom"> | string
    timerMinutes?: IntWithAggregatesFilter<"EscapeRoom"> | number
    backgroundImage?: StringWithAggregatesFilter<"EscapeRoom"> | string
    stages?: JsonWithAggregatesFilter<"EscapeRoom">
    generatedHtml?: StringWithAggregatesFilter<"EscapeRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EscapeRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EscapeRoom"> | Date | string
  }

  export type EscapeRoomCreateInput = {
    id?: string
    title: string
    description: string
    timerMinutes: number
    backgroundImage: string
    stages: JsonNullValueInput | InputJsonValue
    generatedHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    timerMinutes: number
    backgroundImage: string
    stages: JsonNullValueInput | InputJsonValue
    generatedHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timerMinutes?: IntFieldUpdateOperationsInput | number
    backgroundImage?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    generatedHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timerMinutes?: IntFieldUpdateOperationsInput | number
    backgroundImage?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    generatedHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomCreateManyInput = {
    id?: string
    title: string
    description: string
    timerMinutes: number
    backgroundImage: string
    stages: JsonNullValueInput | InputJsonValue
    generatedHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timerMinutes?: IntFieldUpdateOperationsInput | number
    backgroundImage?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    generatedHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timerMinutes?: IntFieldUpdateOperationsInput | number
    backgroundImage?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    generatedHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EscapeRoomCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timerMinutes?: SortOrder
    backgroundImage?: SortOrder
    stages?: SortOrder
    generatedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomAvgOrderByAggregateInput = {
    timerMinutes?: SortOrder
  }

  export type EscapeRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timerMinutes?: SortOrder
    backgroundImage?: SortOrder
    generatedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timerMinutes?: SortOrder
    backgroundImage?: SortOrder
    generatedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomSumOrderByAggregateInput = {
    timerMinutes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}