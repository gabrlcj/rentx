export interface CreateUserDTO {
  id?: string;
  name: string;
  password: string;
  email: string;
  driverLicense: string;
  avatar?: string;
}
