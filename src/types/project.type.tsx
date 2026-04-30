import { PostItem, type PostData, type PostLink } from './post.type';

export interface ProjectData extends PostData {
	name: string;
	link?: PostLink;
}

export class ProjectPost extends PostItem {
	constructor(data: ProjectData) {
		super(data, data.name);

		if (data.link) {
			this.setLink(data.link);
		}
	}
}
