
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model CircleMember
 * 
 */
export type CircleMember = $Result.DefaultSelection<Prisma.$CircleMemberPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circleMember`: Exposes CRUD operations for the **CircleMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CircleMembers
    * const circleMembers = await prisma.circleMember.findMany()
    * ```
    */
  get circleMember(): Prisma.CircleMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Circle: 'Circle',
    CircleMember: 'CircleMember',
    Deposit: 'Deposit'
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
      modelProps: "user" | "circle" | "circleMember" | "deposit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          createMany: {
            args: Prisma.CircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      CircleMember: {
        payload: Prisma.$CircleMemberPayload<ExtArgs>
        fields: Prisma.CircleMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          findFirst: {
            args: Prisma.CircleMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          findMany: {
            args: Prisma.CircleMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>[]
          }
          create: {
            args: Prisma.CircleMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          createMany: {
            args: Prisma.CircleMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>[]
          }
          delete: {
            args: Prisma.CircleMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          update: {
            args: Prisma.CircleMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          deleteMany: {
            args: Prisma.CircleMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>[]
          }
          upsert: {
            args: Prisma.CircleMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircleMemberPayload>
          }
          aggregate: {
            args: Prisma.CircleMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircleMember>
          }
          groupBy: {
            args: Prisma.CircleMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CircleMemberCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
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
    user?: UserOmit
    circle?: CircleOmit
    circleMember?: CircleMemberOmit
    deposit?: DepositOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
    createdCircles: number
    deposits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    createdCircles?: boolean | UserCountOutputTypeCountCreatedCirclesArgs
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }


  /**
   * Count Type CircleCountOutputType
   */

  export type CircleCountOutputType = {
    members: number
    deposits: number
  }

  export type CircleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CircleCountOutputTypeCountMembersArgs
    deposits?: boolean | CircleCountOutputTypeCountDepositsArgs
  }

  // Custom InputTypes
  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleCountOutputType
     */
    select?: CircleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
  }

  /**
   * CircleCountOutputType without action
   */
  export type CircleCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }


  /**
   * Count Type CircleMemberCountOutputType
   */

  export type CircleMemberCountOutputType = {
    deposits: number
  }

  export type CircleMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | CircleMemberCountOutputTypeCountDepositsArgs
  }

  // Custom InputTypes
  /**
   * CircleMemberCountOutputType without action
   */
  export type CircleMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMemberCountOutputType
     */
    select?: CircleMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CircleMemberCountOutputType without action
   */
  export type CircleMemberCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    address: number
    name: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    address?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    address?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    address?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    address: string
    name: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    createdCircles?: boolean | User$createdCirclesArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    address?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "name" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    createdCircles?: boolean | User$createdCirclesArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$CircleMemberPayload<ExtArgs>[]
      createdCircles: Prisma.$CirclePayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      name: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCircles<T extends User$createdCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    cursor?: CircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }

  /**
   * User.createdCircles
   */
  export type User$createdCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    cursor?: CircleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleAvgAggregateOutputType = {
    balance: number | null
  }

  export type CircleSumAggregateOutputType = {
    balance: number | null
  }

  export type CircleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CircleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CircleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    balance: number
    createdAt: number
    updatedAt: number
    creatorId: number
    _all: number
  }


  export type CircleAvgAggregateInputType = {
    balance?: true
  }

  export type CircleSumAggregateInputType = {
    balance?: true
  }

  export type CircleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CircleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CircleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _avg?: CircleAvgAggregateInputType
    _sum?: CircleSumAggregateInputType
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    image: string | null
    balance: number
    createdAt: Date
    updatedAt: Date
    creatorId: string
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    deposits?: boolean | Circle$depositsArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
  }

  export type CircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "balance" | "createdAt" | "updatedAt" | "creatorId", ExtArgs["result"]["circle"]>
  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Circle$membersArgs<ExtArgs>
    deposits?: boolean | Circle$depositsArgs<ExtArgs>
    _count?: boolean | CircleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$CircleMemberPayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      image: string | null
      balance: number
      createdAt: Date
      updatedAt: Date
      creatorId: string
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }

  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleFindUniqueArgs>(args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleFindFirstArgs>(args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleWithIdOnly = await prisma.circle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleFindManyArgs>(args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
     */
    create<T extends CircleCreateArgs>(args: SelectSubset<T, CircleCreateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circles.
     * @param {CircleCreateManyArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleCreateManyArgs>(args?: SelectSubset<T, CircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circles and returns the data saved in the database.
     * @param {CircleCreateManyAndReturnArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
     */
    delete<T extends CircleDeleteArgs>(args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleUpdateArgs>(args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleDeleteManyArgs>(args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleUpdateManyArgs>(args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles and returns the data updated in the database.
     * @param {CircleUpdateManyAndReturnArgs} args - Arguments to update many Circles.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.updateManyAndReturn({
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
    updateManyAndReturn<T extends CircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
     */
    upsert<T extends CircleUpsertArgs>(args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
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
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Circle$membersArgs<ExtArgs> = {}>(args?: Subset<T, Circle$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deposits<T extends Circle$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Circle$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Circle model
   */
  interface CircleFieldRefs {
    readonly id: FieldRef<"Circle", 'String'>
    readonly name: FieldRef<"Circle", 'String'>
    readonly description: FieldRef<"Circle", 'String'>
    readonly image: FieldRef<"Circle", 'String'>
    readonly balance: FieldRef<"Circle", 'Float'>
    readonly createdAt: FieldRef<"Circle", 'DateTime'>
    readonly updatedAt: FieldRef<"Circle", 'DateTime'>
    readonly creatorId: FieldRef<"Circle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle createMany
   */
  export type CircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circle createManyAndReturn
   */
  export type CircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
  }

  /**
   * Circle updateManyAndReturn
   */
  export type CircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to delete.
     */
    limit?: number
  }

  /**
   * Circle.members
   */
  export type Circle$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    cursor?: CircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
  }

  /**
   * Circle.deposits
   */
  export type Circle$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
  }


  /**
   * Model CircleMember
   */

  export type AggregateCircleMember = {
    _count: CircleMemberCountAggregateOutputType | null
    _avg: CircleMemberAvgAggregateOutputType | null
    _sum: CircleMemberSumAggregateOutputType | null
    _min: CircleMemberMinAggregateOutputType | null
    _max: CircleMemberMaxAggregateOutputType | null
  }

  export type CircleMemberAvgAggregateOutputType = {
    totalSaved: number | null
  }

  export type CircleMemberSumAggregateOutputType = {
    totalSaved: number | null
  }

  export type CircleMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    circleId: string | null
    joinedAt: Date | null
    totalSaved: number | null
  }

  export type CircleMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    circleId: string | null
    joinedAt: Date | null
    totalSaved: number | null
  }

  export type CircleMemberCountAggregateOutputType = {
    id: number
    userId: number
    circleId: number
    joinedAt: number
    totalSaved: number
    _all: number
  }


  export type CircleMemberAvgAggregateInputType = {
    totalSaved?: true
  }

  export type CircleMemberSumAggregateInputType = {
    totalSaved?: true
  }

  export type CircleMemberMinAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
    totalSaved?: true
  }

  export type CircleMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
    totalSaved?: true
  }

  export type CircleMemberCountAggregateInputType = {
    id?: true
    userId?: true
    circleId?: true
    joinedAt?: true
    totalSaved?: true
    _all?: true
  }

  export type CircleMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleMember to aggregate.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CircleMembers
    **/
    _count?: true | CircleMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircleMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircleMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMemberMaxAggregateInputType
  }

  export type GetCircleMemberAggregateType<T extends CircleMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCircleMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircleMember[P]>
      : GetScalarType<T[P], AggregateCircleMember[P]>
  }




  export type CircleMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleMemberWhereInput
    orderBy?: CircleMemberOrderByWithAggregationInput | CircleMemberOrderByWithAggregationInput[]
    by: CircleMemberScalarFieldEnum[] | CircleMemberScalarFieldEnum
    having?: CircleMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleMemberCountAggregateInputType | true
    _avg?: CircleMemberAvgAggregateInputType
    _sum?: CircleMemberSumAggregateInputType
    _min?: CircleMemberMinAggregateInputType
    _max?: CircleMemberMaxAggregateInputType
  }

  export type CircleMemberGroupByOutputType = {
    id: string
    userId: string
    circleId: string
    joinedAt: Date
    totalSaved: number
    _count: CircleMemberCountAggregateOutputType | null
    _avg: CircleMemberAvgAggregateOutputType | null
    _sum: CircleMemberSumAggregateOutputType | null
    _min: CircleMemberMinAggregateOutputType | null
    _max: CircleMemberMaxAggregateOutputType | null
  }

  type GetCircleMemberGroupByPayload<T extends CircleMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CircleMemberGroupByOutputType[P]>
        }
      >
    >


  export type CircleMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
    totalSaved?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    deposits?: boolean | CircleMember$depositsArgs<ExtArgs>
    _count?: boolean | CircleMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleMember"]>

  export type CircleMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
    totalSaved?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleMember"]>

  export type CircleMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
    totalSaved?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circleMember"]>

  export type CircleMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    circleId?: boolean
    joinedAt?: boolean
    totalSaved?: boolean
  }

  export type CircleMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "circleId" | "joinedAt" | "totalSaved", ExtArgs["result"]["circleMember"]>
  export type CircleMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    deposits?: boolean | CircleMember$depositsArgs<ExtArgs>
    _count?: boolean | CircleMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CircleMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }
  export type CircleMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
  }

  export type $CircleMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CircleMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      circle: Prisma.$CirclePayload<ExtArgs>
      deposits: Prisma.$DepositPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      circleId: string
      joinedAt: Date
      totalSaved: number
    }, ExtArgs["result"]["circleMember"]>
    composites: {}
  }

  type CircleMemberGetPayload<S extends boolean | null | undefined | CircleMemberDefaultArgs> = $Result.GetResult<Prisma.$CircleMemberPayload, S>

  type CircleMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CircleMemberCountAggregateInputType | true
    }

  export interface CircleMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CircleMember'], meta: { name: 'CircleMember' } }
    /**
     * Find zero or one CircleMember that matches the filter.
     * @param {CircleMemberFindUniqueArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleMemberFindUniqueArgs>(args: SelectSubset<T, CircleMemberFindUniqueArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CircleMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleMemberFindUniqueOrThrowArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CircleMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindFirstArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleMemberFindFirstArgs>(args?: SelectSubset<T, CircleMemberFindFirstArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CircleMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindFirstOrThrowArgs} args - Arguments to find a CircleMember
     * @example
     * // Get one CircleMember
     * const circleMember = await prisma.circleMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CircleMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CircleMembers
     * const circleMembers = await prisma.circleMember.findMany()
     * 
     * // Get first 10 CircleMembers
     * const circleMembers = await prisma.circleMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleMemberWithIdOnly = await prisma.circleMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleMemberFindManyArgs>(args?: SelectSubset<T, CircleMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CircleMember.
     * @param {CircleMemberCreateArgs} args - Arguments to create a CircleMember.
     * @example
     * // Create one CircleMember
     * const CircleMember = await prisma.circleMember.create({
     *   data: {
     *     // ... data to create a CircleMember
     *   }
     * })
     * 
     */
    create<T extends CircleMemberCreateArgs>(args: SelectSubset<T, CircleMemberCreateArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CircleMembers.
     * @param {CircleMemberCreateManyArgs} args - Arguments to create many CircleMembers.
     * @example
     * // Create many CircleMembers
     * const circleMember = await prisma.circleMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleMemberCreateManyArgs>(args?: SelectSubset<T, CircleMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CircleMembers and returns the data saved in the database.
     * @param {CircleMemberCreateManyAndReturnArgs} args - Arguments to create many CircleMembers.
     * @example
     * // Create many CircleMembers
     * const circleMember = await prisma.circleMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CircleMembers and only return the `id`
     * const circleMemberWithIdOnly = await prisma.circleMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CircleMember.
     * @param {CircleMemberDeleteArgs} args - Arguments to delete one CircleMember.
     * @example
     * // Delete one CircleMember
     * const CircleMember = await prisma.circleMember.delete({
     *   where: {
     *     // ... filter to delete one CircleMember
     *   }
     * })
     * 
     */
    delete<T extends CircleMemberDeleteArgs>(args: SelectSubset<T, CircleMemberDeleteArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CircleMember.
     * @param {CircleMemberUpdateArgs} args - Arguments to update one CircleMember.
     * @example
     * // Update one CircleMember
     * const circleMember = await prisma.circleMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleMemberUpdateArgs>(args: SelectSubset<T, CircleMemberUpdateArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CircleMembers.
     * @param {CircleMemberDeleteManyArgs} args - Arguments to filter CircleMembers to delete.
     * @example
     * // Delete a few CircleMembers
     * const { count } = await prisma.circleMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleMemberDeleteManyArgs>(args?: SelectSubset<T, CircleMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CircleMembers
     * const circleMember = await prisma.circleMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleMemberUpdateManyArgs>(args: SelectSubset<T, CircleMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CircleMembers and returns the data updated in the database.
     * @param {CircleMemberUpdateManyAndReturnArgs} args - Arguments to update many CircleMembers.
     * @example
     * // Update many CircleMembers
     * const circleMember = await prisma.circleMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CircleMembers and only return the `id`
     * const circleMemberWithIdOnly = await prisma.circleMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends CircleMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CircleMember.
     * @param {CircleMemberUpsertArgs} args - Arguments to update or create a CircleMember.
     * @example
     * // Update or create a CircleMember
     * const circleMember = await prisma.circleMember.upsert({
     *   create: {
     *     // ... data to create a CircleMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CircleMember we want to update
     *   }
     * })
     */
    upsert<T extends CircleMemberUpsertArgs>(args: SelectSubset<T, CircleMemberUpsertArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberCountArgs} args - Arguments to filter CircleMembers to count.
     * @example
     * // Count the number of CircleMembers
     * const count = await prisma.circleMember.count({
     *   where: {
     *     // ... the filter for the CircleMembers we want to count
     *   }
     * })
    **/
    count<T extends CircleMemberCountArgs>(
      args?: Subset<T, CircleMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CircleMemberAggregateArgs>(args: Subset<T, CircleMemberAggregateArgs>): Prisma.PrismaPromise<GetCircleMemberAggregateType<T>>

    /**
     * Group by CircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleMemberGroupByArgs} args - Group by arguments.
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
      T extends CircleMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleMemberGroupByArgs['orderBy'] }
        : { orderBy?: CircleMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CircleMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CircleMember model
   */
  readonly fields: CircleMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CircleMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circle<T extends CircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleDefaultArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deposits<T extends CircleMember$depositsArgs<ExtArgs> = {}>(args?: Subset<T, CircleMember$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CircleMember model
   */
  interface CircleMemberFieldRefs {
    readonly id: FieldRef<"CircleMember", 'String'>
    readonly userId: FieldRef<"CircleMember", 'String'>
    readonly circleId: FieldRef<"CircleMember", 'String'>
    readonly joinedAt: FieldRef<"CircleMember", 'DateTime'>
    readonly totalSaved: FieldRef<"CircleMember", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CircleMember findUnique
   */
  export type CircleMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where: CircleMemberWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember findUniqueOrThrow
   */
  export type CircleMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where: CircleMemberWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember findFirst
   */
  export type CircleMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleMembers.
     */
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember findFirstOrThrow
   */
  export type CircleMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMember to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CircleMembers.
     */
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember findMany
   */
  export type CircleMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CircleMembers to fetch.
     */
    where?: CircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CircleMembers to fetch.
     */
    orderBy?: CircleMemberOrderByWithRelationInput | CircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CircleMembers.
     */
    cursor?: CircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CircleMembers.
     */
    skip?: number
    distinct?: CircleMemberScalarFieldEnum | CircleMemberScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember create
   */
  export type CircleMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CircleMember.
     */
    data: XOR<CircleMemberCreateInput, CircleMemberUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember createMany
   */
  export type CircleMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CircleMembers.
     */
    data: CircleMemberCreateManyInput | CircleMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CircleMember createManyAndReturn
   */
  export type CircleMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CircleMembers.
     */
    data: CircleMemberCreateManyInput | CircleMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CircleMember update
   */
  export type CircleMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CircleMember.
     */
    data: XOR<CircleMemberUpdateInput, CircleMemberUncheckedUpdateInput>
    /**
     * Choose, which CircleMember to update.
     */
    where: CircleMemberWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember updateMany
   */
  export type CircleMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CircleMembers.
     */
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyInput>
    /**
     * Filter which CircleMembers to update
     */
    where?: CircleMemberWhereInput
    /**
     * Limit how many CircleMembers to update.
     */
    limit?: number
  }

  /**
   * CircleMember updateManyAndReturn
   */
  export type CircleMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * The data used to update CircleMembers.
     */
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyInput>
    /**
     * Filter which CircleMembers to update
     */
    where?: CircleMemberWhereInput
    /**
     * Limit how many CircleMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CircleMember upsert
   */
  export type CircleMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CircleMember to update in case it exists.
     */
    where: CircleMemberWhereUniqueInput
    /**
     * In case the CircleMember found by the `where` argument doesn't exist, create a new CircleMember with this data.
     */
    create: XOR<CircleMemberCreateInput, CircleMemberUncheckedCreateInput>
    /**
     * In case the CircleMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleMemberUpdateInput, CircleMemberUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember delete
   */
  export type CircleMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
    /**
     * Filter which CircleMember to delete.
     */
    where: CircleMemberWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * CircleMember deleteMany
   */
  export type CircleMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CircleMembers to delete
     */
    where?: CircleMemberWhereInput
    /**
     * Limit how many CircleMembers to delete.
     */
    limit?: number
  }

  /**
   * CircleMember.deposits
   */
  export type CircleMember$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * CircleMember without action
   */
  export type CircleMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircleMember
     */
    select?: CircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CircleMember
     */
    omit?: CircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleMemberInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    amount: number | null
    userId: string | null
    circleId: string | null
    memberId: string | null
    txHash: string | null
    depositDate: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    userId: string | null
    circleId: string | null
    memberId: string | null
    txHash: string | null
    depositDate: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    amount: number
    userId: number
    circleId: number
    memberId: number
    txHash: number
    depositDate: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    circleId?: true
    memberId?: true
    txHash?: true
    depositDate?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    circleId?: true
    memberId?: true
    txHash?: true
    depositDate?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    circleId?: true
    memberId?: true
    txHash?: true
    depositDate?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    amount: number
    userId: string
    circleId: string
    memberId: string
    txHash: string
    depositDate: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    circleId?: boolean
    memberId?: boolean
    txHash?: boolean
    depositDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    circleId?: boolean
    memberId?: boolean
    txHash?: boolean
    depositDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    circleId?: boolean
    memberId?: boolean
    txHash?: boolean
    depositDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    amount?: boolean
    userId?: boolean
    circleId?: boolean
    memberId?: boolean
    txHash?: boolean
    depositDate?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "userId" | "circleId" | "memberId" | "txHash" | "depositDate", ExtArgs["result"]["deposit"]>
  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }
  export type DepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    circle?: boolean | CircleDefaultArgs<ExtArgs>
    member?: boolean | CircleMemberDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      circle: Prisma.$CirclePayload<ExtArgs>
      member: Prisma.$CircleMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      userId: string
      circleId: string
      memberId: string
      txHash: string
      depositDate: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circle<T extends CircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleDefaultArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends CircleMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircleMemberDefaultArgs<ExtArgs>>): Prisma__CircleMemberClient<$Result.GetResult<Prisma.$CircleMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly amount: FieldRef<"Deposit", 'Float'>
    readonly userId: FieldRef<"Deposit", 'String'>
    readonly circleId: FieldRef<"Deposit", 'String'>
    readonly memberId: FieldRef<"Deposit", 'String'>
    readonly txHash: FieldRef<"Deposit", 'String'>
    readonly depositDate: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    address: 'address',
    name: 'name',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const CircleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const CircleMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    circleId: 'circleId',
    joinedAt: 'joinedAt',
    totalSaved: 'totalSaved'
  };

  export type CircleMemberScalarFieldEnum = (typeof CircleMemberScalarFieldEnum)[keyof typeof CircleMemberScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    userId: 'userId',
    circleId: 'circleId',
    memberId: 'memberId',
    txHash: 'txHash',
    depositDate: 'depositDate'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: CircleMemberListRelationFilter
    createdCircles?: CircleListRelationFilter
    deposits?: DepositListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: CircleMemberOrderByRelationAggregateInput
    createdCircles?: CircleOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: CircleMemberListRelationFilter
    createdCircles?: CircleListRelationFilter
    deposits?: DepositListRelationFilter
  }, "id" | "address">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    id?: StringFilter<"Circle"> | string
    name?: StringFilter<"Circle"> | string
    description?: StringNullableFilter<"Circle"> | string | null
    image?: StringNullableFilter<"Circle"> | string | null
    balance?: FloatFilter<"Circle"> | number
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    creatorId?: StringFilter<"Circle"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: CircleMemberListRelationFilter
    deposits?: DepositListRelationFilter
  }

  export type CircleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    members?: CircleMemberOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    name?: StringFilter<"Circle"> | string
    description?: StringNullableFilter<"Circle"> | string | null
    image?: StringNullableFilter<"Circle"> | string | null
    balance?: FloatFilter<"Circle"> | number
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    creatorId?: StringFilter<"Circle"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: CircleMemberListRelationFilter
    deposits?: DepositListRelationFilter
  }, "id">

  export type CircleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _avg?: CircleAvgOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
    _sum?: CircleSumOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circle"> | string
    name?: StringWithAggregatesFilter<"Circle"> | string
    description?: StringNullableWithAggregatesFilter<"Circle"> | string | null
    image?: StringNullableWithAggregatesFilter<"Circle"> | string | null
    balance?: FloatWithAggregatesFilter<"Circle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Circle"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Circle"> | string
  }

  export type CircleMemberWhereInput = {
    AND?: CircleMemberWhereInput | CircleMemberWhereInput[]
    OR?: CircleMemberWhereInput[]
    NOT?: CircleMemberWhereInput | CircleMemberWhereInput[]
    id?: StringFilter<"CircleMember"> | string
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
    totalSaved?: FloatFilter<"CircleMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    deposits?: DepositListRelationFilter
  }

  export type CircleMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    totalSaved?: SortOrder
    user?: UserOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
    deposits?: DepositOrderByRelationAggregateInput
  }

  export type CircleMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_circleId?: CircleMemberUserIdCircleIdCompoundUniqueInput
    AND?: CircleMemberWhereInput | CircleMemberWhereInput[]
    OR?: CircleMemberWhereInput[]
    NOT?: CircleMemberWhereInput | CircleMemberWhereInput[]
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
    totalSaved?: FloatFilter<"CircleMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    deposits?: DepositListRelationFilter
  }, "id" | "userId_circleId">

  export type CircleMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    totalSaved?: SortOrder
    _count?: CircleMemberCountOrderByAggregateInput
    _avg?: CircleMemberAvgOrderByAggregateInput
    _max?: CircleMemberMaxOrderByAggregateInput
    _min?: CircleMemberMinOrderByAggregateInput
    _sum?: CircleMemberSumOrderByAggregateInput
  }

  export type CircleMemberScalarWhereWithAggregatesInput = {
    AND?: CircleMemberScalarWhereWithAggregatesInput | CircleMemberScalarWhereWithAggregatesInput[]
    OR?: CircleMemberScalarWhereWithAggregatesInput[]
    NOT?: CircleMemberScalarWhereWithAggregatesInput | CircleMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CircleMember"> | string
    userId?: StringWithAggregatesFilter<"CircleMember"> | string
    circleId?: StringWithAggregatesFilter<"CircleMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CircleMember"> | Date | string
    totalSaved?: FloatWithAggregatesFilter<"CircleMember"> | number
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    userId?: StringFilter<"Deposit"> | string
    circleId?: StringFilter<"Deposit"> | string
    memberId?: StringFilter<"Deposit"> | string
    txHash?: StringFilter<"Deposit"> | string
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    member?: XOR<CircleMemberScalarRelationFilter, CircleMemberWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    memberId?: SortOrder
    txHash?: SortOrder
    depositDate?: SortOrder
    user?: UserOrderByWithRelationInput
    circle?: CircleOrderByWithRelationInput
    member?: CircleMemberOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    amount?: FloatFilter<"Deposit"> | number
    userId?: StringFilter<"Deposit"> | string
    circleId?: StringFilter<"Deposit"> | string
    memberId?: StringFilter<"Deposit"> | string
    txHash?: StringFilter<"Deposit"> | string
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    circle?: XOR<CircleScalarRelationFilter, CircleWhereInput>
    member?: XOR<CircleMemberScalarRelationFilter, CircleMemberWhereInput>
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    memberId?: SortOrder
    txHash?: SortOrder
    depositDate?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    amount?: FloatWithAggregatesFilter<"Deposit"> | number
    userId?: StringWithAggregatesFilter<"Deposit"> | string
    circleId?: StringWithAggregatesFilter<"Deposit"> | string
    memberId?: StringWithAggregatesFilter<"Deposit"> | string
    txHash?: StringWithAggregatesFilter<"Deposit"> | string
    depositDate?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberCreateNestedManyWithoutUserInput
    createdCircles?: CircleCreateNestedManyWithoutCreatorInput
    deposits?: DepositCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    createdCircles?: CircleUncheckedCreateNestedManyWithoutCreatorInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUpdateManyWithoutUserNestedInput
    createdCircles?: CircleUpdateManyWithoutCreatorNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    createdCircles?: CircleUncheckedUpdateManyWithoutCreatorNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCirclesInput
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    deposits?: DepositCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    deposits?: DepositUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCirclesNestedInput
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    deposits?: DepositUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type CircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type CircleMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    totalSaved?: number
    user: UserCreateNestedOneWithoutMembershipsInput
    circle: CircleCreateNestedOneWithoutMembersInput
    deposits?: DepositCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberUncheckedCreateInput = {
    id?: string
    userId: string
    circleId: string
    joinedAt?: Date | string
    totalSaved?: number
    deposits?: DepositUncheckedCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    circle?: CircleUpdateOneRequiredWithoutMembersNestedInput
    deposits?: DepositUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    deposits?: DepositUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberCreateManyInput = {
    id?: string
    userId: string
    circleId: string
    joinedAt?: Date | string
    totalSaved?: number
  }

  export type CircleMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
  }

  export type CircleMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
  }

  export type DepositCreateInput = {
    id?: string
    amount: number
    txHash: string
    depositDate?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
    circle: CircleCreateNestedOneWithoutDepositsInput
    member: CircleMemberCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    amount: number
    userId: string
    circleId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    circle?: CircleUpdateOneRequiredWithoutDepositsNestedInput
    member?: CircleMemberUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: string
    amount: number
    userId: string
    circleId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type CircleMemberListRelationFilter = {
    every?: CircleMemberWhereInput
    some?: CircleMemberWhereInput
    none?: CircleMemberWhereInput
  }

  export type CircleListRelationFilter = {
    every?: CircleWhereInput
    some?: CircleWhereInput
    none?: CircleWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CircleMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CircleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CircleAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CircleSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CircleScalarRelationFilter = {
    is?: CircleWhereInput
    isNot?: CircleWhereInput
  }

  export type CircleMemberUserIdCircleIdCompoundUniqueInput = {
    userId: string
    circleId: string
  }

  export type CircleMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    totalSaved?: SortOrder
  }

  export type CircleMemberAvgOrderByAggregateInput = {
    totalSaved?: SortOrder
  }

  export type CircleMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    totalSaved?: SortOrder
  }

  export type CircleMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    joinedAt?: SortOrder
    totalSaved?: SortOrder
  }

  export type CircleMemberSumOrderByAggregateInput = {
    totalSaved?: SortOrder
  }

  export type CircleMemberScalarRelationFilter = {
    is?: CircleMemberWhereInput
    isNot?: CircleMemberWhereInput
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    memberId?: SortOrder
    txHash?: SortOrder
    depositDate?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    memberId?: SortOrder
    txHash?: SortOrder
    depositDate?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    circleId?: SortOrder
    memberId?: SortOrder
    txHash?: SortOrder
    depositDate?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CircleMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    createMany?: CircleMemberCreateManyUserInputEnvelope
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type CircleCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput> | CircleCreateWithoutCreatorInput[] | CircleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutCreatorInput | CircleCreateOrConnectWithoutCreatorInput[]
    createMany?: CircleCreateManyCreatorInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type CircleMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    createMany?: CircleMemberCreateManyUserInputEnvelope
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type CircleUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput> | CircleCreateWithoutCreatorInput[] | CircleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutCreatorInput | CircleCreateOrConnectWithoutCreatorInput[]
    createMany?: CircleCreateManyCreatorInputEnvelope
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CircleMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutUserInput | CircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CircleMemberCreateManyUserInputEnvelope
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutUserInput | CircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutUserInput | CircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type CircleUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput> | CircleCreateWithoutCreatorInput[] | CircleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutCreatorInput | CircleCreateOrConnectWithoutCreatorInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutCreatorInput | CircleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CircleCreateManyCreatorInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutCreatorInput | CircleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutCreatorInput | CircleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type CircleMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput> | CircleMemberCreateWithoutUserInput[] | CircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutUserInput | CircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutUserInput | CircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CircleMemberCreateManyUserInputEnvelope
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutUserInput | CircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutUserInput | CircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type CircleUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput> | CircleCreateWithoutCreatorInput[] | CircleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CircleCreateOrConnectWithoutCreatorInput | CircleCreateOrConnectWithoutCreatorInput[]
    upsert?: CircleUpsertWithWhereUniqueWithoutCreatorInput | CircleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CircleCreateManyCreatorInputEnvelope
    set?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    disconnect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    delete?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    connect?: CircleWhereUniqueInput | CircleWhereUniqueInput[]
    update?: CircleUpdateWithWhereUniqueWithoutCreatorInput | CircleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CircleUpdateManyWithWhereWithoutCreatorInput | CircleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CircleScalarWhereInput | CircleScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCirclesInput = {
    create?: XOR<UserCreateWithoutCreatedCirclesInput, UserUncheckedCreateWithoutCreatedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type CircleMemberCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    createMany?: CircleMemberCreateManyCircleInputEnvelope
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutCircleInput = {
    create?: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput> | DepositCreateWithoutCircleInput[] | DepositUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutCircleInput | DepositCreateOrConnectWithoutCircleInput[]
    createMany?: DepositCreateManyCircleInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type CircleMemberUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    createMany?: CircleMemberCreateManyCircleInputEnvelope
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutCircleInput = {
    create?: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput> | DepositCreateWithoutCircleInput[] | DepositUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutCircleInput | DepositCreateOrConnectWithoutCircleInput[]
    createMany?: DepositCreateManyCircleInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedCirclesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCirclesInput, UserUncheckedCreateWithoutCreatedCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCirclesInput
    upsert?: UserUpsertWithoutCreatedCirclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCirclesInput, UserUpdateWithoutCreatedCirclesInput>, UserUncheckedUpdateWithoutCreatedCirclesInput>
  }

  export type CircleMemberUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutCircleInput | CircleMemberUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: CircleMemberCreateManyCircleInputEnvelope
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutCircleInput | CircleMemberUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutCircleInput | CircleMemberUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutCircleNestedInput = {
    create?: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput> | DepositCreateWithoutCircleInput[] | DepositUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutCircleInput | DepositCreateOrConnectWithoutCircleInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutCircleInput | DepositUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: DepositCreateManyCircleInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutCircleInput | DepositUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutCircleInput | DepositUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type CircleMemberUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput> | CircleMemberCreateWithoutCircleInput[] | CircleMemberUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: CircleMemberCreateOrConnectWithoutCircleInput | CircleMemberCreateOrConnectWithoutCircleInput[]
    upsert?: CircleMemberUpsertWithWhereUniqueWithoutCircleInput | CircleMemberUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: CircleMemberCreateManyCircleInputEnvelope
    set?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    disconnect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    delete?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    connect?: CircleMemberWhereUniqueInput | CircleMemberWhereUniqueInput[]
    update?: CircleMemberUpdateWithWhereUniqueWithoutCircleInput | CircleMemberUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: CircleMemberUpdateManyWithWhereWithoutCircleInput | CircleMemberUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutCircleNestedInput = {
    create?: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput> | DepositCreateWithoutCircleInput[] | DepositUncheckedCreateWithoutCircleInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutCircleInput | DepositCreateOrConnectWithoutCircleInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutCircleInput | DepositUpsertWithWhereUniqueWithoutCircleInput[]
    createMany?: DepositCreateManyCircleInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutCircleInput | DepositUpdateWithWhereUniqueWithoutCircleInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutCircleInput | DepositUpdateManyWithWhereWithoutCircleInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutMembersInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput
    connect?: CircleWhereUniqueInput
  }

  export type DepositCreateNestedManyWithoutMemberInput = {
    create?: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput> | DepositCreateWithoutMemberInput[] | DepositUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutMemberInput | DepositCreateOrConnectWithoutMemberInput[]
    createMany?: DepositCreateManyMemberInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput> | DepositCreateWithoutMemberInput[] | DepositUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutMemberInput | DepositCreateOrConnectWithoutMemberInput[]
    createMany?: DepositCreateManyMemberInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type CircleUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CircleCreateOrConnectWithoutMembersInput
    upsert?: CircleUpsertWithoutMembersInput
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutMembersInput, CircleUpdateWithoutMembersInput>, CircleUncheckedUpdateWithoutMembersInput>
  }

  export type DepositUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput> | DepositCreateWithoutMemberInput[] | DepositUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutMemberInput | DepositCreateOrConnectWithoutMemberInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutMemberInput | DepositUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DepositCreateManyMemberInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutMemberInput | DepositUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutMemberInput | DepositUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput> | DepositCreateWithoutMemberInput[] | DepositUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutMemberInput | DepositCreateOrConnectWithoutMemberInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutMemberInput | DepositUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DepositCreateManyMemberInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutMemberInput | DepositUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutMemberInput | DepositUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutDepositsInput = {
    create?: XOR<CircleCreateWithoutDepositsInput, CircleUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutDepositsInput
    connect?: CircleWhereUniqueInput
  }

  export type CircleMemberCreateNestedOneWithoutDepositsInput = {
    create?: XOR<CircleMemberCreateWithoutDepositsInput, CircleMemberUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: CircleMemberCreateOrConnectWithoutDepositsInput
    connect?: CircleMemberWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type CircleUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<CircleCreateWithoutDepositsInput, CircleUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: CircleCreateOrConnectWithoutDepositsInput
    upsert?: CircleUpsertWithoutDepositsInput
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutDepositsInput, CircleUpdateWithoutDepositsInput>, CircleUncheckedUpdateWithoutDepositsInput>
  }

  export type CircleMemberUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<CircleMemberCreateWithoutDepositsInput, CircleMemberUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: CircleMemberCreateOrConnectWithoutDepositsInput
    upsert?: CircleMemberUpsertWithoutDepositsInput
    connect?: CircleMemberWhereUniqueInput
    update?: XOR<XOR<CircleMemberUpdateToOneWithWhereWithoutDepositsInput, CircleMemberUpdateWithoutDepositsInput>, CircleMemberUncheckedUpdateWithoutDepositsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CircleMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    totalSaved?: number
    circle: CircleCreateNestedOneWithoutMembersInput
    deposits?: DepositCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberUncheckedCreateWithoutUserInput = {
    id?: string
    circleId: string
    joinedAt?: Date | string
    totalSaved?: number
    deposits?: DepositUncheckedCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberCreateOrConnectWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    create: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CircleMemberCreateManyUserInputEnvelope = {
    data: CircleMemberCreateManyUserInput | CircleMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CircleCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberCreateNestedManyWithoutCircleInput
    deposits?: DepositCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
    deposits?: DepositUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutCreatorInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput>
  }

  export type CircleCreateManyCreatorInputEnvelope = {
    data: CircleCreateManyCreatorInput | CircleCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutUserInput = {
    id?: string
    amount: number
    txHash: string
    depositDate?: Date | string
    circle: CircleCreateNestedOneWithoutDepositsInput
    member: CircleMemberCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    circleId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositCreateOrConnectWithoutUserInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositCreateManyUserInputEnvelope = {
    data: DepositCreateManyUserInput | DepositCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CircleMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    update: XOR<CircleMemberUpdateWithoutUserInput, CircleMemberUncheckedUpdateWithoutUserInput>
    create: XOR<CircleMemberCreateWithoutUserInput, CircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CircleMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: CircleMemberWhereUniqueInput
    data: XOR<CircleMemberUpdateWithoutUserInput, CircleMemberUncheckedUpdateWithoutUserInput>
  }

  export type CircleMemberUpdateManyWithWhereWithoutUserInput = {
    where: CircleMemberScalarWhereInput
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type CircleMemberScalarWhereInput = {
    AND?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
    OR?: CircleMemberScalarWhereInput[]
    NOT?: CircleMemberScalarWhereInput | CircleMemberScalarWhereInput[]
    id?: StringFilter<"CircleMember"> | string
    userId?: StringFilter<"CircleMember"> | string
    circleId?: StringFilter<"CircleMember"> | string
    joinedAt?: DateTimeFilter<"CircleMember"> | Date | string
    totalSaved?: FloatFilter<"CircleMember"> | number
  }

  export type CircleUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CircleWhereUniqueInput
    update: XOR<CircleUpdateWithoutCreatorInput, CircleUncheckedUpdateWithoutCreatorInput>
    create: XOR<CircleCreateWithoutCreatorInput, CircleUncheckedCreateWithoutCreatorInput>
  }

  export type CircleUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CircleWhereUniqueInput
    data: XOR<CircleUpdateWithoutCreatorInput, CircleUncheckedUpdateWithoutCreatorInput>
  }

  export type CircleUpdateManyWithWhereWithoutCreatorInput = {
    where: CircleScalarWhereInput
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CircleScalarWhereInput = {
    AND?: CircleScalarWhereInput | CircleScalarWhereInput[]
    OR?: CircleScalarWhereInput[]
    NOT?: CircleScalarWhereInput | CircleScalarWhereInput[]
    id?: StringFilter<"Circle"> | string
    name?: StringFilter<"Circle"> | string
    description?: StringNullableFilter<"Circle"> | string | null
    image?: StringNullableFilter<"Circle"> | string | null
    balance?: FloatFilter<"Circle"> | number
    createdAt?: DateTimeFilter<"Circle"> | Date | string
    updatedAt?: DateTimeFilter<"Circle"> | Date | string
    creatorId?: StringFilter<"Circle"> | string
  }

  export type DepositUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
  }

  export type DepositUpdateManyWithWhereWithoutUserInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    userId?: StringFilter<"Deposit"> | string
    circleId?: StringFilter<"Deposit"> | string
    memberId?: StringFilter<"Deposit"> | string
    txHash?: StringFilter<"Deposit"> | string
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type UserCreateWithoutCreatedCirclesInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCirclesInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCirclesInput, UserUncheckedCreateWithoutCreatedCirclesInput>
  }

  export type CircleMemberCreateWithoutCircleInput = {
    id?: string
    joinedAt?: Date | string
    totalSaved?: number
    user: UserCreateNestedOneWithoutMembershipsInput
    deposits?: DepositCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberUncheckedCreateWithoutCircleInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    totalSaved?: number
    deposits?: DepositUncheckedCreateNestedManyWithoutMemberInput
  }

  export type CircleMemberCreateOrConnectWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    create: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput>
  }

  export type CircleMemberCreateManyCircleInputEnvelope = {
    data: CircleMemberCreateManyCircleInput | CircleMemberCreateManyCircleInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutCircleInput = {
    id?: string
    amount: number
    txHash: string
    depositDate?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
    member: CircleMemberCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutCircleInput = {
    id?: string
    amount: number
    userId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositCreateOrConnectWithoutCircleInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput>
  }

  export type DepositCreateManyCircleInputEnvelope = {
    data: DepositCreateManyCircleInput | DepositCreateManyCircleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCirclesInput = {
    update: XOR<UserUpdateWithoutCreatedCirclesInput, UserUncheckedUpdateWithoutCreatedCirclesInput>
    create: XOR<UserCreateWithoutCreatedCirclesInput, UserUncheckedCreateWithoutCreatedCirclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCirclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCirclesInput, UserUncheckedUpdateWithoutCreatedCirclesInput>
  }

  export type UserUpdateWithoutCreatedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleMemberUpsertWithWhereUniqueWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    update: XOR<CircleMemberUpdateWithoutCircleInput, CircleMemberUncheckedUpdateWithoutCircleInput>
    create: XOR<CircleMemberCreateWithoutCircleInput, CircleMemberUncheckedCreateWithoutCircleInput>
  }

  export type CircleMemberUpdateWithWhereUniqueWithoutCircleInput = {
    where: CircleMemberWhereUniqueInput
    data: XOR<CircleMemberUpdateWithoutCircleInput, CircleMemberUncheckedUpdateWithoutCircleInput>
  }

  export type CircleMemberUpdateManyWithWhereWithoutCircleInput = {
    where: CircleMemberScalarWhereInput
    data: XOR<CircleMemberUpdateManyMutationInput, CircleMemberUncheckedUpdateManyWithoutCircleInput>
  }

  export type DepositUpsertWithWhereUniqueWithoutCircleInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutCircleInput, DepositUncheckedUpdateWithoutCircleInput>
    create: XOR<DepositCreateWithoutCircleInput, DepositUncheckedCreateWithoutCircleInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutCircleInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutCircleInput, DepositUncheckedUpdateWithoutCircleInput>
  }

  export type DepositUpdateManyWithWhereWithoutCircleInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutCircleInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCircles?: CircleCreateNestedManyWithoutCreatorInput
    deposits?: DepositCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCircles?: CircleUncheckedCreateNestedManyWithoutCreatorInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type CircleCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCirclesInput
    deposits?: DepositCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    deposits?: DepositUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutMembersInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
  }

  export type DepositCreateWithoutMemberInput = {
    id?: string
    amount: number
    txHash: string
    depositDate?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
    circle: CircleCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutMemberInput = {
    id?: string
    amount: number
    userId: string
    circleId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositCreateOrConnectWithoutMemberInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput>
  }

  export type DepositCreateManyMemberInputEnvelope = {
    data: DepositCreateManyMemberInput | DepositCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCircles?: CircleUpdateManyWithoutCreatorNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCircles?: CircleUncheckedUpdateManyWithoutCreatorNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CircleUpsertWithoutMembersInput = {
    update: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
    create: XOR<CircleCreateWithoutMembersInput, CircleUncheckedCreateWithoutMembersInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutMembersInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutMembersInput, CircleUncheckedUpdateWithoutMembersInput>
  }

  export type CircleUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCirclesNestedInput
    deposits?: DepositUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deposits?: DepositUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type DepositUpsertWithWhereUniqueWithoutMemberInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutMemberInput, DepositUncheckedUpdateWithoutMemberInput>
    create: XOR<DepositCreateWithoutMemberInput, DepositUncheckedCreateWithoutMemberInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutMemberInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutMemberInput, DepositUncheckedUpdateWithoutMemberInput>
  }

  export type DepositUpdateManyWithWhereWithoutMemberInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutMemberInput>
  }

  export type UserCreateWithoutDepositsInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberCreateNestedManyWithoutUserInput
    createdCircles?: CircleCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: string
    address: string
    name?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: CircleMemberUncheckedCreateNestedManyWithoutUserInput
    createdCircles?: CircleUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type CircleCreateWithoutDepositsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCirclesInput
    members?: CircleMemberCreateNestedManyWithoutCircleInput
  }

  export type CircleUncheckedCreateWithoutDepositsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    members?: CircleMemberUncheckedCreateNestedManyWithoutCircleInput
  }

  export type CircleCreateOrConnectWithoutDepositsInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutDepositsInput, CircleUncheckedCreateWithoutDepositsInput>
  }

  export type CircleMemberCreateWithoutDepositsInput = {
    id?: string
    joinedAt?: Date | string
    totalSaved?: number
    user: UserCreateNestedOneWithoutMembershipsInput
    circle: CircleCreateNestedOneWithoutMembersInput
  }

  export type CircleMemberUncheckedCreateWithoutDepositsInput = {
    id?: string
    userId: string
    circleId: string
    joinedAt?: Date | string
    totalSaved?: number
  }

  export type CircleMemberCreateOrConnectWithoutDepositsInput = {
    where: CircleMemberWhereUniqueInput
    create: XOR<CircleMemberCreateWithoutDepositsInput, CircleMemberUncheckedCreateWithoutDepositsInput>
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUpdateManyWithoutUserNestedInput
    createdCircles?: CircleUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: CircleMemberUncheckedUpdateManyWithoutUserNestedInput
    createdCircles?: CircleUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CircleUpsertWithoutDepositsInput = {
    update: XOR<CircleUpdateWithoutDepositsInput, CircleUncheckedUpdateWithoutDepositsInput>
    create: XOR<CircleCreateWithoutDepositsInput, CircleUncheckedCreateWithoutDepositsInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutDepositsInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutDepositsInput, CircleUncheckedUpdateWithoutDepositsInput>
  }

  export type CircleUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCirclesNestedInput
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleMemberUpsertWithoutDepositsInput = {
    update: XOR<CircleMemberUpdateWithoutDepositsInput, CircleMemberUncheckedUpdateWithoutDepositsInput>
    create: XOR<CircleMemberCreateWithoutDepositsInput, CircleMemberUncheckedCreateWithoutDepositsInput>
    where?: CircleMemberWhereInput
  }

  export type CircleMemberUpdateToOneWithWhereWithoutDepositsInput = {
    where?: CircleMemberWhereInput
    data: XOR<CircleMemberUpdateWithoutDepositsInput, CircleMemberUncheckedUpdateWithoutDepositsInput>
  }

  export type CircleMemberUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    circle?: CircleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CircleMemberUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
  }

  export type CircleMemberCreateManyUserInput = {
    id?: string
    circleId: string
    joinedAt?: Date | string
    totalSaved?: number
  }

  export type CircleCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateManyUserInput = {
    id?: string
    amount: number
    circleId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type CircleMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    circle?: CircleUpdateOneRequiredWithoutMembersNestedInput
    deposits?: DepositUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    deposits?: DepositUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
  }

  export type CircleUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUpdateManyWithoutCircleNestedInput
    deposits?: DepositUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CircleMemberUncheckedUpdateManyWithoutCircleNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    circle?: CircleUpdateOneRequiredWithoutDepositsNestedInput
    member?: CircleMemberUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    circleId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    circleId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircleMemberCreateManyCircleInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    totalSaved?: number
  }

  export type DepositCreateManyCircleInput = {
    id?: string
    amount: number
    userId: string
    memberId: string
    txHash: string
    depositDate?: Date | string
  }

  export type CircleMemberUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    deposits?: DepositUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
    deposits?: DepositUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type CircleMemberUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSaved?: FloatFieldUpdateOperationsInput | number
  }

  export type DepositUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    member?: CircleMemberUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyMemberInput = {
    id?: string
    amount: number
    userId: string
    circleId: string
    txHash: string
    depositDate?: Date | string
  }

  export type DepositUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    circle?: CircleUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    circleId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
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