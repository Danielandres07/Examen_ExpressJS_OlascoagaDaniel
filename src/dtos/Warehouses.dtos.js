export class WarehouseDto {
    constructor(warehouse) {
      this.id = warehouse._id;
      this.name = warehouse.name;
      this.address = warehouse.address;
      this.active = warehouse.active;
      this.createdAt = warehouse.createdAt;
      this.updatedAt = warehouse.updatedAt;
    }
  }