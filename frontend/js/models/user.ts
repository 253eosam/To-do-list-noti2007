export type UserType = {
	id: number;
	name: string;
};

export class User {
	constructor(private readonly id: number, private name: string) {}
}
