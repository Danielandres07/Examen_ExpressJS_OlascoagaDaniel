export class CategoryDTO {
    constructor(category) {
        this.code = category.code;
        this.name = category.name;
        this.active = category.active;
    }
}
