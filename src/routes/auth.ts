import express, { Router, Request, Response } from "express";
const ACESS_TTL_SECONDS = 8 * 60 * 60; //8h
const REFRESH_TTL_SECONDS = 24 * 60 * 60; // 24h
interface OAuthToken {
  access_token: string;
  expires_in: number;
  tokena_type: "bearer";
  refresh_token: string;
  refresh_expires: number;
  refresh_expires_at: string;
  account_id: string;
  internal_client: boolean;
  client_id: string;
