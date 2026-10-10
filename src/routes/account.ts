import express, { type Request, type Response } from "express";

const app = express();

app.post(
    "/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId",
    async (_req: Request, res: Response): Promise<void> => {
        res.setHeader("Content-Type", "text/plain");
        res.status(200).send("true");
    }
);

app.get(
    "/account/api/public/account/:accountId/externalAuths",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

app.get(
    "/fortnite/api/game/v2/enabled_features",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

app.get(
    "/content-controls/:accountId",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

app.get(
    "/account/api/public/account",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({
            id: "fortnite",
            displayName: "fortnite",
            externalAuth: {},
        });
    }
);

const NAME = process.env.NAME ?? "fortnite";

app.get(
    "/account/api/public/account/:accountId",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({
            id: "fortnite",
            displayName: NAME,
            name: NAME,
            email: "fortnite@zinx.dev",
            failedLoginAttempts: 0,
            lastLogin: "Timestamp",
            numberOfDisplayNameChanges: 0,
            ageGroup: "UNKNOWN",
            headless: false,
            country: "US",
            lastName: "User",
            links: {},
            preferredLanguage: "en",
            canUpdateDisplayName: false,
            tfaEnabled: true,
            emailVerified: true,
            minorVerified: true,
            minorExpected: true,
            minorStatus: "UNKNOWN",
        });
    }
);

app.post(
    "/api/v1/user/setting",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json({
            status: "OK",
            code: 200,
        });
    }
);

app.get(
    "/socialban/api/public/v1/:accountId",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

app.get(
    "/presence/api/v1/_/:accountId/settings/subscriptions",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

app.get(
    "/fortnite/api/game/v2/privacy/account/:accountId",
    async (_req: Request, res: Response): Promise<void> => {
        res.status(200).json([]);
    }
);

export default app;
