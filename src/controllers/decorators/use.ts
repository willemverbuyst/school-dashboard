import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, _desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
