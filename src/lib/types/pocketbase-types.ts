/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
	Files = 'files',
	Users = 'users'
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString;
	created: IsoDateString;
	updated: IsoDateString;
	collectionId: string;
	collectionName: Collections;
	expand?: T;
};

export type AuthSystemFields<T = never> = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export enum FilesUploadStatusOptions {
	'PENDING' = 'PENDING',
	'PROCESSING' = 'PROCESSING',
	'FAILED' = 'FAILED',
	'SUCCESS' = 'SUCCESS'
}
export type FilesRecord = {
	file: string;
	name: string;
	uploadStatus: FilesUploadStatusOptions;
	user: RecordIdString;
};

export type UsersRecord = {
	avatar?: string;
	name?: string;
	stripeCurrentPeriodEnd?: IsoDateString;
	stripeCustomerId?: string;
	stripePriceId?: string;
	stripeSubscriptionId?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type FilesResponse<Texpand = unknown> = Required<FilesRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	files: FilesRecord;
	users: UsersRecord;
};

export type CollectionResponses = {
	files: FilesResponse;
	users: UsersResponse;
};
