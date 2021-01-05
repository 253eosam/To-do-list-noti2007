export type PostType = {
	id: number;
	contnet: string;
	createdAt: string;
	completed: boolean;
};

export class Post {
	constructor(private readonly id: number, private content: string, private readonly createdAt: string, private completed: boolean) {}
}
