import { faker } from "@faker-js/faker";

export const registrationData = {
  userLogin: faker.person.firstName(),
  userEmail: faker.internet.email(),
  userPassword: faker.internet.password({ length: 12, prefix: "Te1!" }),
  userName: faker.person.firstName(),
  userLastName: faker.person.lastName(),
};
