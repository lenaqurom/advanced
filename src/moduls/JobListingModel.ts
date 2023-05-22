import { Model } from "@tsed/mongoose";
import { Default, Property } from "@tsed/schema";

@Model()
export class JobListingModel {
  @Property()
  title: string;

  @Property()
  description: string;

  @Property()
  requirements: string[];

  @Property()
  salaryRange: string;

  @Property()
  location: string;
}
