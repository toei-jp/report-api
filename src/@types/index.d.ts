/**
 * middlewares/authenticationにて、expressのrequestオブジェクトにAPIユーザー情報を追加している。
 * ユーザーの型をここで定義しています。
 */
import * as report from '@toei-jp/report-domain';
import * as express from 'express';

declare global {
    namespace Express {
        export type IUser = report.factory.clientUser.IClientUser;

        // tslint:disable-next-line:interface-name
        export interface Request {
            user: IUser;
            accessToken: string;
        }
    }
}
